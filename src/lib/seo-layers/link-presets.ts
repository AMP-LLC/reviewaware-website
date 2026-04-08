/**
 * Contextual internal links (labels via `internalLinks` messages).
 * @see docs/seo-content-architecture.md
 */

import type { ProductPageSlug } from "@/lib/product-pages/registry";
import { useCasePagePath, type UseCasePageSlug } from "@/lib/use-case-pages/registry";

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

/**
 * Product pages → both umbrella industry hubs + one contextual solution (sparse).
 */
export const PRODUCT_PAGE_INTERNAL_LINKS: Record<
  ProductPageSlug,
  readonly InternalLinkSpec[]
> = {
  "review-management-software": [
    ...UMBRELLA_INDUSTRY_LINK_SPECS,
    { href: useCasePagePath("automated-review-requests"), labelKey: "automatedReviewRequests" },
  ],
  "google-review-software": [
    ...UMBRELLA_INDUSTRY_LINK_SPECS,
    { href: useCasePagePath("get-more-google-reviews"), labelKey: "getMoreGoogleReviews" },
  ],
  "customer-review-software": [
    ...UMBRELLA_INDUSTRY_LINK_SPECS,
    { href: useCasePagePath("jobsite-review-system"), labelKey: "jobsiteReviewSystem" },
  ],
  "reputation-management-software": [
    ...UMBRELLA_INDUSTRY_LINK_SPECS,
    { href: useCasePagePath("get-more-google-reviews"), labelKey: "getMoreGoogleReviews" },
  ],
  "review-request-software": [
    ...UMBRELLA_INDUSTRY_LINK_SPECS,
    { href: useCasePagePath("review-funnel"), labelKey: "reviewFunnel" },
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
    { href: useCasePagePath("get-more-google-reviews"), labelKey: "getMoreGoogleReviews" },
    { href: "/google-review-software", labelKey: "googleReviewSoftwareShort" },
    { href: "/review-request-software", labelKey: "reviewRequestSoftwareShort" },
    { href: "/contractor-review-software", labelKey: "contractorUmbrella" },
    { href: "/hvac-review-software", labelKey: "tradeHvac" },
  ],
  "qr-code-review-system": [
    { href: "/google-review-software", labelKey: "googleReviewSoftwareShort" },
    { href: useCasePagePath("review-cards-for-business"), labelKey: "reviewCardsForBusiness" },
    { href: useCasePagePath("jobsite-review-system"), labelKey: "jobsiteReviewSystem" },
    { href: "/hvac-review-software", labelKey: "tradeHvac" },
  ],
  "review-cards-for-business": [
    { href: useCasePagePath("qr-code-review-system"), labelKey: "qrCodeReviewSystem" },
    { href: useCasePagePath("jobsite-review-system"), labelKey: "jobsiteReviewSystem" },
    { href: "/contractor-review-software", labelKey: "contractorUmbrella" },
    { href: "/roofing-review-software", labelKey: "tradeRoofing" },
  ],
  "jobsite-review-system": [
    { href: "/contractor-review-software", labelKey: "contractorUmbrella" },
    { href: "/home-service-review-software", labelKey: "homeServiceUmbrella" },
    { href: useCasePagePath("qr-code-review-system"), labelKey: "qrCodeReviewSystem" },
    { href: "/review-management-software", labelKey: "reviewManagementSoftwareShort" },
  ],
  "automated-review-requests": [
    { href: "/review-request-software", labelKey: "reviewRequestSoftwareShort" },
    { href: "/review-management-software", labelKey: "reviewManagementSoftwareShort" },
    { href: "/home-service-review-software", labelKey: "homeServiceUmbrella" },
    { href: useCasePagePath("review-funnel"), labelKey: "reviewFunnel" },
  ],
  "review-growth-kit": [
    { href: "/review-management-software", labelKey: "reviewManagementSoftwareShort" },
    { href: useCasePagePath("review-cards-for-business"), labelKey: "reviewCardsForBusiness" },
    { href: "/contractor-review-software", labelKey: "contractorUmbrella" },
    { href: "/hvac-review-software", labelKey: "tradeHvac" },
  ],
  "review-funnel": [
    { href: "/review-management-software", labelKey: "reviewManagementSoftwareShort" },
    { href: useCasePagePath("automated-review-requests"), labelKey: "automatedReviewRequests" },
    { href: "/google-review-software", labelKey: "googleReviewSoftwareShort" },
    { href: "/contractor-review-software", labelKey: "contractorUmbrella" },
  ],
};

