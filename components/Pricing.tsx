import { pricing, bookingHref, hero } from "@/lib/content";
import { Section } from "./ui/Section";
import { SectionHeading } from "./ui/SectionHeading";
import { BracketTag } from "./ui/BracketTag";
import { Reveal } from "./ui/Reveal";
import { ButtonLink } from "./ui/Button";
import { Prompt } from "./ui/Prompt";
import { cx } from "@/lib/cx";

const isExternal = bookingHref.startsWith("http");

export function Pricing() {
  return (
    // Second (and last) section to carry the faint dot-grid texture.
    <Section id="pricing" dotGrid>
      <SectionHeading
        number={pricing.number}
        title={pricing.title}
        lead={pricing.intro}
      />

      {/* Free discovery call — highlighted banner */}
      <Reveal>
        <div className="mt-12 flex flex-col gap-5 rounded-xl border border-accent/30 bg-surface p-7 sm:mt-14 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div className="max-w-xl">
            <BracketTag>free</BracketTag>
            <h3 className="mt-3 font-display text-xl font-medium text-ink">
              {pricing.discoveryBanner.title}
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-ink-dim">
              {pricing.discoveryBanner.body}
            </p>
          </div>
          <ButtonLink
            href={bookingHref}
            external={isExternal}
            variant="primary"
            size="md"
            className="shrink-0"
          >
            {hero.ctaPrimary.label}
          </ButtonLink>
        </div>
      </Reveal>

      {/* Paid tiers */}
      <div className="mt-4 grid gap-4 sm:mt-5 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
        {pricing.tiers.map((tier, i) => (
          <Reveal key={tier.name} delay={(i % 4) * 0.05} className="h-full">
            <article
              className={cx(
                "flex h-full flex-col rounded-xl border bg-surface p-6 transition-colors duration-300 sm:p-7",
                tier.featured
                  ? "border-accent/40"
                  : "border-hairline hover:border-accent/30"
              )}
            >
              {tier.featured ? (
                <span className="mb-3 font-mono text-[0.7rem] uppercase tracking-wider text-accent">
                  Start here
                </span>
              ) : (
                <span className="mb-3 font-mono text-[0.7rem] uppercase tracking-wider text-muted">
                  &nbsp;
                </span>
              )}
              <h3 className="font-display text-lg font-medium text-ink">
                {tier.name}
              </h3>
              <p className="mt-2 font-mono text-base text-ink">{tier.price}</p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-dim">
                {tier.description}
              </p>
            </article>
          </Reveal>
        ))}
      </div>

      {/* Closing CTA line */}
      <Reveal>
        <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-center gap-2 font-mono text-sm text-ink-dim">
            <Prompt />
            <span>{pricing.closingLine}</span>
          </p>
          <ButtonLink
            href={bookingHref}
            external={isExternal}
            variant="secondary"
            size="sm"
            className="shrink-0"
          >
            Book a call
          </ButtonLink>
        </div>
      </Reveal>
    </Section>
  );
}
