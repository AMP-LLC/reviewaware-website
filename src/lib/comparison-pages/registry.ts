/**
 * Comparison / vs-competitor marketing pages.
 * Copy: `comparisonPages.{messageKey}` in messages (seo-layers merge).
 * Route: `/[locale]/compare/[slug]`
 */

export type ComparisonFeatureStatus = "yes" | "no" | "partial" | "limited";

export type ComparisonFeatureRow = {
  /** Stable id; label from messages `comparisonPages.{messageKey}.rows.{rowId}.label` */
  rowId: string;
  reviewAware: ComparisonFeatureStatus;
  competitor: ComparisonFeatureStatus;
};

export type ComparisonPageDefinition = {
  slug: string;
  /** Shown in table header and hero where relevant */
  competitorName: string;
  primaryKeyword: string;
  /** Key under `comparisonPages` in messages JSON */
  messageKey: string;
  featureRows: readonly ComparisonFeatureRow[];
};

export const COMPARISON_PAGE_REGISTRY = {
  "reviewaware-vs-podium": {
    slug: "reviewaware-vs-podium",
    competitorName: "Podium",
    primaryKeyword: "ReviewAware vs Podium",
    messageKey: "reviewawareVsPodium",
    featureRows: [
      { rowId: "fieldServiceFocus", reviewAware: "yes", competitor: "partial" },
      { rowId: "jobCompletionTrigger", reviewAware: "yes", competitor: "partial" },
      { rowId: "qrJobsiteCards", reviewAware: "yes", competitor: "limited" },
      { rowId: "automatedEmailSms", reviewAware: "yes", competitor: "yes" },
      { rowId: "transparentLitePricing", reviewAware: "yes", competitor: "partial" },
      { rowId: "fastSetup", reviewAware: "yes", competitor: "partial" },
    ],
  },
  "reviewaware-vs-nicejob": {
    slug: "reviewaware-vs-nicejob",
    competitorName: "NiceJob",
    primaryKeyword: "ReviewAware vs NiceJob",
    messageKey: "reviewawareVsNicejob",
    featureRows: [
      { rowId: "qrReviewCardsPrint", reviewAware: "yes", competitor: "partial" },
      { rowId: "printReadyReviewAssets", reviewAware: "yes", competitor: "partial" },
      { rowId: "jobsiteHandoffCapture", reviewAware: "yes", competitor: "partial" },
      { rowId: "contractorServiceWorkflow", reviewAware: "yes", competitor: "yes" },
      { rowId: "litePublicPricing", reviewAware: "yes", competitor: "partial" },
      { rowId: "minimalToolchainReviews", reviewAware: "yes", competitor: "partial" },
    ],
  },
  "reviewaware-vs-birdeye": {
    slug: "reviewaware-vs-birdeye",
    competitorName: "Birdeye",
    primaryKeyword: "ReviewAware vs Birdeye",
    messageKey: "reviewawareVsBirdeye",
    featureRows: [
      { rowId: "reviewsFirstNotFullSuite", reviewAware: "yes", competitor: "no" },
      { rowId: "selfServeSmallTeamStart", reviewAware: "yes", competitor: "limited" },
      { rowId: "avoidsEnterpriseRollout", reviewAware: "yes", competitor: "partial" },
      { rowId: "fieldQrJobCloseTiming", reviewAware: "yes", competitor: "partial" },
      { rowId: "googleGrowthWithoutExtras", reviewAware: "yes", competitor: "partial" },
      { rowId: "predictableStarterCost", reviewAware: "yes", competitor: "partial" },
    ],
  },
  "reviewaware-vs-broadly": {
    slug: "reviewaware-vs-broadly",
    competitorName: "Broadly",
    primaryKeyword: "ReviewAware vs Broadly",
    messageKey: "reviewawareVsBroadly",
    featureRows: [
      { rowId: "jobCompletionWorkflow", reviewAware: "yes", competitor: "partial" },
      { rowId: "repeatableAfterJobClose", reviewAware: "yes", competitor: "partial" },
      { rowId: "qrTrucksAndJobsites", reviewAware: "yes", competitor: "limited" },
      { rowId: "contractorHomeServiceDepth", reviewAware: "yes", competitor: "partial" },
      { rowId: "automatedRequestChannels", reviewAware: "yes", competitor: "yes" },
      { rowId: "transparentLiteEntry", reviewAware: "yes", competitor: "partial" },
    ],
  },
} as const satisfies Record<string, ComparisonPageDefinition>;

export type ComparisonPageSlug = keyof typeof COMPARISON_PAGE_REGISTRY;

export const COMPARISON_PAGE_SLUGS = Object.keys(
  COMPARISON_PAGE_REGISTRY,
) as ComparisonPageSlug[];

export function isComparisonPageSlug(slug: string): slug is ComparisonPageSlug {
  return slug in COMPARISON_PAGE_REGISTRY;
}

export function getComparisonPageDefinition(
  slug: string,
): ComparisonPageDefinition | undefined {
  return COMPARISON_PAGE_REGISTRY[slug as ComparisonPageSlug];
}
