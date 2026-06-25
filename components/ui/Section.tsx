import { cx } from "@/lib/cx";
import { Container } from "./Container";
import { DotGrid } from "./DotGrid";

/**
 * Semantic <section> with consistent vertical rhythm and an optional top
 * hairline rule (the editorial divider between blocks). Content sits in a
 * stacking context above the optional dot-grid texture.
 */
export function Section({
  id,
  children,
  className,
  hairline = true,
  dotGrid = false,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
  hairline?: boolean;
  dotGrid?: boolean;
}) {
  return (
    <section id={id} className={cx("relative", className)}>
      {dotGrid ? <DotGrid /> : null}
      <Container className="relative z-10">
        <div className={cx("py-20 sm:py-28", hairline && "hairline border-t")}>
          {children}
        </div>
      </Container>
    </section>
  );
}
