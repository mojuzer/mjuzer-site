# mjuzer.ai — Mohammed Juzer, Independent AI Consultant

A fast, single-page marketing site for an independent AI consultancy. Dark,
near-black, single violet accent, mono-inflected — "engineer's terminal meets
editorial design." Built to deploy on Vercel and use for sales outreach.

**Stack:** Next.js 15 (App Router) · TypeScript · Tailwind CSS v3 · Framer
Motion · `next/font` · Vercel Analytics. Contact form posts to Formspree with a
`mailto:` fallback; booking via a Cal.com/Calendly link.

---

## Quick start

Requires **Node 18.18+** (20+ recommended) and npm.

```bash
npm install          # install dependencies
npm run dev          # start dev server → http://localhost:3000
npm run build        # production build
npm start            # serve the production build locally
npm run lint         # lint
```

---

## Editing content (do this first)

**All copy lives in one file: [`lib/content.ts`](lib/content.ts).** Edit text
there and it updates across the site — components never hardcode copy. Search
the file for `TODO` to find the handful of values you should set before going
live.

### ✅ Before-you-go-live checklist

Open `lib/content.ts` and set these (all marked with `// TODO`):

- [ ] **Prices** — `pricing.tiers`. Currently USD placeholders
      (`from $7,500`, `from $2,500/mo`, `from $2,000`). **Review these.**
- [ ] **SitRoom links** — `work.cards[0].links`. Paste the live URL + GitHub
      repo URL. Empty links are simply not rendered, so the card works either way.
- [ ] **Cal.com / Calendly link** — see _Configuration_ below. Until it's set,
      every "Book a call" button scrolls to the contact form instead.
- [ ] **Formspree endpoint** — see _Configuration_ below. Until it's set, the
      contact form gracefully tells visitors to email you (and the `mailto:`
      fallback link always works).
- [ ] Double-check name, email, LinkedIn, GitHub, and domain in `siteConfig`.

---

## Configuration (env vars)

Two integrations are wired but intentionally left blank. Set them either as
environment variables (recommended for Vercel) **or** by pasting the value
directly into `siteConfig` in `lib/content.ts`. Env vars win if both are set.

Copy the example file for local dev:

```bash
cp .env.local.example .env.local
```

| Variable | What it does |
| --- | --- |
| `NEXT_PUBLIC_FORMSPREE_ENDPOINT` | Your Formspree form endpoint, e.g. `https://formspree.io/f/abcdwxyz`. Create a form at [formspree.io](https://formspree.io). |
| `NEXT_PUBLIC_CAL_LINK` | Your booking link, e.g. `https://cal.com/mjuzer/discovery` or a Calendly URL. |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | _(optional)_ Set to enable Plausible analytics instead of/alongside Vercel Analytics. |

On Vercel, add the same keys under **Project → Settings → Environment
Variables**, then redeploy.

### Analytics

[`@vercel/analytics`](https://vercel.com/docs/analytics) is already included in
`app/layout.tsx` — it needs **no key** and activates automatically once you
enable Analytics in the Vercel dashboard. Prefer Plausible? Set
`NEXT_PUBLIC_PLAUSIBLE_DOMAIN` and the script loads itself (and you can remove
the `<Analytics />` line).

---

## Deploy to Vercel

1. Push this repo to GitHub/GitLab/Bitbucket.
2. Go to [vercel.com/new](https://vercel.com/new) and **import** the repo.
   Vercel auto-detects Next.js — no build settings needed.
3. Add the environment variables above (optional but recommended).
4. **Deploy.** You'll get a `*.vercel.app` URL.

Or from the CLI:

```bash
npm i -g vercel
vercel          # preview deploy
vercel --prod   # production deploy
```

### Connect your custom domain (e.g. mjuzer.ai)

1. In Vercel: **Project → Settings → Domains → Add** → enter `mjuzer.ai`
   (add `www.mjuzer.ai` too if you want it).
2. Vercel shows the DNS records to create. At your domain registrar:
   - **Apex (`mjuzer.ai`):** add an `A` record pointing to `76.76.21.21`,
     _or_ follow Vercel's nameserver option.
   - **`www`:** add a `CNAME` record pointing to `cname.vercel-dns.com`.
3. Wait for DNS to propagate (usually minutes). Vercel issues the SSL
   certificate automatically.
4. If your domain changes, update `siteConfig.url` / `siteConfig.domain` in
   `lib/content.ts` so SEO/OG metadata uses the right absolute URL.

---

## Project structure

```
app/
  layout.tsx            Root layout — fonts (next/font), SEO metadata, analytics
  page.tsx              Single page: composes all sections in order
  globals.css           Design tokens (CSS variables) + base styles + reduced-motion
  icon.svg              Favicon — the m_ monogram
  apple-icon.tsx        Apple touch icon (generated)
  opengraph-image.tsx   Social share image, brand-styled (generated)
components/
  Nav, Hero, TrustStrip, Services, Process, Work, About, Pricing,
  Contact, ContactForm, Footer
  ui/                   Shared primitives: Section, SectionHeading, Container,
                        Reveal, TypingLine, Button, Logo, Prompt, BracketTag,
                        DotGrid, Icons
lib/
  content.ts            ← ALL copy + config (edit here)
  cx.ts                 tiny className helper
tailwind.config.ts      Design tokens mapped to Tailwind (reads the CSS variables)
```

### Design tokens

Defined once as CSS variables in [`app/globals.css`](app/globals.css) (`:root`)
and referenced by [`tailwind.config.ts`](tailwind.config.ts). Change a color in
one place and it updates everywhere. Use them as Tailwind classes: `bg-bg`,
`text-ink`, `text-ink-dim`, `text-muted`, `border-hairline`, `bg-surface`,
`text-accent`, `bg-accent`, and accent opacity variants like `bg-accent/10`.

---

## Accessibility & performance

- Semantic HTML, labeled form fields, a "Skip to content" link, visible
  focus rings, `aria-current` on the active nav link, and an `aria-live`
  region for form status.
- **All motion is disabled under `prefers-reduced-motion`** (entrance
  reveals, the hero typing effect, and cursor blink).
- Fonts via `next/font` (self-hosted, no layout shift). Images would use
  `next/image` (the current design is type-only by choice).
- Production build is fully static (SSG) → fast, cheap, and Lighthouse-friendly.

### Adding a headshot (optional)

The About section is type-only by design. To add a photo: drop an image in
`public/` and render a `<Image>` from `next/image` in a left column inside
[`components/About.tsx`](components/About.tsx) (there's a comment marking the
spot).

---

## Notes

- Former employers/institutions in the "Background" strip are framed as
  professional background, **not** clients or endorsements (see the footer
  note). Don't repurpose them as a client logo wall.
- No testimonials or metrics are invented — only the figures you provide are
  shown.

Built with Next.js · deployed on Vercel.
