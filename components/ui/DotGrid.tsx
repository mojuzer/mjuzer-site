import { cx } from "@/lib/cx";

/**
 * Faint dot-grid texture (≈7% accent). Absolutely positioned fill meant to sit
 * behind a section's content. Radial mask fades it out so it reads as texture
 * at the top of a section, never a flat repeating pattern. Used sparingly —
 * one or two sections only (brief §3). Purely decorative → aria-hidden.
 */
export function DotGrid({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cx(
        "dot-grid-layer pointer-events-none absolute inset-0 z-0",
        className
      )}
      style={{
        WebkitMaskImage:
          "radial-gradient(120% 85% at 50% 0%, #000 30%, transparent 80%)",
        maskImage:
          "radial-gradient(120% 85% at 50% 0%, #000 30%, transparent 80%)",
      }}
    />
  );
}
