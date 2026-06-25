"use client";

import { useState, type FormEvent } from "react";
import { siteConfig, contact } from "@/lib/content";
import { cx } from "@/lib/cx";

type Status = "idle" | "submitting" | "success" | "error" | "unconfigured";

const labelCls =
  "mb-1.5 block font-mono text-[0.7rem] uppercase tracking-wider text-muted";
const inputCls =
  "w-full rounded-md border border-hairline bg-bg px-3.5 py-2.5 text-sm text-ink placeholder:text-muted/60 transition-colors focus:border-accent focus:outline-none";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const endpoint = siteConfig.formspreeEndpoint;
  // Subject-only mailto — never embeds the user's typed message in the URL.
  const mailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
    contact.mailSubject
  )}`;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    // No Formspree endpoint yet → guide the user to email instead.
    if (!endpoint) {
      setStatus("unconfigured");
      return;
    }

    setStatus("submitting");
    setErrorMsg("");
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        const json = (await res.json().catch(() => null)) as
          | { errors?: { message?: string }[] }
          | null;
        setErrorMsg(
          json?.errors?.[0]?.message ??
            "Something went wrong. Please try again, or email me directly."
        );
        setStatus("error");
      }
    } catch {
      setErrorMsg(
        "Couldn't reach the server. Please try again, or email me directly."
      );
      setStatus("error");
    }
  }

  // Success state replaces the form.
  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-xl border border-accent/30 bg-surface p-7 sm:p-8"
      >
        <p className="font-mono text-xs uppercase tracking-wider text-accent">
          [ sent ]
        </p>
        <h3 className="mt-3 font-display text-xl font-medium text-ink">
          Message sent — thank you.
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-dim">
          I&apos;ll get back to you shortly. For anything urgent, email{" "}
          <a
            href={mailto}
            className="text-accent underline-offset-4 hover:text-accent-hi hover:underline"
          >
            {siteConfig.email}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-xl border border-hairline bg-surface p-6 sm:p-7"
    >
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className={labelCls}>
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Jane Doe"
            className={inputCls}
          />
        </div>

        <div>
          <label htmlFor="email" className={labelCls}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="jane@org.com"
            className={inputCls}
          />
        </div>

        <div>
          <label htmlFor="organization" className={labelCls}>
            Organization <span className="normal-case text-muted/70">(optional)</span>
          </label>
          <input
            id="organization"
            name="organization"
            type="text"
            autoComplete="organization"
            placeholder="Your team or org"
            className={inputCls}
          />
        </div>

        <div>
          <label htmlFor="message" className={labelCls}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="What are you trying to build, and what does “done” look like?"
            className={cx(inputCls, "resize-y")}
          />
        </div>

        {/* Sets the notification email subject in Formspree. */}
        <input type="hidden" name="_subject" value="New inquiry from mjuzer.ai" />
        {/* Honeypot: bots fill this; humans never see it. */}
        <input
          type="text"
          name="_gotcha"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="hidden"
        />

        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-md bg-accent px-5 text-sm font-medium text-bg transition-colors hover:bg-accent-hi disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        >
          {status === "submitting" ? "Sending…" : "Send message"}
        </button>

        {/* Live region for status messages (announced to screen readers). */}
        <div aria-live="polite" className="min-h-[1.25rem]">
          {status === "error" ? (
            <p className="text-sm text-[#ff7a7a]">{errorMsg}</p>
          ) : null}
          {status === "unconfigured" ? (
            <p className="text-sm text-ink-dim">
              The form isn&apos;t connected yet — please email me directly at{" "}
              <a
                href={mailto}
                className="text-accent underline-offset-4 hover:text-accent-hi hover:underline"
              >
                {siteConfig.email}
              </a>
              .
            </p>
          ) : null}
        </div>

        <p className="text-xs text-muted">
          Prefer email?{" "}
          <a
            href={mailto}
            className="text-accent underline-offset-4 hover:text-accent-hi hover:underline"
          >
            Write to me directly
          </a>
          .
        </p>
      </div>
    </form>
  );
}
