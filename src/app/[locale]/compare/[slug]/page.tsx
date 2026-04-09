import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ComparisonPageContent } from "@/components/landing/comparison-page-content";
import { SiteFooter } from "@/components/landing/site-footer";
import { routing } from "@/i18n/routing";
import {
  COMPARISON_PAGE_SLUGS,
  getComparisonPageDefinition,
  isComparisonPageSlug,
} from "@/lib/comparison-pages/registry";
import { marketingMetadataAlternates } from "@/lib/site-url";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    COMPARISON_PAGE_SLUGS.map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!hasLocale(routing.locales, locale)) {
    return {};
  }

  const def = getComparisonPageDefinition(slug);
  if (!def) return {};

  const t = await getTranslations({ locale, namespace: "comparisonPages" });
  const k = def.messageKey;
  return {
    title: t(`${k}.metadata.title`),
    description: t(`${k}.metadata.description`),
    keywords: [def.primaryKeyword],
    openGraph: { locale: locale === "es" ? "es" : "en_US" },
    ...marketingMetadataAlternates(locale, ["compare", slug]),
  };
}

export default async function ComparisonPage({ params }: Props) {
  const { locale, slug } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  if (!isComparisonPageSlug(slug)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <>
      <ComparisonPageContent locale={locale} slug={slug} />
      <SiteFooter />
    </>
  );
}
