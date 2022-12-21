import { redirect, type SessionStorage } from "@remix-run/cloudflare";
import bcrypt from "bcryptjs";

interface UserRow {
  id: number;
  email: string;
  password: string;
}

export type User = Pick<UserRow, "id" | "email">;

const SESSION_KEY = "auth.user_id";

export class AuthService {
  constructor(
    private request: Request,
    private db: D1Database,
    private sessionStorage: SessionStorage
  ) {}

  private async getSession() {
    return await this.sessionStorage.getSession(
      this.request.headers.get("cookie")
    );
  }

  async attempt(email: string, password: string, redirectTo?: string) {
    const row = await this.db
      .prepare("SELECT * FROM users WHERE email = ?")
      .bind(email)
      .first<UserRow>();

    if (!row || !(await bcrypt.compare(password, row.password))) {
      return false;
    }

    return await this.login({ id: row.id, email: row.email }, redirectTo);
  }

  async login(user: User, redirectTo = "/") {
    const session = await this.getSession();
    session.set(SESSION_KEY, user.id);

    throw redirect(redirectTo, {
      headers: {
        "set-cookie": await this.sessionStorage.commitSession(session),
      },
    });
  }

  async check() {
    return !!(await this.id());
  }

  async logout(redirectTo = "/") {
    throw redirect(redirectTo, {
      headers: {
        "set-cookie": await this.sessionStorage.destroySession(
          await this.getSession()
        ),
      },
    });
  }

  async id() {
    const session = await this.getSession();
    return session.get(SESSION_KEY);
  }

  async user(): Promise<User | null> {
    const id = await this.id();
    if (!id) return null;
    const row = await this.db
      .prepare("SELECT * FROM users WHERE id = ?")
      .bind(id)
      .first<UserRow>();

    return row ? { id: row.id, email: row.email } : null;
  }
}
