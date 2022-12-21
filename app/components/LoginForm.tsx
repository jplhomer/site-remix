import { Form, useActionData } from "@remix-run/react";
import { Label, Input, ValidationError, Button } from "~/components/Form";
import { INTENTS } from "~/routes/auth";

export function LoginForm({ isRegister = false }) {
  const actionData = useActionData();

  return (
    <Form method="post" replace>
      <input
        type="hidden"
        name="intent"
        value={isRegister ? INTENTS.register : INTENTS.login}
      />

      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" name="email" className="w-full" />

      <Label htmlFor="password">Password</Label>
      <Input type="password" id="password" name="password" className="w-full" />

      {actionData?.error && (
        <ValidationError>{actionData.error}</ValidationError>
      )}

      <div className="text-right">
        <Button type="submit">{isRegister ? "Register" : "Log in"}</Button>
      </div>
    </Form>
  );
}
