import type { ActionArgs, LoaderArgs } from "@remix-run/cloudflare";
import { json, redirect } from "@remix-run/cloudflare";
import { Form, useActionData } from "@remix-run/react";
import { TextareaMarkdown } from "textarea-markdown-editor/dist/TextareaMarkdown";
import { Button, Input, Label, ValidationError } from "~/components/Form";
import { SimpleLayout } from "~/components/SimpleLayout";

export async function loader({ request, context: { auth } }: LoaderArgs) {
  if (!(await auth.check())) {
    return redirect("/login");
  }

  return {};
}

export async function action({ request, context: { DB, auth } }: ActionArgs) {
  const form = new URLSearchParams(await request.text());
  const title = form.get("title");
  const content = form.get("content");
  const description = form.get("description");
  const createdAt = form.get("created_at");
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

  const fields = [
    "title",
    "content",
    "slug",
    "status",
    "description",
    "user_id",
  ];
  const bindings = [title, content, slug, "draft", description, userId];
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
        <Input
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
          className="font-mono w-full dark:bg-zinc-800"
          cols={80}
          rows={20}
        />

        <Label htmlFor="description">Meta Description (optional)</Label>
        <Input
          as="textarea"
          name="description"
          id="description"
          className="font-mono w-full"
          cols={80}
        />

        <Label htmlFor="created_at">Date (optional)</Label>
        <Input
          type="date"
          name="created_at"
          id="created_at"
          className="w-full"
        />

        {actionData?.error && (
          <ValidationError>{actionData.error}</ValidationError>
        )}

        <div className="text-right">
          <Button type="submit">Create Post</Button>
        </div>
      </Form>
    </SimpleLayout>
  );
}
