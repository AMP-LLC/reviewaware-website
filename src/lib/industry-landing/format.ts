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
  industryPlural: string;
  job: string;
  service: string;
  jobs: string;
  services: string;
};

export function buildIndustryLandingMessageValues(
  tokens: IndustryLandingTokens,
  locale: string,
): IndustryLandingMessageValues {
  const industryPlural =
    tokens.industryPlural ?? `${tokens.industry}s`;
  const job = tokens.job ?? tokens.industryJob;
  const service = tokens.service ?? tokens.industryService;
  const jobs = tokens.jobs ?? `${tokens.industry} jobs`;
  const services = tokens.services ?? `${tokens.industry} services`;

  const industryServiceHeadline =
    locale === "es"
      ? tokens.industryService.charAt(0).toUpperCase() + tokens.industryService.slice(1)
      : toIndustryServiceHeadline(tokens.industryService);

  return {
    ...tokens,
    industryPlural,
    job,
    service,
    jobs,
    services,
    industryServiceHeadline,
  };
}
