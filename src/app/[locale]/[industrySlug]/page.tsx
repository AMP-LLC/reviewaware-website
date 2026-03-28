import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { IndustryLandingPageContent } from "@/components/landing/industry-landing-page-content";
import { SiteFooter } from "@/components/landing/site-footer";
import {
  buildIndustryLandingMessageValues,
  getIndustryLandingDefinition,
  INDUSTRY_LANDING_SLUGS,
} from "@/lib/industry-landing";
import { routing } from "@/i18n/routing";

type Props = {
  params: Promise<{ locale: string; industrySlug: string }>;
};

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    INDUSTRY_LANDING_SLUGS.map((industrySlug) => ({ locale, industrySlug })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, industrySlug } = await params;
  const def = getIndustryLandingDefinition(industrySlug);
  if (!def || !hasLocale(routing.locales, locale)) {
    return {};
  }

  const tokens = def.tokens[locale === "es" ? "es" : "en"];
  const v = buildIndustryLandingMessageValues(tokens, locale);
  const t = await getTranslations({ locale, namespace: "industryLanding" });

  return {
    title: t("metadata.title", v),
    description: t("metadata.description", v),
    openGraph: {
      locale: locale === "es" ? "es" : "en_US",
    },
  };
}

export default async function IndustryLandingRoutePage({ params }: Props) {
  const { locale, industrySlug } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  if (!getIndustryLandingDefinition(industrySlug)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <>
      <IndustryLandingPageContent locale={locale} industrySlug={industrySlug} />
      <SiteFooter />
    </>
  );
}
