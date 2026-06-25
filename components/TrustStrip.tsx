import { trust } from "@/lib/content";
import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";

/**
 * Credibility note framed as professional background — deliberately NOT a
 * logo wall, and never implying these are clients or endorsements (brief §6).
 */
export function TrustStrip() {
  return (
    <section aria-label="Professional background" className="relative">
      <Container>
        <Reveal>
          <p className="border-y border-hairline py-6 text-sm leading-relaxed text-muted">
            {trust.prefix}{" "}
            {trust.items.map((item, i) => (
              <span key={item}>
                {i > 0 ? (
                  <span className="px-1.5 text-accent/40">·</span>
                ) : null}
                <span className="text-ink-dim">{item}</span>
              </span>
            ))}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
