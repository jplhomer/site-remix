import type { LoaderArgs } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import { json } from "react-router";
import { SimpleLayout } from "~/components/SimpleLayout";
import { convertToHtml } from "~/utils/markdown";

export interface Post {
  id: number;
  title: string;
  content: string;
  description: string;
  slug: string;
  status: string;
}

export async function loader({ params, context: { DB } }: LoaderArgs) {
  const { slug } = params;
  const post = await DB.prepare("SELECT * FROM posts WHERE slug = ?1 LIMIT 1")
    .bind(slug)
    .first<Post>();

  if (!post) {
    throw new Response("Not found", { status: 404 });
  }

  return json({
    post: {
      ...post,
      content: await convertToHtml(post.content),
    },
  });
}

export function meta({ data }: { data: { post: Post } }) {
  const { post } = data;

  return {
    title: post.title,
    description: post.description,
  };
}

export default function PostView() {
  const {
    post: { title, content, description },
  } = useLoaderData<typeof loader>();
  return (
    <SimpleLayout title={title} intro={description}>
      <div
        className="prose dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </SimpleLayout>
  );
}
