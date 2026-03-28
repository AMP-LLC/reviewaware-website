/**
 * Dynamic copy tokens for industry landing pages.
 * [INDUSTRY] → industry
 * [INDUSTRY SERVICE] → industryService (hero, metadata, SEO — mid-sentence phrasing)
 * [INDUSTRY JOB] → industryJob (workflow step bodies — “completes the …”)
 */
export type IndustryLandingTokens = {
  industry: string;
  industryService: string;
  industryJob: string;
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
};
