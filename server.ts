import { createPagesFunctionHandler } from "@remix-run/cloudflare-pages";
import * as build from "@remix-run/dev/server-build";
import { AuthService } from "~/services/auth.server";

const createRequestHandler = createPagesFunctionHandler({
  build,
  mode: process.env.NODE_ENV,
  getLoadContext: (context) => {
    const auth = new AuthService(context.request, context.env.DB, [
      context.env.SESSION_SECRET,
    ]);

    return {
      ...context.env,
      auth,
    };
  },
});

export const onRequest: PagesFunction = async (context) => {
  // @ts-ignore I don't know how to fix this.
  if (!context.env.SESSION_SECRET) {
    throw new Error("SESSION_SECRET is not set");
  }

  return createRequestHandler(context);
};
