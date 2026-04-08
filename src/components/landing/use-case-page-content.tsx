import { getTranslations } from "next-intl/server";

import { CaptureReviewsAnywhereSection } from "@/components/landing/capture-reviews-anywhere-section";
import { FaqSection } from "@/components/landing/faq-section";
import { HeroSection } from "@/components/landing/hero-section";
import { HowItWorksSection } from "@/components/landing/how-it-works-section";
import { PlatformLogosSection } from "@/components/landing/platform-logos-section";
import { ReviewPainSection } from "@/components/landing/review-pain-section";
import { SeoDifferentiatorSection } from "@/components/landing/seo-differentiator-section";
import { SeoInternalLinksSection } from "@/components/landing/seo-internal-links-section";
import { SiteHeader } from "@/components/landing/site-header";
import { USE_CASE_RELATED_LINKS } from "@/lib/seo-layers/link-presets";
import {
  getUseCasePageDefinition,
  type UseCasePageSlug,
} from "@/lib/use-case-pages/registry";

const sectionY = "py-12 md:py-16 lg:py-24";

export async function UseCasePageContent({
  locale,
  slug,
}: {
  locale: string;
  slug: UseCasePageSlug;
}) {
  const def = getUseCasePageDefinition(slug);
  if (!def) throw new Error(`Missing use-case registry entry: ${slug}`);

  const k = def.messageKey;
  const t = await getTranslations("useCasePages");
  const tLinks = await getTranslations("internalLinks");

  const sections = def.sections ?? {};

  const heroCopy = {
    headlineLine1: t(`${k}.hero.headlineLine1`),
    headlineLine2: t(`${k}.hero.headlineLine2`),
    subtitleLine1: t(`${k}.hero.subtitleLine1`),
    subtitleLine2: t(`${k}.hero.subtitleLine2`),
    ctaPrimary: t(`${k}.hero.ctaPrimary`),
    ctaSecondary: t(`${k}.hero.ctaSecondary`),
    credibilityLine: t(`${k}.hero.credibilityLine`),
  };

  /** Problem framing — distinct from core product pages. */
  const painCopy = {
    title: t(`${k}.reviewPain.title`),
    layout: "cards" as const,
    cards: [
      { title: t(`${k}.reviewPain.card1`) },
      { title: t(`${k}.reviewPain.card2`) },
      { title: t(`${k}.reviewPain.card3`) },
    ],
    closing: t(`${k}.reviewPain.closing`),
  };

  const solutionParagraphs = [
    t(`${k}.differentiator.p1`),
    t(`${k}.differentiator.p2`),
    t(`${k}.differentiator.p3`),
    t(`${k}.differentiator.p4`),
  ].filter((p) => p.trim().length > 0);

  const related = USE_CASE_RELATED_LINKS[slug].map((spec) => ({
    href: spec.href,
    label: tLinks(spec.labelKey),
  }));

  return (
    <>
      <SiteHeader locale={locale} />
      <main>
        <HeroSection locale={locale} copy={heroCopy} />
        <ReviewPainSection copy={painCopy} sectionClassName={sectionY} />
        <SeoDifferentiatorSection
          title={t(`${k}.differentiator.title`)}
          paragraphs={solutionParagraphs}
          sectionClassName={sectionY}
        />
        {sections.showCaptureReviewsAnywhere !== false ? (
          <CaptureReviewsAnywhereSection />
        ) : null}
        <SeoInternalLinksSection
          title={tLinks("useCaseRelatedTitle")}
          links={related}
          sectionClassName="bg-zinc-50/50"
        />
        {sections.showPlatformLogos !== false ? (
          <PlatformLogosSection sectionClassName={sectionY} />
        ) : null}
        {sections.showHowItWorks !== false ? (
          <HowItWorksSection sectionClassName={sectionY} />
        ) : null}
        <FaqSection sectionClassName={sectionY} />
      </main>
    </>
  );
}
