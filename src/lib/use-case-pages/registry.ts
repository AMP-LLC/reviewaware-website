/**
 * Registry for solution / intent pages (Layer 3).
 * Copy & metadata: next-intl namespace `useCasePages.{messageKey}`.
 *
 * Routes: /[locale]/[slug] (same segment as product + industry; slugs are disjoint)
 */

export type UseCasePageSections = {
  /** Uses global `reviewCaptureDifferentiation` messages (same UI as homepage). */
  showCaptureReviewsAnywhere?: boolean;
  showPlatformLogos?: boolean;
  showHowItWorks?: boolean;
};

export type UseCasePageLayout = "default" | "longFormGuide";

export type UseCasePageDefinition = {
  slug: string;
  primaryKeyword: string;
  messageKey: string;
  /** When `longFormGuide`, the template renders pillar content + HowTo JSON-LD. */
  layout?: UseCasePageLayout;
  sections?: UseCasePageSections;
};

export const USE_CASE_PAGE_REGISTRY = {
  "get-more-google-reviews": {
    slug: "get-more-google-reviews",
    primaryKeyword: "get more google reviews",
    messageKey: "getMoreGoogleReviews",
    sections: {
      showCaptureReviewsAnywhere: true,
      showPlatformLogos: true,
      showHowItWorks: true,
    },
  },
  "how-to-get-more-google-reviews": {
    slug: "how-to-get-more-google-reviews",
    primaryKeyword: "how to get more google reviews",
    messageKey: "howToGetMoreGoogleReviews",
    layout: "longFormGuide",
    sections: {
      showCaptureReviewsAnywhere: true,
      showPlatformLogos: true,
      showHowItWorks: true,
    },
  },
  "qr-code-review-system": {
    slug: "qr-code-review-system",
    primaryKeyword: "qr code review system",
    messageKey: "qrCodeReviewSystem",
    sections: {
      showCaptureReviewsAnywhere: true,
      showPlatformLogos: true,
      showHowItWorks: true,
    },
  },
  "review-cards-for-business": {
    slug: "review-cards-for-business",
    primaryKeyword: "review cards for business",
    messageKey: "reviewCardsForBusiness",
    sections: {
      showCaptureReviewsAnywhere: true,
      showPlatformLogos: true,
      showHowItWorks: true,
    },
  },
  "jobsite-review-system": {
    slug: "jobsite-review-system",
    primaryKeyword: "jobsite review system",
    messageKey: "jobsiteReviewSystem",
    sections: {
      showCaptureReviewsAnywhere: true,
      showPlatformLogos: true,
      showHowItWorks: true,
    },
  },
  "automated-review-requests": {
    slug: "automated-review-requests",
    primaryKeyword: "automated review requests",
    messageKey: "automatedReviewRequests",
    sections: {
      showCaptureReviewsAnywhere: true,
      showPlatformLogos: true,
      showHowItWorks: true,
    },
  },
  "review-growth-kit": {
    slug: "review-growth-kit",
    primaryKeyword: "review growth kit",
    messageKey: "reviewGrowthKit",
    sections: {
      showCaptureReviewsAnywhere: true,
      showPlatformLogos: true,
      showHowItWorks: true,
    },
  },
  "review-funnel": {
    slug: "review-funnel",
    primaryKeyword: "review funnel",
    messageKey: "reviewFunnel",
    sections: {
      showCaptureReviewsAnywhere: true,
      showPlatformLogos: true,
      showHowItWorks: true,
    },
  },
} as const satisfies Record<string, UseCasePageDefinition>;

export type UseCasePageSlug = keyof typeof USE_CASE_PAGE_REGISTRY;

export const USE_CASE_PAGE_SLUGS = Object.keys(USE_CASE_PAGE_REGISTRY) as UseCasePageSlug[];

export function isUseCasePageSlug(slug: string): slug is UseCasePageSlug {
  return slug in USE_CASE_PAGE_REGISTRY;
}

export function getUseCasePageDefinition(slug: string): UseCasePageDefinition | undefined {
  return USE_CASE_PAGE_REGISTRY[slug as UseCasePageSlug];
}

/** Root path for a use-case page (locale prefix added by next-intl Link when needed). */
export function getUseCasePagePath(slug: string): `/${string}` {
  return `/${slug}` as `/${string}`;
}
