import { cx } from "@/lib/cx";

/**
 * Editorial content column — max-width ~1100px (brief §3), left-aligned,
 * with responsive gutters. Every section composes its content inside this.
 */
export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cx("mx-auto w-full max-w-content px-5 sm:px-8", className)}>
      {children}
    </div>
  );
}
