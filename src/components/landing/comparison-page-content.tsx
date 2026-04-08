import { getTranslations } from "next-intl/server";
import { AlertCircle, Check, Minus, X } from "lucide-react";

import { FinalCtaSection } from "@/components/landing/final-cta-section";
import { HeroSection } from "@/components/landing/hero-section";
import { SeoInternalLinksSection } from "@/components/landing/seo-internal-links-section";
import { SiteHeader } from "@/components/landing/site-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  getComparisonPageDefinition,
  type ComparisonFeatureStatus,
  type ComparisonPageSlug,
} from "@/lib/comparison-pages/registry";
import { COMPARISON_PAGE_RELATED_LINKS } from "@/lib/seo-layers/link-presets";
import { cn } from "@/lib/utils";

const sectionY = "py-12 md:py-16 lg:py-24";

function StatusCell({ status }: { status: ComparisonFeatureStatus }) {
  const common = "mx-auto flex size-8 items-center justify-center";
  if (status === "yes") {
    return (
      <span className={common} title="Included">
        <Check className="size-5 text-emerald-600" strokeWidth={2.5} aria-hidden />
        <span className="sr-only">Yes</span>
      </span>
    );
  }
  if (status === "no") {
    return (
      <span className={common} title="Not included">
        <X className="size-5 text-zinc-400" strokeWidth={2.5} aria-hidden />
        <span className="sr-only">No</span>
      </span>
    );
  }
  if (status === "partial" || status === "limited") {
    return (
      <span
        className={common}
        title={status === "limited" ? "Limited" : "Partial"}
      >
        <Minus className="size-5 text-amber-600" strokeWidth={2.5} aria-hidden />
        <span className="sr-only">{status === "limited" ? "Limited" : "Partial"}</span>
      </span>
    );
  }
  return (
    <span className={common}>
      <AlertCircle className="size-5 text-zinc-400" aria-hidden />
    </span>
  );
}

export async function ComparisonPageContent({
  locale,
  slug,
}: {
  locale: string;
  slug: ComparisonPageSlug;
}) {
  const def = getComparisonPageDefinition(slug);
  if (!def) throw new Error(`Missing comparison registry entry: ${slug}`);

  const k = def.messageKey;
  const t = await getTranslations("comparisonPages");
  const tLinks = await getTranslations("internalLinks");

  const heroCopy = {
    headlineLine1: t(`${k}.hero.headlineLine1`),
    headlineLine2: t(`${k}.hero.headlineLine2`),
    subtitleLine1: t(`${k}.hero.subtitleLine1`),
    subtitleLine2: t(`${k}.hero.subtitleLine2`),
    ctaPrimary: t(`${k}.hero.ctaPrimary`),
    ctaSecondary: t(`${k}.hero.ctaSecondary`),
    credibilityLine: t(`${k}.hero.credibilityLine`),
  };

  const whyBullets = [
    t(`${k}.whySwitch.bullet1`),
    t(`${k}.whySwitch.bullet2`),
    t(`${k}.whySwitch.bullet3`),
  ];

  const finalCtaCopy = {
    headline: t(`${k}.finalCta.headline`),
    cta: t(`${k}.finalCta.cta`),
    ctaSubInButton: t(`${k}.finalCta.ctaSubInButton`),
    sub: t(`${k}.finalCta.sub`),
    supportingLine: t(`${k}.finalCta.supportingLine`),
  };

  const raCol = t(`${k}.features.colReviewAware`);
  const cpCol = def.competitorName;

  const bestForRa = [
    t(`${k}.bestFor.raBullet1`),
    t(`${k}.bestFor.raBullet2`),
    t(`${k}.bestFor.raBullet3`),
  ];
  const bestForCp = [
    t(`${k}.bestFor.cpBullet1`),
    t(`${k}.bestFor.cpBullet2`),
    t(`${k}.bestFor.cpBullet3`),
  ];

  const related = COMPARISON_PAGE_RELATED_LINKS[slug].map((spec) => ({
    href: spec.href,
    label: tLinks(spec.labelKey),
  }));

  return (
    <>
      <SiteHeader locale={locale} />
      <main>
        <HeroSection locale={locale} copy={heroCopy} />

        <section
          className={cn(
            "border-b border-zinc-200/60 bg-white",
            sectionY,
          )}
        >
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-balance text-center text-[1.625rem] font-semibold leading-tight tracking-tight text-zinc-950 sm:text-3xl">
              {t(`${k}.whySwitch.title`)}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-pretty text-base leading-relaxed text-zinc-600 sm:text-lg">
              {t(`${k}.whySwitch.intro`)}
            </p>
            <ul className="mt-8 space-y-3 text-pretty text-base leading-relaxed text-zinc-800">
              {whyBullets.map((line) => (
                <li key={line} className="flex gap-3">
                  <span
                    className="mt-1.5 size-2 shrink-0 rounded-full bg-blue-600"
                    aria-hidden
                  />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          className={cn(
            "border-b border-zinc-200/60 bg-zinc-50/50",
            sectionY,
          )}
        >
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-center text-[1.625rem] font-semibold leading-tight tracking-tight text-zinc-950 sm:text-3xl">
              {t(`${k}.features.sectionTitle`)}
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-zinc-600 sm:text-base">
              {t(`${k}.features.sectionSubtitle`)}
            </p>

            <div className="mt-10 overflow-x-auto rounded-xl border border-zinc-200 bg-white shadow-sm">
              <table className="w-full min-w-[520px] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-zinc-200 bg-zinc-50/80">
                    <th
                      scope="col"
                      className="px-4 py-3 font-semibold text-zinc-900 sm:px-6 sm:py-4"
                    >
                      {t(`${k}.features.colFeature`)}
                    </th>
                    <th
                      scope="col"
                      className="w-[120px] px-3 py-3 text-center font-semibold text-blue-800 sm:w-32 sm:px-4 sm:py-4"
                    >
                      {raCol}
                    </th>
                    <th
                      scope="col"
                      className="w-[120px] px-3 py-3 text-center font-semibold text-zinc-800 sm:w-32 sm:px-4 sm:py-4"
                    >
                      {cpCol}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {def.featureRows.map((row, idx) => (
                    <tr
                      key={row.rowId}
                      className={cn(
                        "border-b border-zinc-100",
                        idx % 2 === 1 ? "bg-zinc-50/40" : "bg-white",
                      )}
                    >
                      <th
                        scope="row"
                        className="px-4 py-3 font-medium text-zinc-800 sm:px-6 sm:py-3.5"
                      >
                        {t(`${k}.rows.${row.rowId}.label`)}
                      </th>
                      <td className="px-3 py-3 text-center sm:px-4">
                        <StatusCell status={row.reviewAware} />
                      </td>
                      <td className="px-3 py-3 text-center sm:px-4">
                        <StatusCell status={row.competitor} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-center text-xs leading-relaxed text-zinc-500">
              {t(`${k}.features.disclaimer`)}
            </p>
          </div>
        </section>

        <section className={cn("border-b border-zinc-200/60 bg-white", sectionY)}>
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-center text-[1.625rem] font-semibold leading-tight tracking-tight text-zinc-950 sm:text-3xl">
              {t(`${k}.pricingCompare.title`)}
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-zinc-600 sm:text-base">
              {t(`${k}.pricingCompare.subtitle`)}
            </p>
            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
              <Card className="rounded-xl border-2 border-blue-600/90 bg-white shadow-md shadow-blue-600/10">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl text-blue-900">{raCol}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm leading-relaxed text-zinc-700">
                  <p className="text-base font-semibold text-zinc-900">
                    {t(`${k}.pricingCompare.raPrice`)}
                  </p>
                  <p>{t(`${k}.pricingCompare.raNote`)}</p>
                </CardContent>
              </Card>
              <Card className="rounded-xl border border-zinc-200 bg-zinc-50/80">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl text-zinc-800">{cpCol}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm leading-relaxed text-zinc-700">
                  <p className="text-base font-semibold text-zinc-900">
                    {t(`${k}.pricingCompare.cpPrice`)}
                  </p>
                  <p>{t(`${k}.pricingCompare.cpNote`)}</p>
                </CardContent>
              </Card>
            </div>
            <p className="mt-6 text-center text-xs text-zinc-500">
              {t(`${k}.pricingCompare.footnote`)}
            </p>
          </div>
        </section>

        <section className={cn("border-b border-zinc-200/60 bg-zinc-50/40", sectionY)}>
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-center text-[1.625rem] font-semibold leading-tight tracking-tight text-zinc-950 sm:text-3xl">
              {t(`${k}.bestFor.title`)}
            </h2>
            <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
              <div>
                <h3 className="text-lg font-semibold text-blue-900">{raCol}</h3>
                <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-zinc-700 sm:text-base">
                  {bestForRa.map((line) => (
                    <li key={line} className="flex gap-2">
                      <Check
                        className="mt-0.5 size-4 shrink-0 text-emerald-600"
                        aria-hidden
                      />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-zinc-800">{cpCol}</h3>
                <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-zinc-700 sm:text-base">
                  {bestForCp.map((line) => (
                    <li key={line} className="flex gap-2">
                      <Minus
                        className="mt-0.5 size-4 shrink-0 text-zinc-400"
                        aria-hidden
                      />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <SeoInternalLinksSection
          title={tLinks("comparisonRelatedTitle")}
          links={related}
          sectionClassName="border-b border-zinc-200/60 bg-white"
        />

        <FinalCtaSection locale={locale} copy={finalCtaCopy} sectionClassName={sectionY} />
      </main>
    </>
  );
}
