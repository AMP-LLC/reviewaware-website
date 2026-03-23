import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import { BuiltForServiceSection } from "@/components/landing/built-for-service-section";
import { DemoSection } from "@/components/landing/demo-section";
import { FaqSection } from "@/components/landing/faq-section";
import { FeaturesSection } from "@/components/landing/features-section";
import { FinalCtaSection } from "@/components/landing/final-cta-section";
import { HeroSection } from "@/components/landing/hero-section";
import { IndustryStripSection } from "@/components/landing/industry-strip-section";
import { MobileStickyCta } from "@/components/landing/mobile-sticky-cta";
import { HowItWorksSection } from "@/components/landing/how-it-works-section";
import { OutcomeTimelineSection } from "@/components/landing/outcome-timeline-section";
import { PricingSection } from "@/components/landing/pricing-section";
import { ProblemSection } from "@/components/landing/problem-section";
import { ReviewResultsSection } from "@/components/landing/review-results-section";
import { ScreenshotsSection } from "@/components/landing/screenshots-section";
import { ReviewsImproveServiceSection } from "@/components/landing/reviews-improve-service-section";
import { WhyReviewAwareSection } from "@/components/landing/why-reviewaware-section";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";
import { SolutionSection } from "@/components/landing/solution-section";
import { getLiteTrialHref } from "@/lib/marketing-links";
import { routing } from "@/i18n/routing";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <>
      <SiteHeader locale={locale} />
      <main className="pb-[5.75rem] md:pb-0">
        <HeroSection locale={locale} />
        <IndustryStripSection />
        <DemoSection trialHref={getLiteTrialHref(locale)} />
        <ProblemSection />
        <BuiltForServiceSection />
        <SolutionSection />
        <HowItWorksSection />
        <WhyReviewAwareSection />
        <ReviewsImproveServiceSection />
        <FeaturesSection />
        <ScreenshotsSection locale={locale} />
        <ReviewResultsSection />
        <PricingSection locale={locale} />
        <OutcomeTimelineSection />
        <FaqSection />
        <FinalCtaSection locale={locale} />
      </main>
      <SiteFooter />
      <MobileStickyCta trialHref={getLiteTrialHref(locale)} />
    </>
  );
}
