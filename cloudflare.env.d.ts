/// <reference types="@cloudflare/workers-types" />

interface Env {
  ENVIRONMENT: "development";
  DB: D1Database;
  SESSION_SECRET: string;
}
