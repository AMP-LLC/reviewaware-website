import { BellRing, Mail, QrCode } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";

import { FaqSection } from "@/components/landing/faq-section";
import { FinalCtaSection } from "@/components/landing/final-cta-section";
import {
  IndustryLandingHero,
  IndustryLandingWorkflowVisual,
  IndustryProductProofSection,
  IndustryQrCardMockup,
  IndustryQrToolkitVisual,
  IndustryWorkflowJobScreenVisual,
} from "@/components/landing/industry-landing-visuals";
import { IndustryResultsBulletsSection } from "@/components/landing/industry-results-bullets-section";
import { IndustryBeforeAfterSection } from "@/components/landing/industry-before-after-section";
import {
  IndustryBenefitsSection,
  IndustryUseCasesSection,
} from "@/components/landing/industry-landing-highlights";
import { PlatformLogosSection } from "@/components/landing/platform-logos-section";
import { PricingSection } from "@/components/landing/pricing-section";
import { ReviewGrowthKitSection } from "@/components/landing/review-growth-kit-section";
import { ReviewPainSection } from "@/components/landing/review-pain-section";
import { ReviewResultsSection } from "@/components/landing/review-results-section";
import { SeoEducationCardsSection } from "@/components/landing/seo-education-cards-section";
import { SiteHeader } from "@/components/landing/site-header";
import {
  buildIndustryLandingMessageValues,
  getIndustryLandingDefinition,
} from "@/lib/industry-landing";

const sectionY = "py-12 md:py-16 lg:py-24";

export async function IndustryLandingPageContent({
  locale,
  industrySlug,
}: {
  locale: string;
  industrySlug: string;
}) {
  const def = getIndustryLandingDefinition(industrySlug);
  if (!def) {
    notFound();
  }

  const tokens = def.tokens[locale === "es" ? "es" : "en"];
  const v = buildIndustryLandingMessageValues(tokens, locale);
  const t = await getTranslations("industryLanding");

  const heroCopy = {
    headlineLine1: t("hero.headlineLine1", v),
    headlineLine2: t("hero.headlineLine2", v),
    subtitleLine1: t("hero.subtitleLine1", v),
    subtitleLine2: t("hero.subtitleLine2", v),
    ctaPrimary: t("hero.ctaPrimary", v),
    ctaSecondary: t("hero.ctaSecondary", v),
    credibilityLine: t("hero.credibilityLine", v),
  };

  const painCopy = {
    title: t("problem.title", v),
    layout: "cards" as const,
    cards: [
      { title: t("problem.card1", v) },
      { title: t("problem.card2", v) },
      { title: t("problem.card3", v) },
    ],
    closing: t("problem.closing", v),
  };

  const workflowVisualSteps = [
    { title: t("workflowStep1Title", v), body: t("workflowStep1Body", v) },
    { title: t("workflowStep2Title", v), body: t("workflowStep2Body", v) },
    { title: t("workflowStep3Title", v), body: t("workflowStep3Body", v) },
  ] as const;

  const finalCtaCopy = {
    headline: t("finalCta.headline", v),
    cta: t("finalCta.cta", v),
    ctaSubInButton: t("finalCta.ctaSubInButton", v),
    sub: t("finalCta.sub", v),
    supportingLine: t("finalCta.supportingLine", v),
  };

  const seoEducationBlocks = [
    {
      title: t("seoEducation.block1Title", v),
      text: t("seoEducation.block1Text", v),
    },
    {
      title: t("seoEducation.block2Title", v),
      text: t("seoEducation.block2Text", v),
    },
    {
      title: t("seoEducation.block3Title", v),
      text: t("seoEducation.block3Text", v),
    },
    {
      title: t("seoEducation.block4Title", v),
      text: t("seoEducation.block4Text", v),
    },
  ] as const;

  const reviewGrowthKitCards = [
    {
      title: t("reviewGrowthKit.card1Title", v),
      description: t("reviewGrowthKit.card1Description", v),
    },
    {
      title: t("reviewGrowthKit.card2Title", v),
      description: t("reviewGrowthKit.card2Description", v),
    },
    {
      title: t("reviewGrowthKit.card3Title", v),
      description: t("reviewGrowthKit.card3Description", v),
    },
  ] as const;

  const prePricingResultItems = [
    t("prePricingResults.item1", v),
    t("prePricingResults.item2", v),
    t("prePricingResults.item3", v),
    t("prePricingResults.item4", v),
  ] as const;

  const useCases = def.useCases[locale === "es" ? "es" : "en"];

  const productProofBadges = [
    { id: "hvac", label: t("productProof.badgeHvac"), href: "/hvac-review-software" },
    {
      id: "plumbing",
      label: t("productProof.badgePlumbing"),
      href: "/plumber-review-software",
    },
    { id: "roofing", label: t("productProof.badgeRoofing"), href: "/roofing-review-software" },
    { id: "electrical", label: t("productProof.badgeElectrical") },
    {
      id: "landscaping",
      label: t("productProof.badgeLandscaping"),
      href: "/landscaping-review-software",
    },
  ] as const;

  const workflowScreenLabels = {
    jobsTitle: t("workflowScreenMock.jobsTitle"),
    job1: t("workflowScreenMock.job1"),
    job2: t("workflowScreenMock.job2"),
    job3: t("workflowScreenMock.job3"),
    detailTitle: t("workflowScreenMock.detailTitle"),
    customerLabel: t("workflowScreenMock.customerLabel"),
    customerValue: t("workflowScreenMock.customerValue"),
    serviceLabel: t("workflowScreenMock.serviceLabel"),
    serviceValue: t("workflowScreenMock.serviceValue"),
    completedLabel: t("workflowScreenMock.completedLabel"),
    completedValue: t("workflowScreenMock.completedValue"),
    qrCardTitle: t("workflowScreenMock.qrCardTitle"),
    qrUrl: t("workflowScreenMock.qrUrl"),
    copyHint: t("workflowScreenMock.copyHint"),
    timelineTitle: t("workflowScreenMock.timelineTitle"),
    timeline1: t("workflowScreenMock.timeline1"),
    timeline2: t("workflowScreenMock.timeline2"),
    timeline3: t("workflowScreenMock.timeline3"),
  };

  const qrToolkitLabels = {
    panelTitle: t("qrToolkitMock.panelTitle"),
    panelSubtitle: t("qrToolkitMock.panelSubtitle"),
    statScansLabel: t("qrToolkitMock.statScansLabel"),
    statClicksLabel: t("qrToolkitMock.statClicksLabel"),
    statReviewsLabel: t("qrToolkitMock.statReviewsLabel"),
    tileQrCards: t("qrToolkitMock.tileQrCards"),
    tileLeaveBehind: t("qrToolkitMock.tileLeaveBehind"),
    tileInvoice: t("qrToolkitMock.tileInvoice"),
    tileVehicle: t("qrToolkitMock.tileVehicle"),
  };

  return (
    <>
      <SiteHeader locale={locale} />
      <main>
        <IndustryLandingHero locale={locale} copy={heroCopy} sectionClassName={sectionY} />
        <ReviewPainSection copy={painCopy} sectionClassName={sectionY} />
        <IndustryBeforeAfterSection
          sectionClassName={sectionY}
          title={t("beforeAfter.title")}
          withoutTitle={t("beforeAfter.withoutTitle")}
          withoutBullets={[
            t("beforeAfter.without1"),
            t("beforeAfter.without2"),
            t("beforeAfter.without3"),
            t("beforeAfter.without4"),
          ]}
          withTitle={t("beforeAfter.withTitle")}
          withBullets={[
            t("beforeAfter.with1"),
            t("beforeAfter.with2"),
            t("beforeAfter.with3"),
            t("beforeAfter.with4"),
          ]}
          supporting={t("beforeAfter.supporting")}
        />
        <IndustryLandingWorkflowVisual
          sectionClassName={sectionY}
          sectionTitle={t("workflowSectionTitle", v)}
          steps={workflowVisualSteps}
        />
        <IndustryWorkflowJobScreenVisual
          sectionClassName={sectionY}
          labels={workflowScreenLabels}
        />
        <IndustryQrCardMockup
          sectionClassName={sectionY}
          starsLabel={t("qrCardMockup.stars")}
          headline={t("qrCardMockup.headline")}
          subline={t("qrCardMockup.subline")}
          scanHint={t("qrCardMockup.scanHint")}
        />
        <IndustryProductProofSection
          sectionClassName={sectionY}
          title={t("productProof.title")}
          badges={productProofBadges}
        />
        <ReviewGrowthKitSection
          title={t("reviewGrowthKit.title", v)}
          subtitle={t("reviewGrowthKit.subtitle", v)}
          cards={reviewGrowthKitCards}
          cardIcons={[QrCode, Mail, BellRing]}
          emphasizedHeader
          sectionClassName={sectionY}
          bottomSlot={<IndustryQrToolkitVisual labels={qrToolkitLabels} />}
        />
        <IndustryUseCasesSection
          title={t("useCasesTitle", v)}
          cases={[...useCases]}
          sectionClassName={sectionY}
        />
        <IndustryBenefitsSection
          title={t("benefitsTitle", v)}
          items={[
            t("benefit1", v),
            t("benefit2", v),
            t("benefit3", v),
            t("benefit4", v),
          ]}
          sectionClassName={sectionY}
        />
        <PlatformLogosSection sectionClassName={sectionY} />
        <ReviewResultsSection sectionClassName={sectionY} />
        <SeoEducationCardsSection
          title={t("seoEducation.title", v)}
          subtitle={t("seoEducation.subtitle", v)}
          blocks={seoEducationBlocks}
          sectionClassName={sectionY}
        />
        <IndustryResultsBulletsSection
          title={t("prePricingResults.title", v)}
          items={prePricingResultItems}
          sectionClassName={sectionY}
        />
        <PricingSection
          locale={locale}
          liteAnnualLeadIn={t("pricingAnnualLeadIn", v)}
          sectionClassName={sectionY}
        />
        <FaqSection sectionClassName={sectionY} />
        <FinalCtaSection
          locale={locale}
          copy={finalCtaCopy}
          sectionClassName={sectionY}
        />
      </main>
    </>
  );
}
