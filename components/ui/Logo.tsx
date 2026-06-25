import Link from "next/link";
import { cx } from "@/lib/cx";
import { siteConfig } from "@/lib/content";

/**
 * The cursor monogram `m_` (brief §3). The underscore is accent-colored and
 * blinks like a terminal cursor on hover (disabled under reduced motion).
 */
export function Logo({
  className,
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) {
  return (
    <Link
      href="#top"
      onClick={onClick}
      aria-label={`${siteConfig.name} — back to top`}
      className={cx(
        "group inline-flex items-baseline font-mono text-lg font-semibold tracking-tight text-ink",
        className
      )}
    >
      m
      <span className="text-accent transition-opacity group-hover:animate-blink">
        _
      </span>
    </Link>
  );
}
