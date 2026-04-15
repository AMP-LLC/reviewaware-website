import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CaptureReviewsAnywhereSection } from "@/components/landing/capture-reviews-anywhere-section";
import { FaqSection } from "@/components/landing/faq-section";
import { FinalCtaSection } from "@/components/landing/final-cta-section";
import { HeroSection } from "@/components/landing/hero-section";
import { HowItWorksSection } from "@/components/landing/how-it-works-section";
import { WorkflowFitSection } from "@/components/landing/workflow-fit-section";
import { PlatformLogosSection } from "@/components/landing/platform-logos-section";
import { PricingSection } from "@/components/landing/pricing-section";
import { ReviewPainSection } from "@/components/landing/review-pain-section";
import { ReviewResultsSection } from "@/components/landing/review-results-section";
import { ScreenshotsSection } from "@/components/landing/screenshots-section";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";
import { routing } from "@/i18n/routing";
import { marketingMetadataAlternates } from "@/lib/site-url";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });
  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      locale: locale === "es" ? "es" : "en_US",
    },
    ...marketingMetadataAlternates(locale, []),
  };
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const tProblem = await getTranslations("problem");

  const problemSectionCopy = {
    title: tProblem("title"),
    intro: tProblem("intro"),
    layout: "cards" as const,
    cards: [
      { title: tProblem("item1") },
      { title: tProblem("item2") },
      { title: tProblem("item3") },
    ],
    closing: tProblem("closing"),
  };

  return (
    <>
      <SiteHeader locale={locale} />
      <main>
        <HeroSection locale={locale} ctaLayout="trialDemoPlusHowLink" />
        <WorkflowFitSection />
        <HowItWorksSection />
        <ReviewPainSection copy={problemSectionCopy} />
        <CaptureReviewsAnywhereSection />
        <PlatformLogosSection />
        <ScreenshotsSection locale={locale} />
        <ReviewResultsSection />
        <PricingSection locale={locale} />
        <FaqSection />
        <FinalCtaSection locale={locale} />
      </main>
      <SiteFooter />
    </>
  );
}
