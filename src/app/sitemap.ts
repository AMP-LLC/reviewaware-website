import type { MetadataRoute } from "next";

import { routing } from "@/i18n/routing";
import { COMPARISON_PAGE_SLUGS } from "@/lib/comparison-pages/registry";
import { INDUSTRY_LANDING_SLUGS } from "@/lib/industry-landing";
import { PRODUCT_PAGE_SLUGS } from "@/lib/product-pages/registry";
import { absoluteMarketingUrl } from "@/lib/site-url";
import { USE_CASE_PAGE_SLUGS } from "@/lib/use-case-pages/registry";

function pushLocaleVariants(
  entries: MetadataRoute.Sitemap,
  segments: string[],
  priority: number,
): void {
  for (const locale of routing.locales) {
    entries.push({
      url: absoluteMarketingUrl(locale, segments),
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority,
    });
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  pushLocaleVariants(entries, [], 1);

  const slugUnion = [
    ...new Set([
      ...PRODUCT_PAGE_SLUGS,
      ...INDUSTRY_LANDING_SLUGS,
      ...USE_CASE_PAGE_SLUGS,
    ]),
  ];
  for (const slug of slugUnion) {
    pushLocaleVariants(entries, [slug], 0.85);
  }

  for (const slug of COMPARISON_PAGE_SLUGS) {
    pushLocaleVariants(entries, ["compare", slug], 0.75);
  }

  pushLocaleVariants(entries, ["privacy"], 0.3);
  pushLocaleVariants(entries, ["terms"], 0.3);

  return entries;
}
