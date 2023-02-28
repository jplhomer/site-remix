import { Model } from "superflare";

export class User extends Model {
  /* superflare-types-start */
  id!: number;
  email!: string;
  password!: string;
  emailVerifiedAt?: string;
  createdAt!: string;
  updatedAt!: string;
  /* superflare-types-end */
}
