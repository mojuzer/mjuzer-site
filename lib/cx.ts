/** Tiny className joiner — filters out falsy values so conditional classes
 *  stay readable. (A 4-line stand-in for clsx; no dependency needed.) */
export function cx(
  ...parts: Array<string | false | null | undefined>
): string {
  return parts.filter(Boolean).join(" ");
}
