import type { ActionArgs, LoaderArgs } from "@remix-run/cloudflare";
import { json, redirect } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import { type Post, PostForm } from "~/components/PostForm";
import { SimpleLayout } from "~/components/SimpleLayout";

export async function loader({ params, context: { auth, DB } }: LoaderArgs) {
  if (!(await auth.check())) {
    return redirect("/auth/login");
  }

  const post = await DB.prepare("SELECT * FROM posts WHERE slug = ?")
    .bind(params.slug)
    .first<Post>();

  return json({
    post,
  });
}

const badRequest = (error: string) => json({ error }, { status: 400 });

export async function action({ request, params, context: { DB } }: ActionArgs) {
  const post = await DB.prepare("SELECT id FROM posts WHERE slug = ?")
    .bind(params.slug)
    .first<{ id: number }>();

  const postId = post?.id;
  const form = new URLSearchParams(await request.text());
  const title = form.get("title");
  const content = form.get("content");
  const description = form.get("description");
  const createdAt = form.get("created_at");
  const slug = form.get("slug");
  const status = form.get("status");

  const requiredFields = ["title", "slug", "status"];

  for (const field of requiredFields) {
    if (!form.get(field)) {
      return badRequest(`Missing ${field}`);
    }
  }

  const fields = ["title", "content", "slug", "status", "description"];
  const bindings: Array<string | number | null> = [
    title,
    content,
    slug,
    status,
    description,
  ];
  if (createdAt) {
    fields.push("created_at");
    bindings.push(createdAt);
  }

  bindings.push(postId);

  await DB.prepare(
    `UPDATE posts SET ${fields
      .map((field) => field + " = ?")
      .join(", ")} where id = ?`
  )
    .bind(...bindings)
    .run();

  return redirect(`/posts/${slug}`);
}

export default function EditPost() {
  const { post } = useLoaderData<typeof loader>();

  return (
    <SimpleLayout title="Edit Post" intro="Edit this post">
      <PostForm post={post} />
    </SimpleLayout>
  );
}
