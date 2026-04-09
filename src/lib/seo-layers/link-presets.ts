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

/** Reference list (umbrella pages use UMBRELLA_PAGE_FOCUS_LINKS instead). */
export const UMBRELLA_CORE_PRODUCT_LINKS: readonly InternalLinkSpec[] = [
  { href: "/google-review-software", labelKey: "googleReviewSoftwareShort" },
  { href: "/review-management-software", labelKey: "reviewManagementSoftwareShort" },
  { href: "/review-request-software", labelKey: "reviewRequestSoftwareShort" },
] as const;

/**
 * Non-priority trade pages → umbrellas + one core product anchor.
 */
export const TRADE_LAYER_INTERNAL_LINKS: readonly InternalLinkSpec[] = [
  ...TRADE_TO_UMBRELLA_LINK_SPECS,
  { href: "/google-review-software", labelKey: "googleReviewSoftwareShort" },
] as const;

export type UmbrellaFocusSlug =
  | "contractor-review-software"
  | "home-service-review-software";

/**
 * Umbrella hubs → featured trades + 2 products + 1 playbook (single block).
 */
export const UMBRELLA_PAGE_FOCUS_LINKS: Record<
  UmbrellaFocusSlug,
  readonly InternalLinkSpec[]
> = {
  "contractor-review-software": [
    { href: "/hvac-review-software", labelKey: "tradeHvac" },
    { href: "/plumber-review-software", labelKey: "tradePlumbing" },
    { href: "/roofing-review-software", labelKey: "tradeRoofing" },
    { href: "/general-contractor-review-software", labelKey: "tradeGeneralContractor" },
    { href: "/google-review-software", labelKey: "googleReviewSoftwareShort" },
    { href: "/review-request-software", labelKey: "reviewRequestSoftwareShort" },
    { href: getUseCasePagePath("jobsite-review-system"), labelKey: "jobsiteReviewSystem" },
  ],
  "home-service-review-software": [
    { href: "/hvac-review-software", labelKey: "tradeHvac" },
    { href: "/plumber-review-software", labelKey: "tradePlumbing" },
    { href: "/electrical-review-software", labelKey: "tradeElectrical" },
    { href: "/cleaning-service-review-software", labelKey: "tradeCleaning" },
    { href: "/google-review-software", labelKey: "googleReviewSoftwareShort" },
    { href: "/review-management-software", labelKey: "reviewManagementSoftwareShort" },
    { href: getUseCasePagePath("get-more-google-reviews"), labelKey: "getMoreGoogleReviews" },
  ],
};

export const PRIORITY_TRADE_SLUGS = [
  "hvac-review-software",
  "plumber-review-software",
  "roofing-review-software",
  "landscaping-review-software",
  "cleaning-service-review-software",
  "electrical-review-software",
  "garage-door-review-software",
  "pest-control-review-software",
  "tree-service-review-software",
  "pressure-washing-review-software",
] as const;

export type PriorityTradeSlug = (typeof PRIORITY_TRADE_SLUGS)[number];

export function isPriorityTradeSlug(slug: string): slug is PriorityTradeSlug {
  return (PRIORITY_TRADE_SLUGS as readonly string[]).includes(slug);
}

/** Priority trades: umbrellas + sibling trades + playbook + product (compact). */
export const PRIORITY_TRADE_CONTEXTUAL_LINKS: Record<
  PriorityTradeSlug,
  readonly InternalLinkSpec[]
> = {
  "hvac-review-software": [
    ...TRADE_TO_UMBRELLA_LINK_SPECS,
    { href: "/plumber-review-software", labelKey: "tradePlumbing" },
    { href: "/electrical-review-software", labelKey: "tradeElectrical" },
    { href: "/roofing-review-software", labelKey: "tradeRoofing" },
    { href: "/landscaping-review-software", labelKey: "tradeLandscaping" },
    { href: getUseCasePagePath("qr-code-review-system"), labelKey: "qrCodeReviewSystem" },
    { href: "/google-review-software", labelKey: "googleReviewSoftwareShort" },
  ],
  "plumber-review-software": [
    ...TRADE_TO_UMBRELLA_LINK_SPECS,
    { href: "/hvac-review-software", labelKey: "tradeHvac" },
    { href: "/electrical-review-software", labelKey: "tradeElectrical" },
    { href: "/roofing-review-software", labelKey: "tradeRoofing" },
    { href: "/garage-door-review-software", labelKey: "tradeGarageDoor" },
    { href: getUseCasePagePath("jobsite-review-system"), labelKey: "jobsiteReviewSystem" },
    { href: "/review-request-software", labelKey: "reviewRequestSoftwareShort" },
  ],
  "roofing-review-software": [
    ...TRADE_TO_UMBRELLA_LINK_SPECS,
    { href: "/hvac-review-software", labelKey: "tradeHvac" },
    { href: "/plumber-review-software", labelKey: "tradePlumbing" },
    { href: "/general-contractor-review-software", labelKey: "tradeGeneralContractor" },
    { href: "/landscaping-review-software", labelKey: "tradeLandscaping" },
    { href: getUseCasePagePath("get-more-google-reviews"), labelKey: "getMoreGoogleReviews" },
    { href: "/google-review-software", labelKey: "googleReviewSoftwareShort" },
  ],
  "landscaping-review-software": [
    ...TRADE_TO_UMBRELLA_LINK_SPECS,
    { href: "/hvac-review-software", labelKey: "tradeHvac" },
    { href: "/tree-service-review-software", labelKey: "tradeTreeService" },
    { href: "/pressure-washing-review-software", labelKey: "tradePressureWashing" },
    { href: "/pool-service-review-software", labelKey: "tradePoolService" },
    { href: getUseCasePagePath("review-cards-for-business"), labelKey: "reviewCardsForBusiness" },
    { href: "/google-review-software", labelKey: "googleReviewSoftwareShort" },
  ],
  "cleaning-service-review-software": [
    ...TRADE_TO_UMBRELLA_LINK_SPECS,
    { href: "/pressure-washing-review-software", labelKey: "tradePressureWashing" },
    { href: "/carpet-cleaning-review-software", labelKey: "tradeCarpetCleaning" },
    { href: "/window-cleaning-review-software", labelKey: "tradeWindowCleaning" },
    { href: "/pest-control-review-software", labelKey: "tradePestControl" },
    { href: getUseCasePagePath("get-more-google-reviews"), labelKey: "getMoreGoogleReviews" },
    { href: "/review-request-software", labelKey: "reviewRequestSoftwareShort" },
  ],
  "electrical-review-software": [
    ...TRADE_TO_UMBRELLA_LINK_SPECS,
    { href: "/hvac-review-software", labelKey: "tradeHvac" },
    { href: "/plumber-review-software", labelKey: "tradePlumbing" },
    { href: "/garage-door-review-software", labelKey: "tradeGarageDoor" },
    { href: "/landscaping-review-software", labelKey: "tradeLandscaping" },
    { href: getUseCasePagePath("qr-code-review-system"), labelKey: "qrCodeReviewSystem" },
    { href: "/google-review-software", labelKey: "googleReviewSoftwareShort" },
  ],
  "garage-door-review-software": [
    ...TRADE_TO_UMBRELLA_LINK_SPECS,
    { href: "/electrical-review-software", labelKey: "tradeElectrical" },
    { href: "/hvac-review-software", labelKey: "tradeHvac" },
    { href: "/pest-control-review-software", labelKey: "tradePestControl" },
    { href: "/plumber-review-software", labelKey: "tradePlumbing" },
    { href: getUseCasePagePath("automated-review-requests"), labelKey: "automatedReviewRequests" },
    { href: "/google-review-software", labelKey: "googleReviewSoftwareShort" },
  ],
  "pest-control-review-software": [
    ...TRADE_TO_UMBRELLA_LINK_SPECS,
    { href: "/cleaning-service-review-software", labelKey: "tradeCleaning" },
    { href: "/hvac-review-software", labelKey: "tradeHvac" },
    { href: "/tree-service-review-software", labelKey: "tradeTreeService" },
    { href: "/garage-door-review-software", labelKey: "tradeGarageDoor" },
    { href: getUseCasePagePath("review-funnel"), labelKey: "reviewFunnel" },
    { href: "/review-request-software", labelKey: "reviewRequestSoftwareShort" },
  ],
  "tree-service-review-software": [
    ...TRADE_TO_UMBRELLA_LINK_SPECS,
    { href: "/landscaping-review-software", labelKey: "tradeLandscaping" },
    { href: "/roofing-review-software", labelKey: "tradeRoofing" },
    { href: "/pressure-washing-review-software", labelKey: "tradePressureWashing" },
    { href: "/pest-control-review-software", labelKey: "tradePestControl" },
    { href: getUseCasePagePath("jobsite-review-system"), labelKey: "jobsiteReviewSystem" },
    { href: "/google-review-software", labelKey: "googleReviewSoftwareShort" },
  ],
  "pressure-washing-review-software": [
    ...TRADE_TO_UMBRELLA_LINK_SPECS,
    { href: "/cleaning-service-review-software", labelKey: "tradeCleaning" },
    { href: "/window-cleaning-review-software", labelKey: "tradeWindowCleaning" },
    { href: "/landscaping-review-software", labelKey: "tradeLandscaping" },
    { href: "/painting-contractor-review-software", labelKey: "tradePaintingContractor" },
    { href: getUseCasePagePath("qr-code-review-system"), labelKey: "qrCodeReviewSystem" },
    { href: "/google-review-software", labelKey: "googleReviewSoftwareShort" },
  ],
};

/**
 * Product pages → 2 umbrellas + 2 contextual solutions + 1 comparison.
 */
export const PRODUCT_PAGE_INTERNAL_LINKS: Record<
  ProductPageSlug,
  readonly InternalLinkSpec[]
> = {
  "review-management-software": [
    ...UMBRELLA_INDUSTRY_LINK_SPECS,
    { href: getUseCasePagePath("automated-review-requests"), labelKey: "automatedReviewRequests" },
    { href: getUseCasePagePath("review-funnel"), labelKey: "reviewFunnel" },
    { href: "/compare/reviewaware-vs-birdeye", labelKey: "compareVsBirdeye" },
  ],
  "google-review-software": [
    ...UMBRELLA_INDUSTRY_LINK_SPECS,
    { href: getUseCasePagePath("get-more-google-reviews"), labelKey: "getMoreGoogleReviews" },
    { href: getUseCasePagePath("qr-code-review-system"), labelKey: "qrCodeReviewSystem" },
    { href: "/compare/reviewaware-vs-podium", labelKey: "compareVsPodium" },
  ],
  "customer-review-software": [
    ...UMBRELLA_INDUSTRY_LINK_SPECS,
    { href: getUseCasePagePath("jobsite-review-system"), labelKey: "jobsiteReviewSystem" },
    { href: getUseCasePagePath("review-cards-for-business"), labelKey: "reviewCardsForBusiness" },
    { href: "/compare/reviewaware-vs-nicejob", labelKey: "compareVsNicejob" },
  ],
  "reputation-management-software": [
    ...UMBRELLA_INDUSTRY_LINK_SPECS,
    { href: getUseCasePagePath("get-more-google-reviews"), labelKey: "getMoreGoogleReviews" },
    { href: getUseCasePagePath("automated-review-requests"), labelKey: "automatedReviewRequests" },
    { href: "/compare/reviewaware-vs-birdeye", labelKey: "compareVsBirdeye" },
  ],
  "review-request-software": [
    ...UMBRELLA_INDUSTRY_LINK_SPECS,
    { href: getUseCasePagePath("automated-review-requests"), labelKey: "automatedReviewRequests" },
    { href: getUseCasePagePath("review-funnel"), labelKey: "reviewFunnel" },
    { href: "/compare/reviewaware-vs-broadly", labelKey: "compareVsBroadly" },
  ],
};

/** Use-case pages → core product + industry/trade (contextual). */
export const USE_CASE_RELATED_LINKS: Record<UseCasePageSlug, readonly InternalLinkSpec[]> = {
  "get-more-google-reviews": [
    { href: "/google-review-software", labelKey: "googleReviewSoftwareShort" },
    { href: "/review-management-software", labelKey: "reviewManagementSoftwareShort" },
    { href: "/contractor-review-software", labelKey: "contractorUmbrella" },
    { href: "/home-service-review-software", labelKey: "homeServiceUmbrella" },
    { href: "/hvac-review-software", labelKey: "tradeHvac" },
    { href: "/plumber-review-software", labelKey: "tradePlumbing" },
    { href: "/roofing-review-software", labelKey: "tradeRoofing" },
  ],
  "how-to-get-more-google-reviews": [
    { href: getUseCasePagePath("get-more-google-reviews"), labelKey: "getMoreGoogleReviews" },
    { href: "/google-review-software", labelKey: "googleReviewSoftwareShort" },
    { href: "/review-request-software", labelKey: "reviewRequestSoftwareShort" },
    { href: "/contractor-review-software", labelKey: "contractorUmbrella" },
    { href: "/home-service-review-software", labelKey: "homeServiceUmbrella" },
    { href: "/hvac-review-software", labelKey: "tradeHvac" },
    { href: "/plumber-review-software", labelKey: "tradePlumbing" },
    { href: "/electrical-review-software", labelKey: "tradeElectrical" },
  ],
  "qr-code-review-system": [
    { href: "/google-review-software", labelKey: "googleReviewSoftwareShort" },
    { href: "/review-request-software", labelKey: "reviewRequestSoftwareShort" },
    { href: "/contractor-review-software", labelKey: "contractorUmbrella" },
    { href: "/home-service-review-software", labelKey: "homeServiceUmbrella" },
    { href: "/hvac-review-software", labelKey: "tradeHvac" },
    { href: "/plumber-review-software", labelKey: "tradePlumbing" },
    { href: "/roofing-review-software", labelKey: "tradeRoofing" },
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
    { href: "/contractor-review-software", labelKey: "contractorUmbrella" },
    { href: "/home-service-review-software", labelKey: "homeServiceUmbrella" },
    { href: "/hvac-review-software", labelKey: "tradeHvac" },
    { href: "/cleaning-service-review-software", labelKey: "tradeCleaning" },
    { href: getUseCasePagePath("review-funnel"), labelKey: "reviewFunnel" },
  ],
  "review-growth-kit": [
    { href: "/review-management-software", labelKey: "reviewManagementSoftwareShort" },
    { href: "/google-review-software", labelKey: "googleReviewSoftwareShort" },
    { href: getUseCasePagePath("review-cards-for-business"), labelKey: "reviewCardsForBusiness" },
    { href: "/contractor-review-software", labelKey: "contractorUmbrella" },
    { href: "/home-service-review-software", labelKey: "homeServiceUmbrella" },
    { href: "/hvac-review-software", labelKey: "tradeHvac" },
    { href: "/roofing-review-software", labelKey: "tradeRoofing" },
  ],
  "review-funnel": [
    { href: "/review-management-software", labelKey: "reviewManagementSoftwareShort" },
    { href: getUseCasePagePath("automated-review-requests"), labelKey: "automatedReviewRequests" },
    { href: "/google-review-software", labelKey: "googleReviewSoftwareShort" },
    { href: "/contractor-review-software", labelKey: "contractorUmbrella" },
  ],
};

/** Comparison pages → commercially focused cluster (both umbrellas + core asks). */
const COMPARISON_COMMERCIAL_RELATED: readonly InternalLinkSpec[] = [
  { href: "/google-review-software", labelKey: "googleReviewSoftwareShort" },
  { href: "/review-request-software", labelKey: "reviewRequestSoftwareShort" },
  { href: "/contractor-review-software", labelKey: "contractorUmbrella" },
  { href: "/home-service-review-software", labelKey: "homeServiceUmbrella" },
] as const;

export const COMPARISON_PAGE_RELATED_LINKS: Record<
  ComparisonPageSlug,
  readonly InternalLinkSpec[]
> = {
  "reviewaware-vs-podium": COMPARISON_COMMERCIAL_RELATED,
  "reviewaware-vs-nicejob": COMPARISON_COMMERCIAL_RELATED,
  "reviewaware-vs-birdeye": COMPARISON_COMMERCIAL_RELATED,
  "reviewaware-vs-broadly": COMPARISON_COMMERCIAL_RELATED,
};

