import { hero, bookingHref, siteConfig } from "@/lib/content";
import { Container } from "./ui/Container";
import { DotGrid } from "./ui/DotGrid";
import { Reveal } from "./ui/Reveal";
import { TypingLine } from "./ui/TypingLine";
import { ButtonLink } from "./ui/Button";
import { Prompt } from "./ui/Prompt";

const isExternal = bookingHref.startsWith("http");

export function Hero() {
  return (
    // id="top" is the logo's "back to top" target.
    <section id="top" className="relative overflow-hidden">
      {/* Faint dot-grid texture behind the hero only. */}
      <DotGrid />

      <Container className="relative z-10">
        <div className="flex min-h-[88vh] flex-col justify-center pb-20 pt-36 sm:pt-40">
          {/* Eyebrow */}
          <Reveal>
            <p className="font-mono text-xs tracking-[0.22em] text-muted">
              {hero.eyebrow}
            </p>
          </Reveal>

          {/* H1 */}
          <Reveal delay={0.06}>
            <h1 className="mt-6 max-w-4xl text-balance font-display text-[2.5rem] font-semibold leading-[1.07] tracking-tight text-ink sm:text-5xl lg:text-[3.75rem]">
              {hero.h1}
            </h1>
          </Reveal>

          {/* Cycling capability line */}
          <Reveal delay={0.12}>
            <TypingLine
              phrases={hero.typingPhrases}
              className="mt-7 text-base sm:text-lg"
            />
          </Reveal>

          {/* Sub */}
          <Reveal delay={0.18}>
            <p className="mt-7 max-w-2xl text-pretty text-base leading-relaxed text-ink-dim sm:text-lg">
              {hero.sub}
            </p>
          </Reveal>

          {/* CTAs */}
          <Reveal delay={0.24}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ButtonLink
                href={bookingHref}
                external={isExternal}
                variant="primary"
                size="md"
              >
                {hero.ctaPrimary.label}
              </ButtonLink>
              <ButtonLink
                href={hero.ctaSecondary.href}
                variant="secondary"
                size="md"
              >
                {hero.ctaSecondary.label}
              </ButtonLink>
            </div>
          </Reveal>

          {/* Terminal-style meta line */}
          <Reveal delay={0.32}>
            <p className="mt-14 flex items-center gap-2 font-mono text-xs text-muted">
              <Prompt />
              <span>{siteConfig.location.toLowerCase()}</span>
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
