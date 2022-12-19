import { Popover, Transition } from "@headlessui/react";
import clsx from "clsx";

import { Fragment, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "@remix-run/react";
import { Container } from "~/components/Container";

function CloseIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronDownIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 8 6" aria-hidden="true" {...props}>
      <path
        d="M1.75 1.75 4 4.25l2.25-2.5"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SunIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z" />
      <path
        d="M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061"
        fill="none"
      />
    </svg>
  );
}

function MoonIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MobileNavItem({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Popover.Button as={Link} to={href} className="block py-2">
        {children}
      </Popover.Button>
    </li>
  );
}

function MobileNavigation(props: any) {
  return (
    <Popover {...props}>
      <Popover.Button className="group flex items-center bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20 relative text-zinc-900/10 dark:text-white/10">
        <span className="text-zinc-500 group-hover:text-zinc-700 dark:group-hover:text-zinc-400">
          Menu
        </span>
        <ChevronDownIcon className="ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400" />
        <IowaLeft
          className="h-[42px] absolute -top-[1px] -left-[10px] fill-white/90 dark:fill-zinc-800/90"
          aria-hidden="true"
        />
        <IowaRight
          className="h-[45px] absolute -right-[20px] -top-[1px] fill-white/90 dark:fill-zinc-800/90"
          aria-hidden="true"
        />
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm dark:bg-black/80" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800"
          >
            <div className="flex flex-row-reverse items-center justify-between">
              <Popover.Button aria-label="Close menu" className="-m-1 p-1">
                <CloseIcon className="h-6 w-6 text-zinc-500 dark:text-zinc-400" />
              </Popover.Button>
              <h2 className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                Navigation
              </h2>
            </div>
            <nav className="mt-6">
              <ul className="-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
                <MobileNavItem href="/about">About</MobileNavItem>
                <MobileNavItem href="/articles">Articles</MobileNavItem>
                <MobileNavItem href="/projects">Projects</MobileNavItem>
                <MobileNavItem href="/speaking">Speaking</MobileNavItem>
                <MobileNavItem href="/uses">Uses</MobileNavItem>
              </ul>
            </nav>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  );
}

function NavItem({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <NavLink
        to={href}
        prefetch="intent"
        className={({ isActive }) =>
          clsx(
            "relative block px-3 py-2 transition",
            isActive
              ? "text-teal-500 dark:text-teal-400"
              : "hover:text-teal-500 dark:hover:text-teal-400"
          )
        }
      >
        {({ isActive }) => (
          <>
            {children}
            {isActive && (
              <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0" />
            )}
          </>
        )}
      </NavLink>
    </li>
  );
}

function DesktopNavigation({
  className,
  ...props
}: { className?: string } & React.ComponentProps<"nav">) {
  return (
    <nav
      className={clsx(
        className,
        "text-zinc-900/10 border-y border-zinc-900/10 dark:border-white/10 dark:text-white/10 relative backdrop-blur"
      )}
      {...props}
    >
      <ul className="flex bg-white/90 px-3 text-sm font-medium shadow-zinc-800/5 dark:bg-zinc-800/90 text-zinc-800 dark:text-zinc-200">
        <NavItem href="/about">About</NavItem>
        <NavItem href="/articles">Articles</NavItem>
        <NavItem href="/projects">Projects</NavItem>
        <NavItem href="/speaking">Speaking</NavItem>
        <NavItem href="/uses">Uses</NavItem>
      </ul>
      <IowaLeft
        className="h-[42px] absolute -top-[1px] -left-[10px] fill-white/90 dark:fill-zinc-800/90"
        aria-hidden="true"
      />
      <IowaRight
        className="h-[45px] absolute -right-[20px] -top-[1px] fill-white/90 dark:fill-zinc-800/90"
        aria-hidden="true"
      />
    </nav>
  );
}

function ModeToggle() {
  function disableTransitionsTemporarily() {
    document.documentElement.classList.add("[&_*]:!transition-none");
    window.setTimeout(() => {
      document.documentElement.classList.remove("[&_*]:!transition-none");
    }, 0);
  }

  function toggleMode() {
    disableTransitionsTemporarily();

    let darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    let isSystemDarkMode = darkModeMediaQuery.matches;
    let isDarkMode = document.documentElement.classList.toggle("dark");

    if (isDarkMode === isSystemDarkMode) {
      delete window.localStorage.isDarkMode;
    } else {
      window.localStorage.isDarkMode = isDarkMode;
    }
  }

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      className="group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
      onClick={toggleMode}
    >
      <SunIcon className="h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-teal-50 [@media(prefers-color-scheme:dark)]:stroke-teal-500 [@media(prefers-color-scheme:dark)]:group-hover:fill-teal-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-teal-600" />
      <MoonIcon className="hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400 [@media_not_(prefers-color-scheme:dark)]:fill-teal-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-teal-500" />
    </button>
  );
}

function clamp(number: number, a: number, b: number) {
  let min = Math.min(a, b);
  let max = Math.max(a, b);
  return Math.min(Math.max(number, min), max);
}

function AvatarContainer({ className, ...props }: { className?: string }) {
  return (
    <div
      className={clsx(
        className,
        "h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10"
      )}
      {...props}
    />
  );
}

function Avatar({
  large = false,
  className,
  ...props
}: {
  large?: boolean;
  className?: string;
}) {
  return (
    <Link
      to="/"
      prefetch="intent"
      aria-label="Home"
      className={clsx(className, "pointer-events-auto")}
      {...props}
    >
      <img
        src="https://2.gravatar.com/avatar/91e322e8b9cee3b329a2bf5ad7169164"
        alt=""
        sizes={large ? "4rem" : "2.25rem"}
        className={clsx(
          "rounded-full bg-zinc-100 object-cover dark:bg-zinc-800",
          large ? "h-16 w-16" : "h-9 w-9"
        )}
      />
    </Link>
  );
}

export function Header() {
  let isHomePage = useLocation().pathname === "/";

  let headerRef = useRef<HTMLElement>();
  let avatarRef = useRef<HTMLImageElement>();
  let isInitial = useRef(true);

  useEffect(() => {
    let downDelay = avatarRef.current?.offsetTop ?? 0;
    let upDelay = 64;

    function setProperty(property: string, value: string | number) {
      document.documentElement.style.setProperty(property, value + "");
    }

    function removeProperty(property: string) {
      document.documentElement.style.removeProperty(property);
    }

    function updateHeaderStyles() {
      let { top, height } = headerRef.current?.getBoundingClientRect() ?? {
        top: 0,
        height: 0,
      };
      let scrollY = clamp(
        window.scrollY,
        0,
        document.body.scrollHeight - window.innerHeight
      );

      if (isInitial.current) {
        setProperty("--header-position", "sticky");
      }

      setProperty("--content-offset", `${downDelay}px`);

      if (isInitial.current || scrollY < downDelay) {
        setProperty("--header-height", `${downDelay + height}px`);
        setProperty("--header-mb", `${-downDelay}px`);
      } else if (top + height < -upDelay) {
        let offset = Math.max(height, scrollY - upDelay);
        setProperty("--header-height", `${offset}px`);
        setProperty("--header-mb", `${height - offset}px`);
      } else if (top === 0) {
        setProperty("--header-height", `${scrollY + height}px`);
        setProperty("--header-mb", `${-scrollY}px`);
      }

      if (top === 0 && scrollY > 0 && scrollY >= downDelay) {
        setProperty("--header-inner-position", "fixed");
        removeProperty("--header-top");
        removeProperty("--avatar-top");
      } else {
        removeProperty("--header-inner-position");
        setProperty("--header-top", "0px");
        setProperty("--avatar-top", "0px");
      }
    }

    function updateAvatarStyles() {
      if (!isHomePage) {
        return;
      }

      let fromScale = 1;
      let toScale = 36 / 64;
      let fromX = 0;
      let toX = 2 / 16;

      let scrollY = downDelay - window.scrollY;

      let scale = (scrollY * (fromScale - toScale)) / downDelay + toScale;
      scale = clamp(scale, fromScale, toScale);

      let x = (scrollY * (fromX - toX)) / downDelay + toX;
      x = clamp(x, fromX, toX);

      setProperty(
        "--avatar-image-transform",
        `translate3d(${x}rem, 0, 0) scale(${scale})`
      );

      let borderScale = 1 / (toScale / scale);
      let borderX = (-toX + x) * borderScale;
      let borderTransform = `translate3d(${borderX}rem, 0, 0) scale(${borderScale})`;

      setProperty("--avatar-border-transform", borderTransform);
      setProperty("--avatar-border-opacity", scale === toScale ? 1 : 0);
    }

    function updateStyles() {
      updateHeaderStyles();
      updateAvatarStyles();
      isInitial.current = false;
    }

    updateStyles();
    window.addEventListener("scroll", updateStyles, { passive: true });
    window.addEventListener("resize", updateStyles);

    return () => {
      window.removeEventListener("scroll", updateStyles, { passive: true });
      window.removeEventListener("resize", updateStyles);
    };
  }, [isHomePage]);

  return (
    <>
      <header
        className="pointer-events-none relative z-50 flex flex-col"
        style={{
          height: "var(--header-height)",
          marginBottom: "var(--header-mb)",
        }}
      >
        {isHomePage && (
          <>
            <div
              ref={avatarRef}
              className="order-last mt-[calc(theme(spacing.16)-theme(spacing.3))]"
            />
            <Container
              className="top-0 order-last -mb-3 pt-3"
              style={{ position: "var(--header-position)" }}
            >
              <div
                className="top-[var(--avatar-top,theme(spacing.3))] w-full"
                style={{ position: "var(--header-inner-position)" }}
              >
                <div className="relative">
                  <AvatarContainer
                    className="absolute left-0 top-3 origin-left transition-opacity"
                    style={{
                      opacity: "var(--avatar-border-opacity, 0)",
                      transform: "var(--avatar-border-transform)",
                    }}
                  />
                  <Avatar
                    large
                    className="block h-16 w-16 origin-left"
                    style={{ transform: "var(--avatar-image-transform)" }}
                  />
                </div>
              </div>
            </Container>
          </>
        )}
        <div
          ref={headerRef}
          className="top-0 z-10 h-16 pt-6"
          style={{ position: "var(--header-position)" }}
        >
          <Container
            className="top-[var(--header-top,theme(spacing.6))] w-full"
            style={{ position: "var(--header-inner-position)" }}
          >
            <div className="relative flex gap-4">
              <div className="flex flex-1">
                {!isHomePage && (
                  <AvatarContainer>
                    <Avatar />
                  </AvatarContainer>
                )}
              </div>
              <div className="flex flex-1 justify-end md:justify-center">
                <MobileNavigation className="pointer-events-auto md:hidden mr-4" />
                <DesktopNavigation className="pointer-events-auto hidden md:block" />
              </div>
              <div className="flex justify-end md:flex-1">
                <div className="pointer-events-auto">
                  <ModeToggle />
                </div>
              </div>
            </div>
          </Container>
        </div>
      </header>
      {isHomePage && <div style={{ height: "var(--content-offset)" }} />}
    </>
  );
}

function IowaLeft(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 76 307"
      {...props}
    >
      <path d="M67.312 300.632c1.998 2.157 5.497 4.552 7.586 5.192V.846H.714l.03 1.33c.017.733.136 2.264.264 3.403.213 1.884.348 2.193 1.499 3.437.951 1.028 1.429 1.908 1.926 3.55.773 2.554.811 4.161.157 6.662-.975 3.734-.462 5.44 3.313 11.002 3.382 4.982 3.528 5.273 4.024 8.019.581 3.217.42 3.946-2.09 9.434-2 4.377-2.122 4.854-2.76 10.842-.215 2.001-.658 3.912-1.373 5.916a642.2 642.2 0 0 0-2.992 8.727C.829 78.777.775 79.022.759 82.042c-.025 4.432.37 5.285 6.014 13.014 2.551 3.495 6.472 11.338 8.026 16.056 1.029 3.123 1.149 3.799 1.152 6.508.007 4.28.537 6.172 3.252 11.601 2.25 4.502 2.388 4.892 2.815 7.987.959 6.954 1.561 8.298 6.266 13.985 1.918 2.319 4.353 5.265 5.41 6.547 3.692 4.475 4.886 7.114 5.887 13.008.34 2.006 1.038 5.396 1.55 7.534.954 3.985 1.054 5.337.854 11.578-.092 2.865-.043 3.13 1.569 8.495 2.5 8.321 3.236 9.74 7.56 14.548 2.759 3.068 4.297 5.943 4.98 9.308.253 1.241.912 3.29 1.466 4.552 2.086 4.754 2.393 6.859 2.129 14.565-.095 2.754-.016 3.254 1.141 7.247 1.076 3.713 1.3 5.003 1.675 9.613.362 4.454.598 5.86 1.448 8.6 1.477 4.767 1.528 5.674.654 11.662-2.035 13.933-2.036 14.157-.16 17.943.718 1.45 1.895 3.191 2.865 4.239Z" />
      <path
        d="M74.898 305.824c-2.089-.64-5.588-3.035-7.586-5.192-.97-1.048-2.147-2.789-2.865-4.239-1.877-3.787-1.875-4.01.16-17.943.874-5.988.823-6.895-.654-11.662-.85-2.74-1.086-4.146-1.448-8.6-.374-4.61-.599-5.9-1.675-9.613-1.157-3.993-1.236-4.493-1.141-7.247.264-7.706-.043-9.811-2.129-14.565-.554-1.262-1.213-3.311-1.465-4.552-.684-3.365-2.222-6.24-4.981-9.308-4.324-4.808-5.06-6.227-7.56-14.548-1.612-5.365-1.66-5.63-1.569-8.495.2-6.241.1-7.593-.854-11.578a139.967 139.967 0 0 1-1.55-7.534c-1-5.894-2.195-8.533-5.887-13.008a7921.793 7921.793 0 0 0-5.41-6.547c-4.705-5.687-5.307-7.031-6.266-13.985-.427-3.095-.565-3.485-2.816-7.987-2.714-5.429-3.244-7.321-3.25-11.601-.004-2.709-.124-3.385-1.153-6.508-1.554-4.718-5.475-12.561-8.026-16.055C1.128 87.326.734 86.474.759 82.041c.016-3.02.07-3.265 1.953-8.874a642.2 642.2 0 0 1 2.992-8.727c.715-2.004 1.158-3.915 1.372-5.916.64-5.988.76-6.465 2.762-10.842 2.509-5.488 2.67-6.217 2.09-9.434-.497-2.746-.643-3.037-4.025-8.02-3.775-5.562-4.288-7.267-3.313-11.001.654-2.501.616-4.108-.157-6.663-.497-1.641-.975-2.521-1.926-3.55C1.356 7.773 1.22 7.464 1.008 5.58.88 4.439.761 2.909.744 2.177L.714.846h74.184"
        strokeWidth="10"
        className="stroke-current"
        fill="none"
      />
    </svg>
  );
}

function IowaRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 146 327"
      {...props}
    >
      <path d="M27.564 318.6c1.207 1.499 3.276 3.728 4.595 4.955h-.012c2.227 2.068 2.493 2.229 3.691 2.229 1.636 0 3.224-.659 4.452-1.848.819-.792.962-1.138.962-2.333 0-.771-.213-2.309-.473-3.417-.612-2.607-.43-5.424.46-7.17 1.454-2.845 5.158-5.887 8.677-7.124.856-.301 2.805-.764 4.33-1.028 3.303-.574 4.63-1.201 6.72-3.177 2.233-2.113 3.227-3.826 3.906-6.736.322-1.383.853-3.671 1.178-5.084.85-3.683 2.606-6.978 6.146-11.53 5.083-6.537 6.194-9.173 6.148-14.593-.055-6.484-1.355-10.107-5.307-14.79-4.958-5.874-6.012-8.188-5.443-11.946.375-2.474 2.039-8.722 2.805-10.534.674-1.596 4.343-5.136 6.35-6.128 1.45-.716 2.502-.897 9.759-1.677 4.474-.481 9.199-.961 10.5-1.066 2.935-.236 6.628-1.078 9.051-2.062 1.012-.412 5.114-2.575 9.114-4.808 6.927-3.865 7.401-4.186 9.936-6.73 1.464-1.47 3.013-3.337 3.442-4.151.429-.813 1.208-3.139 1.73-5.168.523-2.029 1.331-4.444 1.796-5.365 1.042-2.065 3.746-5.446 6.241-7.806 3.446-3.258 5.354-6.172 6.103-9.318.587-2.465 1.033-9.514.825-13.012-.445-7.445-.809-8.708-3.457-11.982-1.753-2.168-3.029-3.168-7.163-5.613-6.526-3.858-8.301-5.762-11.587-12.431-2.653-5.382-4.009-7.027-9.776-11.849-2.269-1.898-4.842-4.267-5.718-5.266-1.89-2.156-4.546-6.119-5.411-8.075-2.061-4.66-5.924-9.553-9.321-11.808-.898-.596-3.409-1.664-5.928-2.521-2.404-.818-6.375-2.463-8.826-3.655-3.855-1.876-4.735-2.44-6.537-4.196-3.587-3.493-3.865-4.085-7.027-14.95-1.547-5.317-3.345-11.307-3.994-13.31-1.909-5.891-2.115-8.401-1.015-12.35.51-1.825 2.42-5.761 3.71-7.642.478-.695 1.278-2.14 1.78-3.212.761-1.627.93-2.39 1.015-4.6l.102-2.65-3.518-4.934c-1.934-2.713-4.018-5.865-4.63-7.004-.612-1.14-1.3-2.291-1.53-2.56-.229-.27-.618-1.265-.865-2.211s-.64-2.09-.874-2.542L54.25 1H1v305.419c4.78-.285 9.106-.449 9.613-.365.508.084 2.376.716 4.152 1.404l3.229 1.251 3.686 3.583c2.028 1.971 4.676 4.809 5.884 6.308Z" />
      <path
        d="M1 306.419c4.78-.285 9.106-.449 9.613-.365.508.084 2.376.716 4.152 1.404l3.229 1.251 3.686 3.583c2.028 1.971 4.676 4.809 5.884 6.308 1.207 1.499 3.276 3.728 4.595 4.955h-.012c2.227 2.068 2.493 2.229 3.691 2.229 1.636 0 3.224-.659 4.452-1.848.819-.792.962-1.138.962-2.333 0-.771-.213-2.309-.473-3.417-.612-2.607-.43-5.424.46-7.17 1.454-2.845 5.158-5.887 8.677-7.124.856-.301 2.805-.764 4.33-1.028 3.303-.574 4.63-1.201 6.72-3.177 2.233-2.113 3.227-3.826 3.906-6.736.322-1.383.853-3.671 1.178-5.084.85-3.683 2.606-6.978 6.146-11.53 5.083-6.537 6.194-9.173 6.148-14.593-.055-6.484-1.355-10.107-5.307-14.79-4.958-5.874-6.012-8.188-5.443-11.946.375-2.474 2.039-8.722 2.805-10.534.674-1.596 4.343-5.136 6.35-6.128 1.45-.716 2.502-.897 9.759-1.677 4.474-.481 9.199-.961 10.5-1.066 2.935-.236 6.628-1.078 9.051-2.062 1.012-.412 5.114-2.575 9.114-4.808 6.927-3.865 7.401-4.186 9.936-6.73 1.464-1.47 3.013-3.337 3.442-4.151.429-.813 1.208-3.139 1.73-5.168.523-2.029 1.331-4.444 1.796-5.365 1.042-2.065 3.746-5.446 6.241-7.806 3.446-3.258 5.354-6.172 6.103-9.318.587-2.465 1.033-9.514.825-13.012-.445-7.445-.809-8.708-3.457-11.982-1.753-2.168-3.029-3.168-7.163-5.613-6.526-3.858-8.301-5.762-11.587-12.431-2.653-5.382-4.009-7.027-9.776-11.849-2.269-1.898-4.842-4.267-5.718-5.266-1.89-2.156-4.546-6.119-5.411-8.075-2.061-4.66-5.924-9.553-9.321-11.808-.898-.596-3.409-1.664-5.928-2.521-2.404-.818-6.375-2.463-8.826-3.655-3.855-1.876-4.735-2.44-6.537-4.196-3.587-3.493-3.865-4.085-7.027-14.95-1.547-5.317-3.345-11.307-3.994-13.31-1.909-5.891-2.115-8.401-1.015-12.35.51-1.825 2.42-5.761 3.71-7.642.478-.695 1.278-2.14 1.78-3.212.761-1.627.93-2.39 1.015-4.6l.102-2.65-3.518-4.934c-1.934-2.713-4.018-5.865-4.63-7.004-.612-1.14-1.3-2.291-1.53-2.56-.229-.27-.618-1.265-.865-2.211s-.64-2.09-.874-2.542L54.25 1H1"
        strokeWidth="10"
        className="stroke-current"
        fill="none"
      />
    </svg>
  );
}
