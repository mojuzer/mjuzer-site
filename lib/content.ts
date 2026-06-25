/* ============================================================================
 *  CONTENT — single source of truth for ALL copy on the site.
 *
 *  Edit text here and it updates everywhere. Components read from these
 *  exports; they don't hardcode copy. Search for "TODO" to find the few
 *  values you should set before going live (prices, SitRoom links, etc.).
 * ========================================================================== */

/* ----------------------------------------------------------------------------
 *  Site-wide config: identity, links, contact details.
 *  Cal + Formspree can also be set via env vars (see .env.local.example);
 *  an env var, if present, overrides the value written here.
 * -------------------------------------------------------------------------- */
/**
 * Base URL of the live site — the ONE place to change when you connect a
 * custom domain. metadataBase, canonical link, Open Graph + Twitter, robots,
 * and sitemap all derive from this (directly, or via url/domain below).
 * e.g. swap to "https://mjuzer.ai" once the custom domain is live.
 */
export const SITE_URL = "https://mjuzer-site.vercel.app";

export const siteConfig = {
  name: "Mohammed Juzer",
  role: "Independent AI Consultant",
  // Absolute base URL + bare host, both derived from SITE_URL (single source).
  url: SITE_URL,
  domain: SITE_URL.replace(/^https?:\/\//, ""),

  email: "mohdjuzer52@gmail.com",
  linkedin: "https://www.linkedin.com/in/mjuzer",
  github: "https://github.com/mojuzer",
  githubHandle: "mojuzer",

  // Booking link for the discovery call (Cal.com or Calendly).
  // Set NEXT_PUBLIC_CAL_LINK in .env.local, or paste the URL between the quotes.
  // TODO: add your Cal.com / Calendly link.
  calLink: process.env.NEXT_PUBLIC_CAL_LINK || "",

  // Formspree endpoint, e.g. "https://formspree.io/f/abcdwxyz".
  // Set NEXT_PUBLIC_FORMSPREE_ENDPOINT in .env.local, or paste it here.
  // While empty, the contact form gracefully falls back to a mailto: link.
  // TODO: add your Formspree endpoint.
  formspreeEndpoint: process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || "",

  location: "Geneva / Remote / Global",
  year: 2026,
} as const;

/**
 * Effective booking link: use the Cal link if set, otherwise scroll the user
 * to the contact section so "Book a call" buttons always do something useful.
 */
export const bookingHref = siteConfig.calLink || "#contact";

/* ----------------------------------------------------------------------------
 *  Navigation — sticky top nav anchor links.
 * -------------------------------------------------------------------------- */
export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Pricing", href: "#pricing" },
] as const;

/* ----------------------------------------------------------------------------
 *  Hero
 * -------------------------------------------------------------------------- */
export const hero = {
  eyebrow: "INDEPENDENT AI CONSULTANCY",
  h1: "AI agents, governance, and applied systems — built to ship.",
  // The mono accent line under H1 types these out and cycles through them.
  typingPhrases: [
    "I design RAG assistants",
    "I build evaluation suites",
    "I write adoption playbooks",
    "I ship full-stack AI products",
  ],
  sub: "I help mission-driven and public-interest teams move from AI hype to working, validated systems — custom agents, evaluation suites, and responsible-adoption frameworks. Strategy and code, from the same person.",
  ctaPrimary: { label: "Book a discovery call" }, // href = bookingHref
  ctaSecondary: { label: "See selected work", href: "#work" },
} as const;

/* ----------------------------------------------------------------------------
 *  Trust strip — credibility note, NOT a client logo wall.
 *  Framed as professional background, never as endorsement (see footer note).
 * -------------------------------------------------------------------------- */
export const trust = {
  prefix: "Background spanning",
  // Each item rendered with a "·" separator. NOT a client list — see footer note.
  items: [
    "UN OCHA",
    "Deloitte",
    "P&G",
    "the Munk School of Global Affairs",
    "frontier-AI evaluation programs",
  ],
} as const;

/* ----------------------------------------------------------------------------
 *  01 — Services
 * -------------------------------------------------------------------------- */
export const services = {
  number: "01",
  title: "Services",
  intro: "What I do. Four core services + a workshops add-on.",
  cards: [
    {
      tag: "agents",
      title: "AI Agents & Copilots",
      description:
        "From proof-of-concept to validated, production-ready agents. RAG knowledge assistants, advisory/persona agents, and workflow-automation agents that plug into the tools your team already uses (M365, task boards, CRMs, internal data).",
      bullets: [
        "Use-case discovery & scoping",
        "Retrieval-augmented answers grounded in your knowledge base",
        "Multi-step / workflow agents",
        "A validation suite before anything goes live",
        "Handover, documentation & training",
      ],
    },
    {
      tag: "evals",
      title: "AI Evaluation & Quality",
      description:
        "If you can't measure it, you can't trust it. I build evaluation datasets, world specifications, and test suites that tell you whether your AI actually works — and keeps working.",
      bullets: [
        "Evaluation dataset & rubric design",
        "World-spec authoring for domain tasks",
        "Regression / validation suites",
        "Red-teaming & failure analysis",
        "Model comparison & selection",
      ],
    },
    {
      tag: "governance",
      title: "Responsible AI Adoption",
      description:
        "Practical governance that helps teams adopt agentic AI without the foot-guns. Policies, guardrails, and change management — written for the people who'll actually use the tools.",
      bullets: [
        "Adoption playbooks (M365 Copilot & enterprise AI)",
        "Risk & governance frameworks",
        "Data-handling guardrails",
        "Staff enablement & exec briefings",
      ],
    },
    {
      tag: "products",
      title: "Full-Stack AI Products",
      description:
        "End-to-end web applications powered by LLMs — dashboards, trackers, and internal tools, designed, built, and deployed.",
      bullets: [
        "Rapid prototyping",
        "Next.js / FastAPI + LLM APIs",
        "Data pipelines & integrations",
        "Deployed on Vercel / Render, then iterated",
      ],
    },
  ],
  // Add-on, rendered as a full-width strip below the grid.
  addon: {
    tag: "workshops",
    title: "Workshops & talks",
    description:
      "Hands-on sessions on the current AI tool landscape, agent design, and responsible adoption — calibrated to your team's level.",
  },
} as const;

/* ----------------------------------------------------------------------------
 *  02 — How I work
 * -------------------------------------------------------------------------- */
export const howIWork = {
  number: "02",
  title: "How I work",
  lead: "A simple path from problem to a working, validated artifact.",
  steps: [
    {
      title: "Discovery (free).",
      body: "A short call to understand the problem, not just the ask.",
    },
    {
      title: "Scope & proposal.",
      body: "Fixed deliverables, timeline, and price — no open-ended meters.",
    },
    {
      title: "Build & validate.",
      body: "A working artifact and the evidence that it works.",
    },
    {
      title: "Handover.",
      body: "Docs, training, and a clear path to maintain or extend it.",
    },
  ],
} as const;

/* ----------------------------------------------------------------------------
 *  03 — Selected work
 *
 *  The first card (SitRoom) is the live flagship. Paste its URLs below.
 *  Other cards show "Details on request" until you choose to expand them.
 *  Links with an empty href are simply not rendered.
 * -------------------------------------------------------------------------- */
export type WorkLink = { label: string; href: string };
export type WorkCard = {
  tag: string;
  title: string;
  org?: string;
  context?: string;
  built: string;
  outcome: string;
  featured?: boolean;
  detailsOnRequest?: boolean;
  links?: WorkLink[];
};

export const work: {
  number: string;
  title: string;
  lead: string;
  cards: WorkCard[];
} = {
  number: "03",
  title: "Selected work",
  lead: "Recent builds — agents, evaluation suites, automations, and a live product.",
  cards: [
    {
      tag: "live product",
      title: "SitRoom — real-time geopolitical crisis tracker",
      context:
        "I wanted a single pane of glass for monitoring global crises — so I built one.",
      built:
        "A full-stack app — Next.js/TypeScript front end, FastAPI back end, Claude API for analysis — deployed on Vercel + Render. Built solo, from scratch.",
      outcome: "A live, public product and my primary portfolio piece.",
      featured: true,
      links: [
        // TODO: paste the SitRoom live URL and GitHub repo URL.
        { label: "Live", href: "" },
        { label: "GitHub", href: "" },
      ],
    },
    {
      tag: "agent",
      title: "Institutional knowledge assistant",
      org: "UN humanitarian agency",
      context:
        "Staff needed fast, grounded answers from a large body of internal guidance.",
      built:
        "A retrieval-augmented assistant grounded on curated institutional source files, deployed inside the org's existing Microsoft 365 / Copilot Studio environment.",
      outcome:
        "A working assistant that answers from source material, piloted with the team.",
      detailsOnRequest: true,
    },
    {
      tag: "agent",
      title: "Scenario-planning agent with a real validation suite",
      context:
        "Decision-makers wanted structured scenario analysis they could actually trust.",
      built:
        "A scenario-planning agent plus an 18-case validation suite to test its reasoning before use.",
      outcome:
        "13/13 pass on the validation cases — shipped with evidence, not vibes.",
      detailsOnRequest: true,
    },
    {
      tag: "automation",
      title: "Workflow agents that gave a team its time back",
      context: "Recurring manual reporting and coordination overhead.",
      built:
        "A set of workflow agents — a drafting interface over a task board, an automated weekly-update compiler, and a conversational contact-roster tool.",
      outcome:
        "Routine reporting and lookups automated; far less manual copy-paste.",
      detailsOnRequest: true,
    },
    {
      tag: "evals",
      title: "Evaluation dataset for a professional-services AI task",
      context:
        "An AI training program needed high-quality, domain-grounded evaluation data.",
      built:
        "A world specification and structured evaluation dataset for a consulting-domain task.",
      outcome: "A reusable spec + dataset feeding model evaluation.",
      detailsOnRequest: true,
    },
    {
      tag: "R&D",
      title: "Automated trading & market-analysis stack",
      org: "personal",
      context: "",
      built:
        "A Python MCP server for programmatic trading + a market-analysis tool (DuckDB, market-data APIs, Claude).",
      outcome:
        "End-to-end capability with live financial data and the modern agent/MCP tooling ecosystem.",
      detailsOnRequest: true,
    },
  ],
};

/* ----------------------------------------------------------------------------
 *  04 — About
 * -------------------------------------------------------------------------- */
export const about = {
  number: "04",
  title: "About",
  heading: "Strategy and code, from the same person.",
  paragraphs: [
    "My path isn't linear, and that's the point. I started in chemical engineering (University of Waterloo), moved into technology strategy consulting at Deloitte, ran a commercial e-commerce portfolio at P&G, and am now a Master of Global Affairs candidate (Munk School, University of Toronto) with a semester at the Geneva Graduate Institute. Most recently I've been building AI agents and governance tooling for UN OCHA's technology team.",
    "The through-line: I can sit in a room with executives and ship the code that night. I bring the governance and policy depth to do AI responsibly, and the engineering to make it real. I care about AI that serves people — especially in the public-interest and humanitarian space.",
    "Based between Geneva and remote, working with clients globally.",
  ],
} as const;

/* ----------------------------------------------------------------------------
 *  05 — Engagement (pricing)
 *
 *  TODO: set your real numbers. These are USD "from" defaults — review them
 *  before going live. "Custom quote" tiers have price = null.
 * -------------------------------------------------------------------------- */
export const pricing = {
  number: "05",
  title: "Engagement",
  intro: "Simple, scoped engagements.",
  discoveryBanner: {
    title: "Discovery call — Free (30 min)",
    body: "Tell me the problem; I'll tell you whether and how I can help.",
  },
  currency: "USD",
  tiers: [
    {
      name: "Sprint",
      price: "from $7,500", // TODO: set real price
      description:
        "A scoped 1–3 week build: one agent, one eval suite, or one prototype. Fixed deliverables and price.",
      featured: true,
    },
    {
      name: "Project",
      price: "Custom quote",
      description:
        "Larger or multi-part builds, scoped from a discovery call.",
      featured: false,
    },
    {
      name: "Advisory retainer",
      price: "from $2,500/mo", // TODO: set real price
      description:
        "Ongoing guidance and a set block of hours each month.",
      featured: false,
    },
    {
      name: "Workshop / talk",
      price: "from $2,000", // TODO: set real price
      description: "Half- or full-day, in person or remote.",
      featured: false,
    },
  ],
  closingLine: "Not sure what you need? Start with a free call.",
} as const;

/* ----------------------------------------------------------------------------
 *  06 — Contact
 * -------------------------------------------------------------------------- */
export const contact = {
  number: "06",
  title: "Contact",
  heading: "Let's build something.",
  body: "Tell me about your project, your team, and what “done” looks like.",
  // Subject line used by the mailto: fallback (no personal data in the URL).
  mailSubject: "Project inquiry",
} as const;

/* ----------------------------------------------------------------------------
 *  Footer
 * -------------------------------------------------------------------------- */
export const footer = {
  builtWith: "Built with Next.js · deployed on Vercel",
  // Integrity note: keeps former employers framed as background, not clients.
  confidentiality:
    "Institutions named above reflect professional background, not clients or endorsements. Client work is shown with permission or anonymized.",
} as const;

/* ----------------------------------------------------------------------------
 *  SEO / metadata
 * -------------------------------------------------------------------------- */
export const seo = {
  title:
    "Mohammed Juzer — Independent AI Consultant | Agents · Evals · Governance",
  description:
    "I help mission-driven and public-interest teams move from AI hype to working, validated systems — custom agents, evaluation suites, and responsible-adoption frameworks.",
} as const;
