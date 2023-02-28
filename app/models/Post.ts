import { Model } from "superflare";

export class Post extends Model {
  /* superflare-types-start */
  id!: number;
  title!: string;
  slug!: string;
  content?: string;
  description?: string;
  status!: string;
  userId!: number;
  createdAt!: string;
  updatedAt!: string;
  /* superflare-types-end */
}
