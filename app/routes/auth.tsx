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

export async function action({ request, context: { auth, DB } }: ActionArgs) {
  const form = new URLSearchParams(await request.text());
  const email = form.get("email");
  const password = form.get("password");
  const intent = form.get("intent");

  switch (intent) {
    case INTENTS.register:
      if (!email) {
        return json(
          {
            error: "Missing email",
          },
          { status: 400 }
        );
      }

      if (!password) {
        return json(
          {
            error: "Missing password",
          },
          { status: 400 }
        );
      }

      if (email !== "jplhomer@gmail.com") {
        return json(
          {
            error: "You are not me. Sorry, not sorry.",
          },
          { status: 400 }
        );
      }

      const existingUser = await DB.prepare(
        `SELECT id FROM users WHERE email = ?`
      )
        .bind(email)
        .first<{ id: number }>();

      if (existingUser) {
        return json(
          {
            error:
              "A user is registered with that email address. Did you mean to log in?",
          },
          { status: 400 }
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

        return auth.login(user, "/");
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
      if (!email) {
        return json(
          {
            error: "Missing email",
          },
          { status: 400 }
        );
      }

      if (!password) {
        return json(
          {
            error: "Missing password",
          },
          { status: 400 }
        );
      }

      return auth.attempt(email, password, "/");

    case INTENTS.logout:
      return auth.logout();
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
