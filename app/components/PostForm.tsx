import { Form, useActionData } from "@remix-run/react";
import TextareaMarkdown from "textarea-markdown-editor";
import { Label, Input, ValidationError, Button } from "./Form";

export interface Post {
  id: number;
  title: string;
  content: string;
  description: string;
  slug: string;
  status: string;
  created_at: string;
}

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

      <Label htmlFor="created_at">Date (optional)</Label>
      <Input
        type="date"
        name="created_at"
        id="created_at"
        className="w-full"
        defaultValue={post?.created_at}
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
