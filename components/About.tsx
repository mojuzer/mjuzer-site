import { about } from "@/lib/content";
import { Section } from "./ui/Section";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { Prompt } from "./ui/Prompt";

export function About() {
  // First paragraphs are prose; the last short line gets a terminal highlight.
  const prose = about.paragraphs.slice(0, -1);
  const closing = about.paragraphs[about.paragraphs.length - 1];

  return (
    <Section id="about">
      <SectionHeading
        number={about.number}
        title={about.title}
        lead={about.heading}
      />

      {/*
        Type-only by design (brief §4). To add a headshot later, drop an image
        in /public and render a <next/image> in a left column here — see README.
      */}
      <Reveal delay={0.06}>
        <div className="mt-10 max-w-3xl border-l border-hairline pl-6 sm:pl-8">
          <div className="space-y-5 text-base leading-relaxed text-ink-dim sm:text-[1.0625rem]">
            {prose.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          {closing ? (
            <p className="mt-7 flex flex-wrap items-baseline gap-2 font-mono text-sm text-ink">
              <Prompt />
              <span>{closing}</span>
            </p>
          ) : null}
        </div>
      </Reveal>
    </Section>
  );
}
