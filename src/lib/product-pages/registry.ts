/**
 * Registry for high-intent product/category pages (Layer 1).
 * Copy & metadata strings: next-intl namespace `productPages.{messageKey}`.
 *
 * @see docs/seo-content-architecture.md
 */

export type ProductPageSections = {
  /** Default true. Unique body block after hero (limits cannibalization). */
  showDifferentiator?: boolean;
  showReviewResults?: boolean;
  showFinalCta?: boolean;
};

export type ProductPageDefinition = {
  slug: string;
  /** Primary SEO keyword phrase (also emitted in metadata.keywords). */
  primaryKeyword: string;
  /** Key under `productPages` in messages JSON (camelCase). */
  messageKey: string;
  sections?: ProductPageSections;
};

export const PRODUCT_PAGE_REGISTRY = {
  "review-management-software": {
    slug: "review-management-software",
    primaryKeyword: "review management software",
    messageKey: "reviewManagementSoftware",
    sections: {
      showDifferentiator: true,
      showReviewResults: false,
      showFinalCta: true,
    },
  },
  "google-review-software": {
    slug: "google-review-software",
    primaryKeyword: "google review software",
    messageKey: "googleReviewSoftware",
    sections: {
      showDifferentiator: true,
      showReviewResults: false,
      showFinalCta: true,
    },
  },
  "customer-review-software": {
    slug: "customer-review-software",
    primaryKeyword: "customer review software",
    messageKey: "customerReviewSoftware",
    sections: {
      showDifferentiator: true,
      showReviewResults: false,
      showFinalCta: true,
    },
  },
  "reputation-management-software": {
    slug: "reputation-management-software",
    primaryKeyword: "reputation management software",
    messageKey: "reputationManagementSoftware",
    sections: {
      showDifferentiator: true,
      showReviewResults: false,
      showFinalCta: true,
    },
  },
  "review-request-software": {
    slug: "review-request-software",
    primaryKeyword: "review request software",
    messageKey: "reviewRequestSoftware",
    sections: {
      showDifferentiator: true,
      showReviewResults: false,
      showFinalCta: true,
    },
  },
} as const satisfies Record<string, ProductPageDefinition>;

export type ProductPageSlug = keyof typeof PRODUCT_PAGE_REGISTRY;

export const PRODUCT_PAGE_SLUGS = Object.keys(PRODUCT_PAGE_REGISTRY) as ProductPageSlug[];

export function isProductPageSlug(slug: string): slug is ProductPageSlug {
  return slug in PRODUCT_PAGE_REGISTRY;
}

export function getProductPageDefinition(slug: string): ProductPageDefinition | undefined {
  return PRODUCT_PAGE_REGISTRY[slug as ProductPageSlug];
}
