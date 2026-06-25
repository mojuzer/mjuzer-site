import { howIWork } from "@/lib/content";
import { Section } from "./ui/Section";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";

export function Process() {
  return (
    <Section id="process">
      <SectionHeading
        number={howIWork.number}
        title={howIWork.title}
        lead={howIWork.lead}
      />

      {/* Numbered steps as an editorial list with hairline dividers. */}
      <div className="mt-12 border-t border-hairline sm:mt-14">
        {howIWork.steps.map((step, i) => (
          <Reveal key={step.title} delay={i * 0.05}>
            <div className="grid grid-cols-[2.5rem_1fr] gap-x-5 border-b border-hairline py-7 sm:grid-cols-[6rem_1fr] sm:gap-x-10 sm:py-8">
              <span className="font-mono text-2xl font-medium leading-none text-accent sm:text-3xl">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-lg font-medium text-ink sm:text-xl">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-dim sm:text-base">
                  {step.body}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
