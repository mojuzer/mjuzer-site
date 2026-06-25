import { contact, siteConfig, bookingHref } from "@/lib/content";
import { Section } from "./ui/Section";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { ButtonLink } from "./ui/Button";
import { ContactForm } from "./ContactForm";

const isExternal = bookingHref.startsWith("http");

/** A labeled direct-contact row: mono label + value (optionally a link). */
function DirectRow({
  label,
  value,
  href,
  external,
}: {
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}) {
  return (
    <div className="grid grid-cols-[5.5rem_1fr] items-baseline gap-3">
      <dt className="font-mono text-[0.7rem] uppercase tracking-wider text-muted">
        {label}
      </dt>
      <dd className="text-sm text-ink-dim">
        {href ? (
          <a
            href={href}
            {...(external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className="text-ink transition-colors hover:text-accent"
          >
            {value}
          </a>
        ) : (
          value
        )}
      </dd>
    </div>
  );
}

export function Contact() {
  const mailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
    contact.mailSubject
  )}`;

  return (
    <Section id="contact">
      <SectionHeading
        number={contact.number}
        title={contact.title}
        lead={contact.heading}
      />

      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        {/* Left: intro, direct details, book-a-call */}
        <Reveal>
          <div>
            <p className="max-w-md text-base leading-relaxed text-ink-dim">
              {contact.body}
            </p>

            <dl className="mt-8 space-y-4">
              <DirectRow label="Email" value={siteConfig.email} href={mailto} />
              <DirectRow
                label="LinkedIn"
                value="in/mjuzer"
                href={siteConfig.linkedin}
                external
              />
              <DirectRow
                label="GitHub"
                value={siteConfig.githubHandle}
                href={siteConfig.github}
                external
              />
              <DirectRow label="Location" value={siteConfig.location} />
            </dl>

            <div className="mt-8">
              <ButtonLink
                href={bookingHref}
                external={isExternal}
                variant="secondary"
                size="md"
              >
                Book a call
              </ButtonLink>
            </div>
          </div>
        </Reveal>

        {/* Right: the form */}
        <Reveal delay={0.08}>
          <ContactForm />
        </Reveal>
      </div>
    </Section>
  );
}
