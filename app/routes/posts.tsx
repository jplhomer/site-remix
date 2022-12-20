import { json, type LoaderArgs } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import { Card } from "~/components/Card";
import { SimpleLayout } from "~/components/SimpleLayout";
import { formatDate } from "~/utils/date";
import { type Post } from "./posts.$slug";

export async function loader({ context: { DB } }: LoaderArgs) {
  const posts = await DB.prepare(
    "SELECT * FROM posts WHERE status = 'published' ORDER BY created_at DESC"
  ).all<Post>();

  invariant(posts.results, "Something went wrong when querying posts.");

  return json({ posts: posts.results });
}

export function meta() {
  return {
    title: "Posts written by Josh Larson",
    description:
      "In which I write about a wide gamut of topics. Strap in — this is going to be fun.",
  };
}

export default function PostsIndex() {
  const { posts } = useLoaderData<typeof loader>();

  return (
    <SimpleLayout
      title="Musings about life, software, music, parenting and more."
      intro="In which I write about a wide gamut of topics. Strap in — this is going to be fun."
    >
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
          {posts.map((post) => (
            <Article key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </SimpleLayout>
  );
}

function Article({ post }: { post: Post }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title to={`/posts/${post.slug}`}>{post.title}</Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={post.created_at}
          className="md:hidden"
          decorate
        >
          {formatDate(post.created_at)}
        </Card.Eyebrow>
        <Card.Description>{post.description}</Card.Description>
        <Card.Cta>Read post</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={post.created_at}
        className="mt-1 hidden md:block"
      >
        {formatDate(post.created_at)}
      </Card.Eyebrow>
    </article>
  );
}
