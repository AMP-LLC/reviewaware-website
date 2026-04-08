import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { IndustryLandingPageContent } from "@/components/landing/industry-landing-page-content";
import { ProductPageContent } from "@/components/landing/product-page-content";
import { SiteFooter } from "@/components/landing/site-footer";
import { UseCasePageContent } from "@/components/landing/use-case-page-content";
import {
  buildIndustryLandingMessageValues,
  getIndustryLandingDefinition,
  INDUSTRY_LANDING_SLUGS,
} from "@/lib/industry-landing";
import { routing } from "@/i18n/routing";
import {
  getProductPageDefinition,
  isProductPageSlug,
  PRODUCT_PAGE_SLUGS,
} from "@/lib/product-pages/registry";
import {
  getUseCasePageDefinition,
  isUseCasePageSlug,
  USE_CASE_PAGE_SLUGS,
} from "@/lib/use-case-pages/registry";

type Props = {
  params: Promise<{ locale: string; productSlug: string }>;
};

export function generateStaticParams() {
  const slugUnion = [
    ...new Set([
      ...PRODUCT_PAGE_SLUGS,
      ...INDUSTRY_LANDING_SLUGS,
      ...USE_CASE_PAGE_SLUGS,
    ]),
  ];
  return routing.locales.flatMap((locale) =>
    slugUnion.map((productSlug) => ({ locale, productSlug })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, productSlug } = await params;
  if (!hasLocale(routing.locales, locale)) {
    return {};
  }

  const productDef = getProductPageDefinition(productSlug);
  if (productDef) {
    const t = await getTranslations({ locale, namespace: "productPages" });
    const k = productDef.messageKey;
    return {
      title: t(`${k}.metadata.title`),
      description: t(`${k}.metadata.description`),
      keywords: [productDef.primaryKeyword],
      openGraph: { locale: locale === "es" ? "es" : "en_US" },
    };
  }

  const useCaseDef = getUseCasePageDefinition(productSlug);
  if (useCaseDef) {
    const t = await getTranslations({ locale, namespace: "useCasePages" });
    const k = useCaseDef.messageKey;
    return {
      title: t(`${k}.metadata.title`),
      description: t(`${k}.metadata.description`),
      keywords: [useCaseDef.primaryKeyword],
      openGraph: { locale: locale === "es" ? "es" : "en_US" },
    };
  }

  const industryDef = getIndustryLandingDefinition(productSlug);
  if (industryDef) {
    const loc = locale === "es" ? "es" : "en";
    const tokens = industryDef.tokens[loc];
    const v = buildIndustryLandingMessageValues(tokens, locale);
    const t = await getTranslations({ locale, namespace: "industryLanding" });
    const metaOverride = industryDef.copyOverrides?.[loc]?.metadata;
    return {
      title: metaOverride?.title ?? t("metadata.title", v),
      description: metaOverride?.description ?? t("metadata.description", v),
      openGraph: { locale: locale === "es" ? "es" : "en_US" },
    };
  }

  return {};
}

export default async function ProductOrIndustryPage({ params }: Props) {
  const { locale, productSlug } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  if (isProductPageSlug(productSlug)) {
    return (
      <>
        <ProductPageContent locale={locale} slug={productSlug} />
        <SiteFooter />
      </>
    );
  }

  if (getIndustryLandingDefinition(productSlug)) {
    return (
      <>
        <IndustryLandingPageContent locale={locale} industrySlug={productSlug} />
        <SiteFooter />
      </>
    );
  }

  if (isUseCasePageSlug(productSlug)) {
    return (
      <>
        <UseCasePageContent locale={locale} slug={productSlug} />
        <SiteFooter />
      </>
    );
  }

  notFound();
}
