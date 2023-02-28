import { Form, useActionData } from "@remix-run/react";
import TextareaMarkdown from "textarea-markdown-editor";
import type { Post } from "~/models/Post";
import { Label, Input, ValidationError, Button } from "./Form";

export function PostForm({ post }: { post?: Post }) {
  const actionData = useActionData();
  const isEdit = !!post;

  return (
    <Form method="post">
      <Label htmlFor="title">Title</Label>
      <Input
        type="text"
        name="title"
        id="title"
        className="w-full font-mono"
        defaultValue={post?.title}
        required
      />

      {isEdit && (
        <>
          <Label htmlFor="slug">Slug</Label>
          <Input
            type="text"
            name="slug"
            id="slug"
            className="w-full font-mono"
            defaultValue={post?.slug}
            required
          />
        </>
      )}

      <Label htmlFor="content">Content (optional)</Label>
      <TextareaMarkdown
        name="content"
        id="content"
        className="font-mono w-full dark:bg-zinc-800"
        cols={80}
        rows={20}
        defaultValue={post?.content}
      />

      <Label htmlFor="description">Meta Description (optional)</Label>
      <Input
        as="textarea"
        name="description"
        id="description"
        className="font-mono w-full"
        cols={80}
        defaultValue={post?.description}
      />

      <Label htmlFor="createdAt">Date (optional)</Label>
      <Input
        type="date"
        name="createdAt"
        id="createdAt"
        className="w-full"
        defaultValue={post?.createdAt}
      />

      {isEdit && (
        <>
          <Label htmlFor="status">Status</Label>
          <Input
            as="select"
            name="status"
            id="status"
            className="w-full font-mono"
            defaultValue={post?.status}
          >
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </Input>
        </>
      )}

      {actionData?.error && (
        <ValidationError>{actionData.error}</ValidationError>
      )}

      <div className="text-right">
        <Button type="submit">{post ? "Update" : "Create"} Post</Button>
      </div>
    </Form>
  );
}
