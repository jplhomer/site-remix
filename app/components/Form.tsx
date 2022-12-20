import clsx from "clsx";

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
