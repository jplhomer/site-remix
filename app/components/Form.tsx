import clsx from "clsx";
import type { ElementType } from "react";

export function Label({
  className,
  htmlFor,
  children,
}: {
  className?: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className={clsx("block font-bold mb-2 mt-4", className)}
    >
      {children}
    </label>
  );
}

export function Button({
  children,
  className,
  ...props
}: React.ComponentProps<"button">) {
  return (
    <button
      className={clsx(
        "mt-4 bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export function ValidationError({ children }: { children: React.ReactNode }) {
  return <div className="text-red-500 font-bold mt-4">{children}</div>;
}

export function Input<TTag extends ElementType = "input">({
  as: Component = "input",
  className,
  ...props
}: { as?: TTag; className?: string } & React.ComponentProps<TTag>) {
  return (
    <Component
      className={clsx("dark:bg-zinc-800", className)}
      {...props}
      type={props.type ?? "text"}
    />
  );
}
