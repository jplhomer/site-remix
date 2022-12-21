import {
  json,
  redirect,
  type LoaderArgs,
  type ActionArgs,
} from "@remix-run/cloudflare";
import invariant from "tiny-invariant";
import { LoginForm } from "~/components/LoginForm";
import { SimpleLayout } from "~/components/SimpleLayout";
import bcrypt from "bcryptjs";

export async function loader({ context: { auth } }: LoaderArgs) {
  if (await auth.check()) {
    return redirect("/");
  }

  return {};
}

export async function action({ request, context: { auth, DB } }: ActionArgs) {
  const form = new URLSearchParams(await request.text());
  const email = form.get("email");
  const password = form.get("password");

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

  try {
    const result = await DB.prepare(
      `INSERT INTO users (email, password) VALUES (?, ?)`
    )
      .bind(email, await bcrypt.hash(password, 10))
      .run();

    const userId = result.lastRowId;

    invariant(userId, "Failed to create user");

    const user = {
      id: userId,
      email,
    };

    // Under the hood, updates session to include user data.
    return auth.login(user, "/");
  } catch (e: any) {
    console.log({
      message: e.message,
      cause: e.cause.message,
    });

    return json(
      {
        error: "An error occurred",
      },
      { status: 500 }
    );
  }
}

export default function Register() {
  return (
    <SimpleLayout title="Register" intro="You probably shouldn't be here">
      <LoginForm isRegister={true} />
    </SimpleLayout>
  );
}
