/**
 * Dynamic copy tokens for industry landing pages.
 * [INDUSTRY] → industry
 * [INDUSTRY SERVICE] → industryService (hero, metadata, SEO — mid-sentence phrasing)
 * [INDUSTRY JOB] → industryJob (workflow step bodies — “completes the …”)
 *
 * Optional fields (job, service, jobs, services, industryPlural) extend message interpolation
 * for umbrella pages; when omitted, format.ts derives sensible defaults from industry*.
 */
export type IndustryLandingTokens = {
  industry: string;
  industryService: string;
  industryJob: string;
  industryPlural?: string;
  job?: string;
  service?: string;
  jobs?: string;
  services?: string;
};

export type IndustryLandingCopyOverrides = {
  metadata?: { title: string; description: string };
  hero?: {
    headlineLine1: string;
    headlineLine2?: string;
    subtitleLine1: string;
    subtitleLine2?: string;
    ctaPrimary: string;
    ctaSecondary: string;
    credibilityLine?: string;
  };
};

export type IndustryLandingDefinition = {
  slug: string;
  tokens: {
    en: IndustryLandingTokens;
    es: IndustryLandingTokens;
  };
  useCases: {
    en: [string, string, string, string];
    es: [string, string, string, string];
  };
  /** Per-locale hero + metadata overrides (umbrella pages, custom SEO). */
  copyOverrides?: {
    en?: IndustryLandingCopyOverrides;
    es?: IndustryLandingCopyOverrides;
  };
};
