import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SiteFooter } from "@/components/landing/site-footer";
import { UseCasePageContent } from "@/components/landing/use-case-page-content";
import { routing } from "@/i18n/routing";
import {
  getUseCasePageDefinition,
  isUseCasePageSlug,
  USE_CASE_PAGE_SLUGS,
} from "@/lib/use-case-pages/registry";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    USE_CASE_PAGE_SLUGS.map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!hasLocale(routing.locales, locale)) {
    return {};
  }

  const def = getUseCasePageDefinition(slug);
  if (!def) return {};

  const t = await getTranslations({ locale, namespace: "useCasePages" });
  const k = def.messageKey;
  return {
    title: t(`${k}.metadata.title`),
    description: t(`${k}.metadata.description`),
    keywords: [def.primaryKeyword],
    openGraph: { locale: locale === "es" ? "es" : "en_US" },
  };
}

export default async function SolutionPage({ params }: Props) {
  const { locale, slug } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  if (!isUseCasePageSlug(slug)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <>
      <UseCasePageContent locale={locale} slug={slug} />
      <SiteFooter />
    </>
  );
}
