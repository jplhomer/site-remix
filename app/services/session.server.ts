import {
  createCookieSessionStorage,
  type Session,
  type SessionStorage,
} from "@remix-run/cloudflare";

export class SessionService {
  constructor(
    public sessionStorage: SessionStorage,
    private session: Session
  ) {}

  static async init(request: Request, secrets: string[]) {
    const storage = createCookieSessionStorage({
      cookie: {
        name: "session",
        path: "/",
        httpOnly: true,
        secrets,
        secure: process.env.NODE_ENV === "production", // enable this in prod only
      },
    });

    const session = await storage.getSession(request.headers.get("Cookie"));

    return new SessionService(storage, session);
  }

  get(key: string) {
    return this.session.get(key);
  }

  flash(key: string, value: any) {
    this.session.flash(key, value);
  }

  set(key: string, value: any) {
    this.session.set(key, value);
  }

  unset(key: string) {
    this.session.unset(key);
  }

  commit() {
    return this.sessionStorage.commitSession(this.session);
  }
}
