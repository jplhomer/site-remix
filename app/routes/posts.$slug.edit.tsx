import type { ActionArgs, LoaderArgs } from "@remix-run/cloudflare";
import { json, redirect } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import { PostForm } from "~/components/PostForm";
import { SimpleLayout } from "~/components/SimpleLayout";
import { Post } from "~/models/Post";

export async function loader({ params, context: { auth } }: LoaderArgs) {
  if (!(await auth.check())) {
    return redirect("/auth/login");
  }

  invariant(params.slug, "Missing slug param");

  const post = await Post.where("slug", params.slug).first();

  return json({
    post,
  });
}

const badRequest = (error: string) => json({ error }, { status: 400 });

export async function action({ request, params, context: { DB } }: ActionArgs) {
  invariant(params.slug, "Missing slug param");
  const post = await Post.where("slug", params.slug).first();

  if (!post) {
    return badRequest("Post not found");
  }

  const form = new URLSearchParams(await request.text());
  const title = form.get("title");
  const content = form.get("content");
  const description = form.get("description");
  const createdAt = form.get("createdAt");
  const slug = form.get("slug");
  const status = form.get("status");

  const requiredFields = ["title", "slug", "status"];

  for (const field of requiredFields) {
    if (!form.get(field)) {
      return badRequest(`Missing ${field}`);
    }
  }

  await post.update({
    title,
    content,
    description,
    slug,
    status,
  });

  if (createdAt) {
    post.createdAt = createdAt;
    await post.save();
  }

  return redirect(`/posts/${slug}`);
}

export function meta({ data }: { data: { post: Post } }) {
  const { post } = data;

  return {
    title: `Editing ${post.title}`,
    description: "Edit this post",
  };
}

export default function EditPost() {
  const { post } = useLoaderData<typeof loader>();

  return (
    <SimpleLayout title="Edit Post" intro="Edit this post">
      <PostForm post={post} />
    </SimpleLayout>
  );
}
