import { Model } from "superflare";

export class User extends Model {
  /* superflare-types-start */
  id!: number;
  email!: string;
  password!: string;
  email_verified_at?: string;
  created_at!: string;
  updated_at!: string;
  /* superflare-types-end */
}
