import { type LoaderArgs } from "@remix-run/cloudflare";
import { Container } from "~/components/Container";

export async function loader({ context: { auth } }: LoaderArgs) {
  const user = await auth.user();

  console.log({ user });

  return {};
}

export default function Index() {
  return (
    <Container className="mt-9">
      <p>Hello, world</p>
    </Container>
  );
}
