import { work, type WorkCard } from "@/lib/content";
import { Section } from "./ui/Section";
import { SectionHeading } from "./ui/SectionHeading";
import { BracketTag } from "./ui/BracketTag";
import { Reveal } from "./ui/Reveal";
import { ButtonLink } from "./ui/Button";
import { ArrowUpRight } from "./ui/Icons";

/** One labeled field row (Context / Built / Outcome). Empty values are skipped. */
function Field({
  label,
  value,
  emphasize = false,
}: {
  label: string;
  value?: string;
  emphasize?: boolean;
}) {
  if (!value) return null;
  return (
    <div className="grid grid-cols-[4.25rem_1fr] gap-3 sm:grid-cols-[5rem_1fr] sm:gap-4">
      <dt className="pt-0.5 font-mono text-[0.7rem] uppercase tracking-wider text-muted">
        {label}
      </dt>
      <dd
        className={emphasize ? "text-sm leading-relaxed text-ink" : "text-sm leading-relaxed text-ink-dim"}
      >
        {value}
      </dd>
    </div>
  );
}

/** Renders the visible (non-empty) links, or null if there are none. */
function WorkLinks({ card }: { card: WorkCard }) {
  const links = (card.links ?? []).filter((l) => l.href);
  if (links.length === 0) return null;
  return (
    <div className="mt-7 flex flex-wrap gap-3">
      {links.map((link) => (
        <ButtonLink
          key={link.label}
          href={link.href}
          external
          variant="secondary"
          size="sm"
        >
          {link.label}
          <ArrowUpRight />
        </ButtonLink>
      ))}
    </div>
  );
}

export function Work() {
  const featured = work.cards.find((c) => c.featured);
  const rest = work.cards.filter((c) => !c.featured);

  return (
    <Section id="work">
      <SectionHeading number={work.number} title={work.title} lead={work.lead} />

      <div className="mt-12 space-y-4 sm:mt-14 sm:space-y-5">
        {/* Featured / flagship card — full width */}
        {featured ? (
          <Reveal>
            <article className="rounded-xl border border-accent/20 bg-surface p-7 sm:p-9">
              <div className="flex flex-wrap items-center gap-4">
                <BracketTag>{featured.tag}</BracketTag>
                {/* Live indicator (pulse disabled under reduced motion) */}
                <span className="inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-wider text-accent">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                  </span>
                  live
                </span>
              </div>

              <h3 className="mt-5 max-w-3xl font-display text-2xl font-medium text-ink sm:text-[1.75rem]">
                {featured.title}
              </h3>

              <dl className="mt-6 max-w-3xl space-y-3.5">
                <Field label="Context" value={featured.context} />
                <Field label="Built" value={featured.built} />
                <Field label="Outcome" value={featured.outcome} emphasize />
              </dl>

              <WorkLinks card={featured} />
            </article>
          </Reveal>
        ) : null}

        {/* Remaining cards — 2-up grid */}
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
          {rest.map((card, i) => (
            <Reveal key={card.title} delay={(i % 2) * 0.06} className="h-full">
              <article className="flex h-full flex-col rounded-xl border border-hairline bg-surface p-7 transition-colors duration-300 hover:border-accent/30 sm:p-8">
                <div className="flex items-start justify-between gap-3">
                  <BracketTag>{card.tag}</BracketTag>
                </div>

                <h3 className="mt-5 font-display text-lg font-medium text-ink">
                  {card.title}
                </h3>
                {card.org ? (
                  <p className="mt-1 font-mono text-xs text-muted">
                    {card.org}
                  </p>
                ) : null}

                <dl className="mt-4 flex-1 space-y-3">
                  <Field label="Context" value={card.context} />
                  <Field label="Built" value={card.built} />
                  <Field label="Outcome" value={card.outcome} emphasize />
                </dl>

                {card.detailsOnRequest ? (
                  <p className="mt-6 font-mono text-xs text-muted">
                    Details on request
                  </p>
                ) : null}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
