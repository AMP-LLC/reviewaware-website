import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

import { assertUniqueMarketingSlugs } from "./src/lib/seo-architecture/assert-unique-marketing-slugs";
import { USE_CASE_PAGE_SLUGS } from "./src/lib/use-case-pages/registry";

assertUniqueMarketingSlugs();

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  turbopack: {
    // Avoid picking a parent folder when multiple lockfiles exist on the machine.
    root: process.cwd(),
  },
  async redirects() {
    return [
      ...USE_CASE_PAGE_SLUGS.flatMap((slug) => [
        {
          source: `/${slug}`,
          destination: `/solutions/${slug}`,
          permanent: true,
        },
        {
          source: `/es/${slug}`,
          destination: `/es/solutions/${slug}`,
          permanent: true,
        },
      ]),
    ];
  },
  images: {
    localPatterns: [
      {
        pathname: "/marketing/**",
        // Omit `search` so cache-busting query strings (e.g. ?v=2) are allowed.
      },
    ],
  },
};

export default withNextIntl(nextConfig);
