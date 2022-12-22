/// <reference types="@remix-run/dev" />
/// <reference types="@remix-run/cloudflare" />
/// <reference types="@cloudflare/workers-types" />

import type { AuthService } from "~/services/auth.server";

declare module "@remix-run/server-runtime" {
  export interface AppLoadContext {
    DB: D1Database;
    auth: AuthService;
  }
}

export {};
