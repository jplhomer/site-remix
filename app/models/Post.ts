import { Model } from "superflare";

export class Post extends Model {
  toJSON(): PostRow {
    return super.toJSON();
  }
}

/* superflare-types-start */
interface PostRow {
  id: number;
  title: string;
  slug: string;
  content?: string;
  description?: string;
  status: string;
  userId: number;
  createdAt: string;
  updatedAt: string;
}

export interface Post extends PostRow {}
/* superflare-types-end */
