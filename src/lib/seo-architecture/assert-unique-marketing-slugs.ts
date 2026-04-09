import { COMPARISON_PAGE_SLUGS } from "../comparison-pages/registry";
import { INDUSTRY_LANDING_SLUGS } from "../industry-landing";
import { PRODUCT_PAGE_SLUGS } from "../product-pages/registry";
import { USE_CASE_PAGE_SLUGS } from "../use-case-pages/registry";

/**
 * Ensures marketing registries never share the same slug string.
 * Call from `next.config.ts` so `next build` fails fast on collisions.
 *
 * Routes: products, industry, and solutions share `/[locale]/[productSlug]` (disjoint
 * slugs); comparisons under `/compare/[slug]` — slug strings must remain globally
 * unique for redirects, links, and mental model.
 */
export function assertUniqueMarketingSlugs(): void {
  const entries: { slug: string; source: string }[] = [
    ...PRODUCT_PAGE_SLUGS.map((slug) => ({ slug, source: "product-pages" })),
    ...INDUSTRY_LANDING_SLUGS.map((slug) => ({ slug, source: "industry-landing" })),
    ...USE_CASE_PAGE_SLUGS.map((slug) => ({ slug, source: "use-case-pages" })),
    ...COMPARISON_PAGE_SLUGS.map((slug) => ({ slug, source: "comparison-pages" })),
  ];

  const bySlug = new Map<string, string[]>();
  for (const { slug, source } of entries) {
    const list = bySlug.get(slug) ?? [];
    list.push(source);
    bySlug.set(slug, list);
  }

  const overlaps: string[] = [];
  for (const [slug, sources] of bySlug) {
    if (sources.length > 1) {
      overlaps.push(`"${slug}" appears in: ${sources.join(", ")}`);
    }
  }

  if (overlaps.length > 0) {
    throw new Error(
      `Duplicate marketing slug detected.\n${overlaps.map((line) => `  - ${line}`).join("\n")}`,
    );
  }
}
