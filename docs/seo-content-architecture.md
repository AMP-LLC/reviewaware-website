# SEO content architecture (ReviewAware)

## Route ownership (single source of truth)

| Route family | Who owns the slug list | File |
|--------------|-------------------------|------|
| **Product** (Layer 1) | `PRODUCT_PAGE_REGISTRY` | `src/lib/product-pages/registry.ts` |
| **Industry / trade** (Layer 2) | `INDUSTRY_LANDING_REGISTRY` | `src/lib/industry-landing/registry.ts` |
| **Solutions** (Layer 3) | `USE_CASE_PAGE_REGISTRY` | `src/lib/use-case-pages/registry.ts` |
| **Comparisons** (vs pages) | `COMPARISON_PAGE_REGISTRY` | `src/lib/comparison-pages/registry.ts` |

**Build safety:** `assertUniqueMarketingSlugs()` in `src/lib/seo-architecture/assert-unique-marketing-slugs.ts` runs from `next.config.ts` so **slug overlap across product, industry, solution, and comparison registries fails the build**.

## Routes

| Layer | URL pattern | Registry |
|--------|-------------|----------|
| Product (category) | `/[locale]/[productSlug]` | `src/lib/product-pages/registry.ts` |
| Industry / trade | Same segment as products (non-colliding slugs) | `src/lib/industry-landing/registry.ts` |
| Solutions (use-case) | `/[locale]/[productSlug]` (same segment; disjoint slugs) | `src/lib/use-case-pages/registry.ts` |
| Comparisons | `/[locale]/compare/[slug]` | `src/lib/comparison-pages/registry.ts` |

Next.js uses **one** dynamic segment at the locale root for **products, industry, and use-case** pages (`[productSlug]`), because two sibling `[param]` folders would conflict. Slugs are disjoint across registries (enforced at build time).

Legacy URLs **`/solutions/{slug}`** **301 redirect** to the flat **`/{slug}`** (and `/es/solutions/...` → `/es/...`) via `next.config.ts`.

## Messages

- **Products:** `productPages.{messageKey}` (merged from `messages/seo-layers.{locale}.json`).
- **Use-cases:** `useCasePages.{messageKey}` (same bundle).
- **Industry:** `industryLanding` (base `messages/{locale}.json` + `industryLanding.layerNav` overlay).

## Internal linking

Defined in `src/lib/seo-layers/link-presets.ts` and wired in page templates (no extra visual system):

| Layer | Downward / lateral links |
|-------|---------------------------|
| **Product** | `PRODUCT_PAGE_INTERNAL_LINKS`: both umbrella hubs + **two** contextual use-cases + **one** comparison URL each. |
| **Umbrella industry** | Trades via “Built for Service Professionals”; **plus** one compact `UMBRELLA_PAGE_FOCUS_LINKS` strip (featured trades + 2 products + 1 playbook). |
| **Trade** | **Top 10 priority trades:** `PRIORITY_TRADE_CONTEXTUAL_LINKS` (umbrellas + siblings + product + playbook). **Other trades:** `TRADE_LAYER_INTERNAL_LINKS` + full sibling compact grid. |
| **Use-case** | `USE_CASE_RELATED_LINKS`: mix of product, umbrella, trade, and other use-cases (`getUseCasePagePath`). |
| **Comparison** | `COMPARISON_PAGE_RELATED_LINKS`: Google + review-request + both umbrellas (commercial cluster). |

## Metadata & discovery

- **Canonical & hreflang:** `marketingMetadataAlternates()` in `src/lib/site-url.ts` (used from home, `[productSlug]`, compare, privacy, terms). Set **`NEXT_PUBLIC_SITE_URL`** in production so URLs are correct.
- **`metadataBase`:** `[locale]/layout.tsx` uses `getSiteOrigin()`.
- **Sitemap:** `src/app/sitemap.ts` lists home, every product/industry/use-case slug (both locales), every comparison slug, privacy, and terms.
- **Robots:** `src/app/robots.ts` allows crawlers and points to `sitemap.xml`.
- **Product & use-case:** `generateMetadata` sets `title`, `description`, and `keywords: [primaryKeyword]` from each **registry** entry (aligned with industry pages’ title/description pattern).
- **Industry:** unchanged overrides + token interpolation.

## When to add a page

1. Pick the layer and add a **registry entry** (`primaryKeyword`, `messageKey`, optional `sections`).
2. Add matching **nested messages** under `productPages` or `useCasePages` in both `seo-layers.en.json` and `seo-layers.es.json`.
3. For solutions, add **static params** via `USE_CASE_PAGE_SLUGS` (included in `[productSlug]/page.tsx`); optional **redirects** from old `/solutions/...` paths are in `next.config.ts`.

## Cannibalization (examples)

| Topic | Owns… | Notes |
|--------|--------|------|
| Review management vs reputation | Separate **product** slugs | Different hero + differentiator; cross-link. |
| Contractor umbrella vs roofing | Umbrella vs **trade** | Trade owns trade-long-tail; umbrella is broader. |
| QR system vs review cards | Separate **solution** slugs | QR = mechanism; cards = leave-behind asset. |

Canonical URLs for solutions are flat: **`/{slug}`** (e.g. `/get-more-google-reviews`).
