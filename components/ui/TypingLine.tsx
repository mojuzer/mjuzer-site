"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { cx } from "@/lib/cx";

/* Timing knobs for the terminal typing effect. */
const TYPE_SPEED = 52; // ms per character typed
const DELETE_SPEED = 26; // ms per character deleted
const HOLD_FULL = 1500; // ms to rest on a complete phrase
const HOLD_EMPTY = 220; // ms between phrases
const REDUCED_CYCLE = 3200; // ms per phrase when motion is reduced

type Phase = "typing" | "holding" | "deleting";

/**
 * Shell-prompt typing line: `>_ I design RAG assistants` cycling through a
 * set of phrases. Honors prefers-reduced-motion (swaps whole phrases on a
 * slow timer instead of typing). A visually-hidden line lists every phrase
 * for screen readers, since the animated text would otherwise be noise.
 */
export function TypingLine({
  phrases,
  className,
  prompt = ">_",
}: {
  phrases: readonly string[];
  className?: string;
  prompt?: string;
}) {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  // Start with the first phrase fully rendered so SSR/no-JS shows real
  // content and there's no empty flash before hydration.
  const [text, setText] = useState(phrases[0] ?? "");
  const [phase, setPhase] = useState<Phase>("holding");

  // Reduced motion: cycle whole phrases, no per-character animation.
  useEffect(() => {
    if (!reduce) return;
    setText(phrases[index % phrases.length] ?? "");
    const t = setTimeout(
      () => setIndex((i) => (i + 1) % phrases.length),
      REDUCED_CYCLE
    );
    return () => clearTimeout(t);
  }, [reduce, index, phrases]);

  // Full typing effect (type → hold → delete → next).
  useEffect(() => {
    if (reduce) return;
    const current = phrases[index % phrases.length] ?? "";
    let t: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      t =
        text.length < current.length
          ? setTimeout(
              () => setText(current.slice(0, text.length + 1)),
              TYPE_SPEED
            )
          : setTimeout(() => setPhase("holding"), HOLD_FULL);
    } else if (phase === "holding") {
      t = setTimeout(() => setPhase("deleting"), HOLD_EMPTY);
    } else {
      t =
        text.length > 0
          ? setTimeout(
              () => setText(current.slice(0, text.length - 1)),
              DELETE_SPEED
            )
          : setTimeout(() => {
              setIndex((i) => (i + 1) % phrases.length);
              setPhase("typing");
            }, HOLD_EMPTY);
    }
    return () => clearTimeout(t);
  }, [reduce, text, phase, index, phrases]);

  return (
    <p className={cx("font-mono text-accent", className)} aria-live="off">
      <span className="select-none text-accent/70">{prompt} </span>
      <span>{text}</span>
      <span className="cursor-bar animate-blink" aria-hidden="true" />
      <span className="sr-only">{phrases.join(". ")}.</span>
    </p>
  );
}
