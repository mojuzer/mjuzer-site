import Link from "next/link";
import { cx } from "@/lib/cx";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md";

const base =
  "inline-flex items-center justify-center gap-2 rounded-md font-medium leading-none transition-colors duration-200 focus-visible:outline-none disabled:opacity-50";

const variantClasses: Record<Variant, string> = {
  // Filled violet with near-black text — the primary call to action.
  primary: "bg-accent text-bg hover:bg-accent-hi",
  // Hairline outline that warms to accent on hover.
  secondary:
    "border border-hairline text-ink hover:border-accent/60 hover:text-ink",
  // Text-only.
  ghost: "text-ink-dim hover:text-ink",
};

const sizeClasses: Record<Size, string> = {
  sm: "h-9 px-3.5 text-sm",
  md: "h-11 px-5 text-sm sm:text-[0.95rem]",
};

/**
 * Link styled as a button. Renders an external <a> (new tab, safe rel) when
 * `external`, otherwise a next/link for in-page anchors.
 */
export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  external = false,
  className,
  onClick,
  ariaLabel,
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  external?: boolean;
  className?: string;
  onClick?: () => void;
  ariaLabel?: string;
}) {
  const cls = cx(base, variantClasses[variant], sizeClasses[size], className);

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cls}
        onClick={onClick}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={cls} onClick={onClick} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}
