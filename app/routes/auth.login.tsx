import { LoginForm } from "~/components/LoginForm";
import { SimpleLayout } from "~/components/SimpleLayout";

export { loader, action } from "~/routes/auth";

export default function Login() {
  return (
    <SimpleLayout title="Log in" intro="You probably shouldn't be here">
      <LoginForm />
    </SimpleLayout>
  );
}
