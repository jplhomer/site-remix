import type { ReactNode } from "react";
import { Header } from "~/components/Header";
import { Footer } from "~/components/Footer";
import { WebShell } from "./WebShell";

export function Layout({
  children,
  isLoggedIn,
}: {
  children: ReactNode;
  isLoggedIn: boolean;
}) {
  return (
    <>
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
        </div>
      </div>
      <div className="relative h-full">
        <WebShell>
          <Header />
          <main>{children}</main>
          <Footer isLoggedIn={isLoggedIn} />
        </WebShell>
      </div>
    </>
  );
}
