import clsx from "clsx";

export function Prose({
  className,
  html,
}: {
  className?: string;
  html: string;
}) {
  return (
    <div
      className={clsx(className, "prose dark:prose-invert")}
      dangerouslySetInnerHTML={{ __html: html }}
    ></div>
  );
}
