import { cx } from "@/lib/cx";

/** Inline SVG icons — currentColor so they inherit text color. Decorative. */

export function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={cx("shrink-0", className)}
    >
      <path
        d="M3 8.5l3 3 7-8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Diagonal arrow (↗) for external / live links. */
export function ArrowUpRight({ className }: { className?: string }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={cx("shrink-0", className)}
    >
      <path
        d="M5.5 10.5l5-5M6 5.5h4.5V10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
