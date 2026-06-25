import { Reveal } from "./Reveal";
import { cx } from "@/lib/cx";

/**
 * Numbered section header in mono — e.g. `01 — Services` — with an optional
 * editorial lead line in the display face. The number is accent-colored;
 * the rest is muted. (Brief §3: "Numbered sections in mono".)
 */
export function SectionHeading({
  number,
  title,
  lead,
  className,
}: {
  number: string;
  title: string;
  lead?: string;
  className?: string;
}) {
  return (
    <div className={cx("max-w-3xl", className)}>
      <Reveal>
        <p className="font-mono text-xs tracking-wider text-muted sm:text-sm">
          <span className="text-accent">{number}</span>
          <span className="mx-2 text-muted">—</span>
          <span className="text-ink-dim">{title}</span>
        </p>
        {lead ? (
          <h2 className="mt-5 text-balance font-display text-2xl font-medium leading-snug text-ink sm:text-3xl">
            {lead}
          </h2>
        ) : null}
      </Reveal>
    </div>
  );
}
