# SEO content architecture (ReviewAware)

## Route ownership (single source of truth)

| Route family | Who owns the slug list | File |
|--------------|-------------------------|------|
| **Product** (Layer 1) | `PRODUCT_PAGE_REGISTRY` | `src/lib/product-pages/registry.ts` |
| **Industry / trade** (Layer 2) | `INDUSTRY_LANDING_REGISTRY` | `src/lib/industry-landing/registry.ts` |
| **Solutions** (Layer 3) | `USE_CASE_PAGE_REGISTRY` | `src/lib/use-case-pages/registry.ts` |

**Build safety:** `assertUniqueMarketingSlugs()` in `src/lib/seo-architecture/assert-unique-marketing-slugs.ts` runs from `next.config.ts` so **slug overlap across the three registries fails the build**.

## Routes

| Layer | URL pattern | Registry |
|--------|-------------|----------|
| Product (category) | `/[locale]/[productSlug]` | `src/lib/product-pages/registry.ts` |
| Industry / trade | Same segment as products (non-colliding slugs) | `src/lib/industry-landing/registry.ts` |
| Solutions (use-case) | `/[locale]/solutions/[slug]` | `src/lib/use-case-pages/registry.ts` |

Next.js uses **one** dynamic segment at the locale root for products **and** industry pages (`[productSlug]`), because two sibling `[param]` folders would conflict. Slugs are disjoint: product slugs come from `PRODUCT_PAGE_REGISTRY`, industry slugs from `INDUSTRY_LANDING_REGISTRY`, enforced at build time with solution slugs.

Legacy URLs `/get-more-google-reviews`, etc. **301 redirect** to `/solutions/{slug}` (and `/es/...`) via `next.config.ts`.

## Messages

- **Products:** `productPages.{messageKey}` (merged from `messages/seo-layers.{locale}.json`).
- **Use-cases:** `useCasePages.{messageKey}` (same bundle).
- **Industry:** `industryLanding` (base `messages/{locale}.json` + `industryLanding.layerNav` overlay).

## Internal linking

Defined in `src/lib/seo-layers/link-presets.ts`:

- Product → umbrella industry pages only (`UMBRELLA_INDUSTRY_LINK_SPECS`).
- Umbrella → trades (existing `IndustryLandingPageContent` sections).
- Trade → umbrellas (`TRADE_TO_UMBRELLA_LINK_SPECS` + compact trades).
- Use-case → products + selected industries / other solutions (`USE_CASE_RELATED_LINKS`, uses `/solutions/...` for solution-to-solution links).

## Metadata

- **Product & use-case:** `generateMetadata` sets `title`, `description`, and `keywords: [primaryKeyword]` from each **registry** entry (aligned with industry pages’ title/description pattern).
- **Industry:** unchanged overrides + token interpolation.

## When to add a page

1. Pick the layer and add a **registry entry** (`primaryKeyword`, `messageKey`, optional `sections`).
2. Add matching **nested messages** under `productPages` or `useCasePages` in both `seo-layers.en.json` and `seo-layers.es.json`.
3. For solutions, add **static params** automatically via `USE_CASE_PAGE_SLUGS`; ensure **redirects** in `next.config.ts` if you need a legacy top-level path.

## Cannibalization (examples)

| Topic | Owns… | Notes |
|--------|--------|------|
| Review management vs reputation | Separate **product** slugs | Different hero + differentiator; cross-link. |
| Contractor umbrella vs roofing | Umbrella vs **trade** | Trade owns trade-long-tail; umbrella is broader. |
| QR system vs review cards | Separate **solution** slugs | QR = mechanism; cards = leave-behind asset. |

Canonical URLs for solutions are **`/solutions/{slug}`**.
