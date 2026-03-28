import type { IndustryLandingTokens } from "./types";

/** Title-style phrase for headings (e.g. “HVAC Service Call”, “Plumbing Job”). */
export function toIndustryServiceHeadline(phrase: string): string {
  return phrase
    .split(/\s+/u)
    .map((word) => {
      if (/^HVAC$/iu.test(word)) return "HVAC";
      if (/^QR$/iu.test(word)) return "QR";
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" ");
}

export type IndustryLandingMessageValues = IndustryLandingTokens & {
  industryServiceHeadline: string;
};

export function buildIndustryLandingMessageValues(
  tokens: IndustryLandingTokens,
  locale: string,
): IndustryLandingMessageValues {
  const industryServiceHeadline =
    locale === "es"
      ? tokens.industryService.charAt(0).toUpperCase() + tokens.industryService.slice(1)
      : toIndustryServiceHeadline(tokens.industryService);

  return {
    ...tokens,
    industryServiceHeadline,
  };
}
