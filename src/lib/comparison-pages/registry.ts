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
