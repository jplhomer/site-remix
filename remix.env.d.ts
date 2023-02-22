/// <reference types="@remix-run/dev" />
/// <reference types="@remix-run/cloudflare" />
/// <reference types="@cloudflare/workers-types" />

import type { AuthService } from "~/services/auth.server";

export interface Env {
  CF_PAGES?: 1;
  DB: D1Database;
  SESSION_SECRET: string;
}

declare module "@remix-run/server-runtime" {
  export interface AppLoadContext {
    DB: D1Database;
    auth: AuthService;
  }
}

export {};
