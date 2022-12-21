import { type ActionArgs, json } from "@remix-run/cloudflare";
import { LoginForm } from "~/components/LoginForm";
import { SimpleLayout } from "~/components/SimpleLayout";

export async function action({ request, context: { auth } }: ActionArgs) {
  const formData = new URLSearchParams(await request.text());
  const email = formData.get("email");
  const password = formData.get("password");

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

  const response = await auth.attempt(email, password, "/");

  if (!response) {
    return json(
      {
        error: "Invalid credentials",
      },
      { status: 400 }
    );
  }

  return response;
}

export default function Login() {
  return (
    <SimpleLayout title="Log in" intro="You probably shouldn't be here">
      <LoginForm />
    </SimpleLayout>
  );
}
