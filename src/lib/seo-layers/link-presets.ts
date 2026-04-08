/**
 * Contextual internal links (labels via `internalLinks` messages).
 * @see docs/seo-content-architecture.md
 */

import type { ComparisonPageSlug } from "@/lib/comparison-pages/registry";
import type { ProductPageSlug } from "@/lib/product-pages/registry";
import { getUseCasePagePath, type UseCasePageSlug } from "@/lib/use-case-pages/registry";

export type InternalLinkSpec = {
  readonly href: string;
  readonly labelKey: string;
};

/** Umbrella industry hub links (trade “up” navigation + shared building block). */
export const UMBRELLA_INDUSTRY_LINK_SPECS: readonly InternalLinkSpec[] = [
  { href: "/contractor-review-software", labelKey: "contractorUmbrella" },
  { href: "/home-service-review-software", labelKey: "homeServiceUmbrella" },
] as const;

/** Trade pages link up to umbrella hubs. */
export const TRADE_TO_UMBRELLA_LINK_SPECS = UMBRELLA_INDUSTRY_LINK_SPECS;

/** Umbrella industry pages → sparse links down to core product category pages (Layer 1). */
export const UMBRELLA_CORE_PRODUCT_LINKS: readonly InternalLinkSpec[] = [
  { href: "/google-review-software", labelKey: "googleReviewSoftwareShort" },
  { href: "/review-management-software", labelKey: "reviewManagementSoftwareShort" },
  { href: "/review-request-software", labelKey: "reviewRequestSoftwareShort" },
] as const;

/**
 * Trade pages → umbrellas + one core product anchor (Layer 1), kept to 3 links.
 */
export const TRADE_LAYER_INTERNAL_LINKS: readonly InternalLinkSpec[] = [
  ...TRADE_TO_UMBRELLA_LINK_SPECS,
  { href: "/google-review-software", labelKey: "googleReviewSoftwareShort" },
] as const;

/**
 * Product pages → both umbrella industry hubs + one contextual solution (sparse).
 */
export const PRODUCT_PAGE_INTERNAL_LINKS: Record<
  ProductPageSlug,
  readonly InternalLinkSpec[]
> = {
  "review-management-software": [
    ...UMBRELLA_INDUSTRY_LINK_SPECS,
    { href: getUseCasePagePath("automated-review-requests"), labelKey: "automatedReviewRequests" },
  ],
  "google-review-software": [
    ...UMBRELLA_INDUSTRY_LINK_SPECS,
    { href: getUseCasePagePath("get-more-google-reviews"), labelKey: "getMoreGoogleReviews" },
  ],
  "customer-review-software": [
    ...UMBRELLA_INDUSTRY_LINK_SPECS,
    { href: getUseCasePagePath("jobsite-review-system"), labelKey: "jobsiteReviewSystem" },
  ],
  "reputation-management-software": [
    ...UMBRELLA_INDUSTRY_LINK_SPECS,
    { href: getUseCasePagePath("get-more-google-reviews"), labelKey: "getMoreGoogleReviews" },
  ],
  "review-request-software": [
    ...UMBRELLA_INDUSTRY_LINK_SPECS,
    { href: getUseCasePagePath("review-funnel"), labelKey: "reviewFunnel" },
  ],
};

/** Use-case pages → core product + industry/trade (contextual, sparse). */
export const USE_CASE_RELATED_LINKS: Record<UseCasePageSlug, readonly InternalLinkSpec[]> = {
  "get-more-google-reviews": [
    { href: "/google-review-software", labelKey: "googleReviewSoftwareShort" },
    { href: "/review-request-software", labelKey: "reviewRequestSoftwareShort" },
    { href: "/contractor-review-software", labelKey: "contractorUmbrella" },
    { href: "/home-service-review-software", labelKey: "homeServiceUmbrella" },
  ],
  "how-to-get-more-google-reviews": [
    { href: getUseCasePagePath("get-more-google-reviews"), labelKey: "getMoreGoogleReviews" },
    { href: "/google-review-software", labelKey: "googleReviewSoftwareShort" },
    { href: "/review-request-software", labelKey: "reviewRequestSoftwareShort" },
    { href: "/contractor-review-software", labelKey: "contractorUmbrella" },
    { href: "/hvac-review-software", labelKey: "tradeHvac" },
  ],
  "qr-code-review-system": [
    { href: "/google-review-software", labelKey: "googleReviewSoftwareShort" },
    { href: getUseCasePagePath("review-cards-for-business"), labelKey: "reviewCardsForBusiness" },
    { href: getUseCasePagePath("jobsite-review-system"), labelKey: "jobsiteReviewSystem" },
    { href: "/hvac-review-software", labelKey: "tradeHvac" },
  ],
  "review-cards-for-business": [
    { href: getUseCasePagePath("qr-code-review-system"), labelKey: "qrCodeReviewSystem" },
    { href: getUseCasePagePath("jobsite-review-system"), labelKey: "jobsiteReviewSystem" },
    { href: "/contractor-review-software", labelKey: "contractorUmbrella" },
    { href: "/roofing-review-software", labelKey: "tradeRoofing" },
  ],
  "jobsite-review-system": [
    { href: "/contractor-review-software", labelKey: "contractorUmbrella" },
    { href: "/home-service-review-software", labelKey: "homeServiceUmbrella" },
    { href: getUseCasePagePath("qr-code-review-system"), labelKey: "qrCodeReviewSystem" },
    { href: "/review-management-software", labelKey: "reviewManagementSoftwareShort" },
  ],
  "automated-review-requests": [
    { href: "/review-request-software", labelKey: "reviewRequestSoftwareShort" },
    { href: "/review-management-software", labelKey: "reviewManagementSoftwareShort" },
    { href: "/home-service-review-software", labelKey: "homeServiceUmbrella" },
    { href: getUseCasePagePath("review-funnel"), labelKey: "reviewFunnel" },
  ],
  "review-growth-kit": [
    { href: "/review-management-software", labelKey: "reviewManagementSoftwareShort" },
    { href: getUseCasePagePath("review-cards-for-business"), labelKey: "reviewCardsForBusiness" },
    { href: "/contractor-review-software", labelKey: "contractorUmbrella" },
    { href: "/hvac-review-software", labelKey: "tradeHvac" },
  ],
  "review-funnel": [
    { href: "/review-management-software", labelKey: "reviewManagementSoftwareShort" },
    { href: getUseCasePagePath("automated-review-requests"), labelKey: "automatedReviewRequests" },
    { href: "/google-review-software", labelKey: "googleReviewSoftwareShort" },
    { href: "/contractor-review-software", labelKey: "contractorUmbrella" },
  ],
};

/** Comparison pages (Layer 4) → core product + umbrella + playbook use-case. */
export const COMPARISON_PAGE_RELATED_LINKS: Record<
  ComparisonPageSlug,
  readonly InternalLinkSpec[]
> = {
  "reviewaware-vs-podium": [
    { href: "/google-review-software", labelKey: "googleReviewSoftwareShort" },
    { href: "/contractor-review-software", labelKey: "contractorUmbrella" },
    { href: getUseCasePagePath("get-more-google-reviews"), labelKey: "getMoreGoogleReviews" },
  ],
};

