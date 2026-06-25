import { cx } from "@/lib/cx";

/**
 * Bracket label motif: `[ agents ]`, `[ evals ]`, `[ governance ]` (brief §3).
 * Brackets are a dimmer accent than the label for a subtle terminal feel.
 */
export function BracketTag({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cx(
        "inline-flex select-none items-center font-mono text-xs lowercase tracking-wider text-accent",
        className
      )}
    >
      <span className="text-accent/45">[</span>
      <span className="px-1.5">{children}</span>
      <span className="text-accent/45">]</span>
    </span>
  );
}
