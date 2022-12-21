/// <reference types="@remix-run/dev" />
/// <reference types="@remix-run/cloudflare" />
/// <reference types="@cloudflare/workers-types" />

import type { AuthService } from "~/services/auth.server";
import type { SessionService } from "~/services/session.server";

declare module "@remix-run/server-runtime" {
  export interface AppLoadContext {
    DB: D1Database;
    session: SessionService;
    auth: AuthService;
  }
}

export {};
