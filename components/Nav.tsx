"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { bookingHref, navLinks } from "@/lib/content";
import { Container } from "./ui/Container";
import { ButtonLink } from "./ui/Button";
import { Logo } from "./ui/Logo";
import { cx } from "@/lib/cx";

const isExternal = bookingHref.startsWith("http");

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  // Show a background + hairline once the user scrolls off the top.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the nav link for the section currently in view.
  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Lock scroll + allow Escape to close the mobile menu.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      className={cx(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || open
          ? "border-b border-hairline bg-bg/80 backdrop-blur-md"
          : "border-b border-transparent"
      )}
    >
      <Container className="flex h-16 items-center justify-between sm:h-[72px]">
        <Logo onClick={close} />

        {/* Desktop nav */}
        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Primary"
        >
          {navLinks.map((link) => {
            const isActive = active === link.href.slice(1);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "true" : undefined}
                className={cx(
                  "text-sm transition-colors hover:text-ink",
                  isActive ? "text-ink" : "text-ink-dim"
                )}
              >
                {link.label}
              </Link>
            );
          })}
          <ButtonLink
            href={bookingHref}
            external={isExternal}
            size="sm"
            variant="primary"
          >
            Book a call
          </ButtonLink>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-ink-dim transition-colors hover:text-ink md:hidden"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {open ? (
              <>
                <path d="M6 6l12 12" />
                <path d="M18 6L6 18" />
              </>
            ) : (
              <>
                <path d="M3 7h18" />
                <path d="M3 12h18" />
                <path d="M3 17h18" />
              </>
            )}
          </svg>
        </button>
      </Container>

      {/* Mobile menu */}
      {open ? (
        <div
          id="mobile-menu"
          className="border-t border-hairline bg-bg md:hidden"
        >
          <Container className="flex flex-col py-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={close}
                className="rounded-md px-1 py-3 text-base text-ink-dim transition-colors hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
            <ButtonLink
              href={bookingHref}
              external={isExternal}
              onClick={close}
              className="mt-3 w-full"
            >
              Book a call
            </ButtonLink>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
