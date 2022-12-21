import { LoginForm } from "~/components/LoginForm";
import { SimpleLayout } from "~/components/SimpleLayout";

export { loader, action } from "~/routes/auth";

export default function Register() {
  return (
    <SimpleLayout title="Register" intro="You probably shouldn't be here">
      <LoginForm isRegister={true} />
    </SimpleLayout>
  );
}
