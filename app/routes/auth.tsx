import {
  type LoaderArgs,
  type ActionArgs,
  json,
  redirect,
} from "@remix-run/cloudflare";
import { Form } from "@remix-run/react";
import bcrypt from "bcryptjs";
import React from "react";

export async function loader({ context: { auth } }: LoaderArgs) {
  if (await auth.check()) {
    return redirect("/");
  }

  return null;
}

export const INTENTS = {
  login: "login",
  register: "register",
  logout: "logout",
};

const badRequest = (error: string) => json({ error }, { status: 400 });

export async function action({ request, context: { auth, DB } }: ActionArgs) {
  const form = new URLSearchParams(await request.text());
  const email = form.get("email")?.toLowerCase();
  const password = form.get("password");
  const intent = form.get("intent");

  if (intent === INTENTS.logout) {
    return redirect("/", {
      headers: {
        "set-cookie": await auth.logout(),
      },
    });
  }

  if (!email) {
    return badRequest("Missing email");
  }

  if (!password) {
    return badRequest("Missing password");
  }

  switch (intent) {
    case INTENTS.register:
      if (email !== "jplhomer@gmail.com") {
        return badRequest("You are not me. Sorry, not sorry.");
      }

      /**
       * N.B. calling `first()` here breaks in prod but not locally. I'm not sure why.
       */
      const existingUser = await DB.prepare(
        `SELECT id FROM users WHERE email = ?`
      )
        .bind(email)
        .all<{ id: number }>();

      if (existingUser.results?.length) {
        return badRequest(
          "A user is registered with that email address. Did you mean to log in?"
        );
      }

      try {
        await DB.prepare(`INSERT INTO users (email, password) VALUES (?, ?)`)
          .bind(email, await bcrypt.hash(password, 10))
          .run();

        /**
         * TODO: Is there a way to get the lastRowId? Works locally but not in production :sob:
         */
        const { id } = await DB.prepare(`SELECT id FROM users WHERE email = ?`)
          .bind(email)
          .first<{ id: number }>();

        const user = {
          id,
          email,
        };

        return redirect("/", {
          headers: {
            "set-cookie": await auth.login(user),
          },
        });
      } catch (e: any) {
        console.log({
          message: e.message,
          cause: e.cause?.message,
        });

        return json(
          {
            error: "Something went wrong. Please try again later.",
          },
          { status: 500 }
        );
      }

    case INTENTS.login:
      const cookie = await auth.attempt(email, password);

      if (!cookie) {
        return badRequest("Invalid email or password");
      }

      return redirect("/", {
        headers: {
          "set-cookie": cookie,
        },
      });
  }

  throw new Error(`Invalid intent: ${intent}`);
}

export function LogOutButton({
  children,
  ...props
}: { children: React.ReactNode } & React.ComponentProps<"button">) {
  return (
    <Form method="post" action="/auth">
      <input type="hidden" name="intent" value={INTENTS.logout} />
      <button {...props}>{children}</button>
    </Form>
  );
}
