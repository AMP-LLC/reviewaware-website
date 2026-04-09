import type { Metadata } from "next";

import { routing } from "@/i18n/routing";

/**
 * Canonical site origin for metadata, sitemap, and absolute URLs.
 * Set `NEXT_PUBLIC_SITE_URL` in production (e.g. https://reviewaware.com).
 */
export function getSiteOrigin(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (fromEnv) {
    return fromEnv.replace(/\/$/, "");
  }
  const vercel = process.env.VERCEL_URL?.trim();
  if (vercel) {
    const host = vercel.replace(/^https?:\/\//, "");
    return `https://${host}`;
  }
  return "http://localhost:3000";
}

/**
 * Browser path for a marketing URL with `localePrefix: "as-needed"`.
 * `segments` excludes the locale (e.g. `["compare", "reviewaware-vs-podium"]`).
 */
export function marketingUrlPath(locale: string, segments: string[]): string {
  const path = segments.length === 0 ? "/" : `/${segments.join("/")}`;
  if (locale === routing.defaultLocale) {
    return path;
  }
  if (path === "/") {
    return `/${locale}`;
  }
  return `/${locale}${path}`;
}

export function absoluteMarketingUrl(locale: string, segments: string[]): string {
  const origin = getSiteOrigin();
  return `${origin}${marketingUrlPath(locale, segments)}`;
}

/** Canonical (current locale) + hreflang for every configured locale. */
export function marketingMetadataAlternates(
  locale: string,
  segments: string[],
): Pick<Metadata, "alternates"> {
  const languages = Object.fromEntries(
    routing.locales.map((loc) => [loc, absoluteMarketingUrl(loc, segments)]),
  ) as Record<string, string>;
  return {
    alternates: {
      canonical: absoluteMarketingUrl(locale, segments),
      languages,
    },
  };
}
