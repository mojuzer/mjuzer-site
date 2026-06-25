import type { Config } from "tailwindcss";

/**
 * Design tokens (see §3 of the brief) live as CSS variables in app/globals.css.
 * Tailwind references them here so the variables stay the single source of truth.
 * Change a color in globals.css :root and it updates everywhere.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        "bg-grad-a": "var(--bg-grad-a)",
        "bg-grad-b": "var(--bg-grad-b)",
        surface: "var(--surface)",
        ink: "var(--ink)",
        "ink-dim": "var(--ink-dim)",
        muted: "var(--muted)",
        hairline: "var(--hairline)",
        // accent uses rgb channels (--accent-rgb mirrors --accent) so opacity
        // modifiers work: text-accent, bg-accent/10, border-accent/30, etc.
        accent: "rgb(var(--accent-rgb) / <alpha-value>)",
        "accent-hi": "var(--accent-hi)",
        "accent-lo": "var(--accent-lo)",
      },
      fontFamily: {
        // Display / headings
        display: ["var(--font-space-grotesk)", "ui-sans-serif", "system-ui", "sans-serif"],
        // Body
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        // Mono — labels, code, section numbers, terminal motifs
        mono: ["var(--font-jetbrains-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      maxWidth: {
        // Editorial content column (~1100px per brief)
        content: "1100px",
      },
      letterSpacing: {
        label: "0.18em",
      },
      keyframes: {
        // Blinking terminal cursor used by the logo + typing line
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
      },
      animation: {
        blink: "blink 1.05s steps(1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
