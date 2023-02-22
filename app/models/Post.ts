import { Model } from "superflare";

export class Post extends Model {
  /* superflare-types-start */
  id!: number;
  title!: string;
  slug!: string;
  content?: string;
  description?: string;
  status!: string;
  user_id!: number;
  created_at!: string;
  updated_at!: string;
  /* superflare-types-end */
}
