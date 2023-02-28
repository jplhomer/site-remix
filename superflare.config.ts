import { defineConfig } from "superflare";

export default defineConfig<Env>((ctx) => {
  return {
    database: {
      default: ctx.env.DB,
    },
  };
});
