import type { ActionArgs, LoaderArgs } from "@remix-run/cloudflare";
import { json, redirect } from "@remix-run/cloudflare";
import { PostForm } from "~/components/PostForm";
import { SimpleLayout } from "~/components/SimpleLayout";
import { Post } from "~/models/Post";

export async function loader({ request, context: { auth } }: LoaderArgs) {
  if (!(await auth.check())) {
    return redirect("/auth/login");
  }

  return {};
}

export async function action({ request, context: { DB, auth } }: ActionArgs) {
  const form = new URLSearchParams(await request.text());
  const title = form.get("title");
  const content = form.get("content");
  const description = form.get("description");
  const createdAt = form.get("createdAt");
  const userId = await auth.id();

  if (!title) {
    return json(
      {
        error: "Missing title",
      },
      { status: 400 }
    );
  }

  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

  const post = new Post({
    title,
    content,
    description,
    slug,
    userId,
    status: "draft",
  });

  if (createdAt) {
    post.createdAt = createdAt;
  }

  await post.save();

  return redirect(`/posts/${slug}`);
}

export default function NewPost() {
  return (
    <SimpleLayout title="New Post" intro="Create a new post">
      <PostForm />
    </SimpleLayout>
  );
}
