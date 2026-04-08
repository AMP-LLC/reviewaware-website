import { getTranslations } from "next-intl/server";

import { FaqSection } from "@/components/landing/faq-section";
import { FinalCtaSection } from "@/components/landing/final-cta-section";
import { HeroSection } from "@/components/landing/hero-section";
import { HowItWorksSection } from "@/components/landing/how-it-works-section";
import { PlatformLogosSection } from "@/components/landing/platform-logos-section";
import { PricingSection } from "@/components/landing/pricing-section";
import { ReviewPainSection } from "@/components/landing/review-pain-section";
import { ReviewResultsSection } from "@/components/landing/review-results-section";
import { SeoDifferentiatorSection } from "@/components/landing/seo-differentiator-section";
import { SeoInternalLinksSection } from "@/components/landing/seo-internal-links-section";
import { SiteHeader } from "@/components/landing/site-header";
import {
  getProductPageDefinition,
  type ProductPageSlug,
} from "@/lib/product-pages/registry";
import { PRODUCT_PAGE_INTERNAL_LINKS } from "@/lib/seo-layers/link-presets";

const sectionY = "py-12 md:py-16 lg:py-24";

export async function ProductPageContent({
  locale,
  slug,
}: {
  locale: string;
  slug: ProductPageSlug;
}) {
  const def = getProductPageDefinition(slug);
  if (!def) throw new Error(`Missing product registry entry: ${slug}`);

  const k = def.messageKey;
  const t = await getTranslations("productPages");
  const tLinks = await getTranslations("internalLinks");

  const showDifferentiator = def.sections?.showDifferentiator ?? true;
  const showReviewResults = def.sections?.showReviewResults ?? false;
  const showFinalCta = def.sections?.showFinalCta ?? true;

  const heroCopy = {
    headlineLine1: t(`${k}.hero.headlineLine1`),
    headlineLine2: t(`${k}.hero.headlineLine2`),
    subtitleLine1: t(`${k}.hero.subtitleLine1`),
    subtitleLine2: t(`${k}.hero.subtitleLine2`),
    ctaPrimary: t(`${k}.hero.ctaPrimary`),
    ctaSecondary: t(`${k}.hero.ctaSecondary`),
    credibilityLine: t(`${k}.hero.credibilityLine`),
  };

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

  const finalCtaCopy = showFinalCta
    ? {
        headline: t(`${k}.finalCta.headline`),
        cta: t(`${k}.finalCta.cta`),
        ctaSubInButton: t(`${k}.finalCta.ctaSubInButton`),
        sub: t(`${k}.finalCta.sub`),
        supportingLine: t(`${k}.finalCta.supportingLine`),
      }
    : null;

  const downward = PRODUCT_PAGE_INTERNAL_LINKS[slug].map((spec) => ({
    href: spec.href,
    label: tLinks(spec.labelKey),
  }));

  const differentiatedParagraphs = showDifferentiator
    ? [t(`${k}.differentiator.p1`), t(`${k}.differentiator.p2`), t(`${k}.differentiator.p3`)]
    : [];

  return (
    <>
      <SiteHeader locale={locale} />
      <main>
        <HeroSection locale={locale} copy={heroCopy} />
        {showDifferentiator ? (
          <SeoDifferentiatorSection
            title={t(`${k}.differentiator.title`)}
            paragraphs={differentiatedParagraphs}
            sectionClassName={sectionY}
          />
        ) : null}
        <SeoInternalLinksSection
          title={tLinks("coreProductExploreTitle")}
          links={downward}
          sectionClassName="bg-zinc-50/50"
        />
        <HowItWorksSection sectionClassName={sectionY} />
        <ReviewPainSection copy={painCopy} sectionClassName={sectionY} />
        <PlatformLogosSection sectionClassName={sectionY} />
        {showReviewResults ? <ReviewResultsSection sectionClassName={sectionY} /> : null}
        <PricingSection locale={locale} sectionClassName={sectionY} />
        <FaqSection sectionClassName={sectionY} />
        {finalCtaCopy ? (
          <FinalCtaSection
            locale={locale}
            copy={finalCtaCopy}
            sectionClassName={sectionY}
          />
        ) : null}
      </main>
    </>
  );
}
