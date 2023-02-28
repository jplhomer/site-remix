import {
  createRequestHandler,
  createCookieSessionStorage,
} from "@remix-run/cloudflare";
import { type AppLoadContext } from "@remix-run/server-runtime";
import config from "../superflare.config";
import { AuthService } from "~/services/auth.server";

import * as build from "../build";

let remixHandler: ReturnType<typeof createRequestHandler>;

export const onRequest: PagesFunction<Env> = async (ctx) => {
  if (!remixHandler) {
    remixHandler = createRequestHandler(build, ctx.env.ENVIRONMENT);
  }

  config(ctx);

  const sessionStorage = createCookieSessionStorage({
    cookie: {
      httpOnly: true,
      path: "/",
      secure: Boolean(ctx.request.url.match(/^(http|ws)s:\/\//)),
      secrets: [ctx.env.SESSION_SECRET],
    },
  });

  const session = await sessionStorage.getSession(
    ctx.request.headers.get("Cookie")
  );

  const auth = new AuthService(ctx.request, ctx.env.DB, [
    ctx.env.SESSION_SECRET,
  ]);

  const loadContext: AppLoadContext = {
    DB: ctx.env.DB,
    session,
    auth,
  };

  const response = await remixHandler(ctx.request, loadContext);
  // response.headers.set(
  //   "Set-Cookie",
  //   await sessionStorage.commitSession(session)
  // );

  return response;
};
