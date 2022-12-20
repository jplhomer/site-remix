/// <reference types="@remix-run/dev" />
/// <reference types="@remix-run/cloudflare" />
/// <reference types="@cloudflare/workers-types" />

declare module "@remix-run/server-runtime" {
  export interface AppLoadContext {
    DB: D1Database;
  }
}

export {};
