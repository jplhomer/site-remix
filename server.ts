import { createPagesFunctionHandler } from "@remix-run/cloudflare-pages";
import * as build from "@remix-run/dev/server-build";
import { SessionService } from "~/services/session.server";
import { AuthService } from "~/services/auth.server";

const createRequestHandler = (session: SessionService) =>
  createPagesFunctionHandler({
    build,
    mode: process.env.NODE_ENV,
    getLoadContext: (context) => {
      const auth = new AuthService(
        context.request,
        context.env.DB,
        session.sessionStorage
      );

      return {
        ...context.env,
        session,
        auth,
      };
    },
  });

export async function onRequest(context) {
  const session = await SessionService.init(context.request, ["foo"]);
  return createRequestHandler(session)(context);
}
