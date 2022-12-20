import { ActionArgs } from "@remix-run/cloudflare";
import { Form } from "@remix-run/react";
import { SimpleLayout } from "~/components/SimpleLayout";

export async function action({ request, context: { DB } }: ActionArgs) {
  const form = new URLSearchParams(await request.text());
  const title = form.get("title");
  const content = form.get("content");

  if (title && content) {
    const result = await DB.prepare(
      "INSERT INTO articles (title, content) VALUES (?, ?)"
    )
      .bind(title, content)
      .run();

    console.log({ result });

    return {
      status: "ok",
    };
  }
  return {
    status: "not-ok",
  };
}

export default function NewPost() {
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
