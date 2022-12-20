import { marked } from "marked";

export async function convertToHtml(input: string) {
  return marked(input, {
    breaks: true,
    gfm: true,
    headerIds: false,
    smartLists: true,
    smartypants: true,
  });
}
