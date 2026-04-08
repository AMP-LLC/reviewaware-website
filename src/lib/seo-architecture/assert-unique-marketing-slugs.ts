import { INDUSTRY_LANDING_SLUGS } from "../industry-landing";
import { PRODUCT_PAGE_SLUGS } from "../product-pages/registry";
import { USE_CASE_PAGE_SLUGS } from "../use-case-pages/registry";

/**
 * Ensures product, industry, and solution registries never share the same slug string.
 * Call from `next.config.ts` so `next build` fails fast on collisions.
 *
 * URLs: products & industry share `/[locale]/[productSlug]` but slugs are disjoint;
 * solutions live under `/solutions/[slug]` — collisions would break redirects and routing intent.
 */
export function assertUniqueMarketingSlugs(): void {
  const product = new Set<string>(PRODUCT_PAGE_SLUGS);
  const industry = new Set<string>(INDUSTRY_LANDING_SLUGS);
  const solution = new Set<string>(USE_CASE_PAGE_SLUGS);

  const overlaps: string[] = [];

  for (const s of product) {
    if (industry.has(s)) overlaps.push(`"${s}" in both product + industry registries`);
    if (solution.has(s)) overlaps.push(`"${s}" in both product + solution registries`);
  }
  for (const s of industry) {
    if (solution.has(s)) overlaps.push(`"${s}" in both industry + solution registries`);
  }

  if (overlaps.length > 0) {
    throw new Error(
      `Marketing slug collision:\n${overlaps.map((line) => `  - ${line}`).join("\n")}`,
    );
  }
}
