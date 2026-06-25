import { cx } from "@/lib/cx";

/**
 * The shell-prompt motif `>_` (brief §3). Decorative → aria-hidden so it
 * isn't read aloud. Use before key callouts and CTA lines.
 */
export function Prompt({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cx("select-none font-mono text-accent", className)}
    >
      {">_"}
    </span>
  );
}
