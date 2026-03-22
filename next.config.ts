import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  turbopack: {
    // Avoid picking a parent folder when multiple lockfiles exist on the machine.
    root: process.cwd(),
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
