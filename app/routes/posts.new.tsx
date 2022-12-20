import type { ActionArgs } from "@remix-run/cloudflare";
import { json, redirect } from "@remix-run/cloudflare";
import { Form, useActionData } from "@remix-run/react";
import { SimpleLayout } from "~/components/SimpleLayout";

export async function action({ request, context: { DB } }: ActionArgs) {
  const form = new URLSearchParams(await request.text());
  const title = form.get("title");
  const content = form.get("content");
  const description = form.get("description");

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

  await DB.prepare(
    "INSERT INTO posts (title, content, slug, status, description) VALUES (?1, ?2, ?3, ?4, ?5)"
  )
    .bind(title, content, slug, "draft", description)
    .run();

  return redirect(`/posts/${slug}`);
}

export default function NewPost() {
  const actionData = useActionData();

  return (
    <SimpleLayout title="New Post" intro="Create a new post">
      <Form method="post">
        <label htmlFor="title" className="block font-bold mb-2">
          Title
        </label>
        <input
          type="text"
          name="title"
          id="title"
          className="w-full font-mono"
          required
        />

        <label htmlFor="content" className="block font-bold mb-2 mt-4">
          Content
        </label>
        <textarea
          name="content"
          id="content"
          className="font-mono w-full"
          cols={80}
          rows={20}
        ></textarea>

        <label htmlFor="description" className="block font-bold mb-2 mt-4">
          Meta Description
        </label>
        <textarea
          name="description"
          id="description"
          className="font-mono w-full"
          cols={80}
        ></textarea>
        {actionData?.error && (
          <div className="text-red-500 font-bold mt-4">{actionData.error}</div>
        )}
        <div className="text-right">
          <button
            type="submit"
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Create Post
          </button>
        </div>
      </Form>
    </SimpleLayout>
  );
}
