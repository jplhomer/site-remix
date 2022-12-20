import type { ActionArgs } from "@remix-run/cloudflare";
import { json, redirect } from "@remix-run/cloudflare";
import { Form, useActionData } from "@remix-run/react";
import { TextareaMarkdown } from "textarea-markdown-editor/dist/TextareaMarkdown";
import { Label } from "~/components/Form";
import { SimpleLayout } from "~/components/SimpleLayout";

export async function action({ request, context: { DB } }: ActionArgs) {
  const form = new URLSearchParams(await request.text());
  const title = form.get("title");
  const content = form.get("content");
  const description = form.get("description");
  const createdAt = form.get("created_at");

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

  const fields = ["title", "content", "slug", "status", "description"];
  const bindings = [title, content, slug, "draft", description];
  if (createdAt) {
    fields.push("created_at");
    bindings.push(createdAt);
  }

  await DB.prepare(
    `INSERT INTO posts (${fields.join(", ")}) VALUES (${fields
      .map(() => "?")
      .join(", ")})`
  )
    .bind(...bindings)
    .run();

  return redirect(`/posts/${slug}`);
}

export default function NewPost() {
  const actionData = useActionData();

  return (
    <SimpleLayout title="New Post" intro="Create a new post">
      <Form method="post">
        <Label htmlFor="title">Title</Label>
        <input
          type="text"
          name="title"
          id="title"
          className="w-full font-mono"
          required
        />

        <Label htmlFor="content">Content (optional)</Label>
        <TextareaMarkdown
          name="content"
          id="content"
          className="font-mono w-full"
          cols={80}
          rows={20}
        />

        <Label htmlFor="description">Meta Description (optional)</Label>
        <textarea
          name="description"
          id="description"
          className="font-mono w-full"
          cols={80}
        ></textarea>

        <Label htmlFor="created_at">Date (optional)</Label>
        <input
          type="date"
          name="created_at"
          id="created_at"
          className="w-full"
        />

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
