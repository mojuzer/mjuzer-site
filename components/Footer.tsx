import Link from "next/link";
import { navLinks, siteConfig, footer, contact } from "@/lib/content";
import { Container } from "./ui/Container";
import { Logo } from "./ui/Logo";

const linkCls =
  "text-sm text-ink-dim transition-colors hover:text-accent";

export function Footer() {
  const mailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
    contact.mailSubject
  )}`;

  return (
    <footer className="relative border-t border-hairline">
      <Container className="py-12 sm:py-14">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          {/* Brand */}
          <div>
            <Logo />
            <p className="mt-4 max-w-xs font-mono text-xs leading-relaxed text-muted">
              Agents · evals · governance · full-stack AI.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-10 sm:flex-row sm:gap-16">
            <nav aria-label="Footer" className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className={linkCls}>
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex flex-col gap-3">
              <a href={mailto} className={linkCls}>
                Email
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={linkCls}
              >
                LinkedIn
              </a>
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className={linkCls}
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-hairline pt-6">
          {/* Integrity note — keeps "Background" framing honest (brief §6). */}
          <p className="max-w-2xl text-xs leading-relaxed text-muted">
            {footer.confidentiality}
          </p>
          <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-muted">
              © {siteConfig.year} {siteConfig.name}
            </p>
            <p className="font-mono text-xs text-muted">{footer.builtWith}</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
