import { createPagesFunctionHandler } from "@remix-run/cloudflare-pages";
import * as build from "@remix-run/dev/server-build";
import { AuthService } from "~/services/auth.server";

const createRequestHandler = createPagesFunctionHandler({
  build,
  mode: process.env.NODE_ENV,
  getLoadContext: (context) => {
    const auth = new AuthService(context.request, context.env.DB, [
      "foo",
      "bar",
    ]);

    return {
      ...context.env,
      auth,
    };
  },
});

export const onRequest: PagesFunction = async (context) => {
  return createRequestHandler(context);
};
