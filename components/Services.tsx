import { services } from "@/lib/content";
import { Section } from "./ui/Section";
import { SectionHeading } from "./ui/SectionHeading";
import { BracketTag } from "./ui/BracketTag";
import { Reveal } from "./ui/Reveal";
import { CheckIcon } from "./ui/Icons";

export function Services() {
  return (
    <Section id="services">
      <SectionHeading
        number={services.number}
        title={services.title}
        lead={services.intro}
      />

      {/* Four core service cards */}
      <div className="mt-12 grid gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-5">
        {services.cards.map((card, i) => (
          <Reveal
            key={card.tag}
            delay={(i % 2) * 0.06}
            className="h-full"
          >
            <article className="flex h-full flex-col rounded-xl border border-hairline bg-surface p-7 transition-colors duration-300 hover:border-accent/30 sm:p-8">
              <div className="flex items-center justify-between">
                <BracketTag>{card.tag}</BracketTag>
                <span className="font-mono text-xs text-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="mt-5 font-display text-xl font-medium text-ink">
                {card.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-dim">
                {card.description}
              </p>

              <ul className="mt-6 space-y-2.5">
                {card.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex gap-2.5 text-sm text-ink-dim"
                  >
                    <CheckIcon className="mt-[0.28rem] text-accent" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>

      {/* Workshops & talks — full-width add-on strip */}
      <Reveal className="mt-4 sm:mt-5">
        <article className="rounded-xl border border-hairline bg-surface p-7 sm:p-8">
          <div className="flex items-center gap-3">
            <BracketTag>{services.addon.tag}</BracketTag>
            <span className="font-mono text-xs text-muted">add-on</span>
          </div>
          <h3 className="mt-4 font-display text-xl font-medium text-ink">
            {services.addon.title}
          </h3>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-ink-dim">
            {services.addon.description}
          </p>
        </article>
      </Reveal>
    </Section>
  );
}
