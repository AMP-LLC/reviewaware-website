import { getTranslations } from "next-intl/server";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getLiteTrialHref, getPlusSignupHref } from "@/lib/marketing-links";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

const liteReviewRequestKeys = ["liteF1"] as const;
const liteReviewPlatformKeys = ["liteF2"] as const;
const liteToolsKeys = ["liteF3", "liteF4"] as const;
const plusReviewRequestKeys = ["plusF1", "plusF2"] as const;
const plusReviewPlatformKeys = ["plusF3"] as const;
const plusToolsKeys = ["plusF4", "plusF5"] as const;
const liteSupportKeys = ["liteSupport1", "liteSupport2", "liteSupport3", "liteSupport4"] as const;

export async function PricingSection({
  locale,
  liteAnnualLeadIn,
  liteCtaChecklist,
  sectionClassName,
}: {
  locale: string;
  /** e.g. industry-specific note shown above the Lite annual value block */
  liteAnnualLeadIn?: string;
  /** Shown under the Lite trial CTA (e.g. reassurance bullets) */
  liteCtaChecklist?: readonly string[];
  sectionClassName?: string;
}) {
  const t = await getTranslations("pricing");

  const trialHref = getLiteTrialHref(locale);
  const plusSignupHref = getPlusSignupHref(locale);

  const defaultLiteCtaChecks = [
    t("liteCtaCheck1"),
    t("liteCtaCheck2"),
    t("liteCtaCheck3"),
  ] as const;
  const liteChecks = liteCtaChecklist ?? defaultLiteCtaChecks;
  const trustChecks = [t("liteCtaCheck1"), t("liteCtaCheck2"), t("liteCtaCheck3")] as const;

  return (
    <section
      id="pricing"
      className={cn(
        "border-b border-zinc-200/60 bg-white py-12 md:py-16 lg:py-24",
        sectionClassName,
      )}
    >
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-4 text-center text-sm font-medium text-muted-foreground">
          {t("resultsLeadIn")}
        </p>
        <h2 className="text-center text-[1.875rem] font-semibold leading-tight tracking-tight text-zinc-950 sm:text-4xl lg:text-[2.625rem]">
          {t("title")}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-center text-base font-medium leading-snug text-zinc-800 sm:text-lg">
          {t("introLine1")}
        </p>
        <p className="mx-auto mt-3 max-w-xl text-center text-sm leading-relaxed text-zinc-600 sm:text-base">
          {t("introLine2")}
        </p>

        <div className="mx-auto mt-12 flex max-w-5xl flex-col items-stretch gap-8 sm:mt-16 sm:gap-10 lg:flex-row lg:items-start lg:justify-center lg:gap-12">
          <div className="relative z-[1] mx-auto w-full max-w-md lg:mx-0 lg:max-w-[24rem] lg:flex-shrink-0">
            <Card className="rounded-xl border border-zinc-200 bg-white pt-6 shadow-sm transition-shadow duration-300 hover:shadow-md sm:pt-7">
              <CardHeader className="space-y-0 px-5 pb-2 pt-5 sm:px-7 sm:pb-2 sm:pt-7">
                <div className="flex items-center justify-between gap-2">
                  <CardTitle className="text-2xl tracking-tight">
                    {t("liteName")}
                  </CardTitle>
                  <span className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-semibold text-zinc-700">
                    {t("liteBadge")}
                  </span>
                </div>
                <CardDescription className="pt-2 text-base text-zinc-600">
                  <span className="text-4xl font-semibold tracking-tight text-zinc-950">
                    $24.99
                  </span>
                  <span className="ml-1 text-sm font-medium text-zinc-500">{t("perMonth")}</span>
                </CardDescription>
                <p className="mt-2 text-sm leading-relaxed text-zinc-700">{t("liteF0")}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {t("annualBillingNote")}
                </p>
                <ul className="mt-3 space-y-1.5 text-xs font-medium text-zinc-600 sm:text-sm">
                  {liteSupportKeys.map((key) => (
                    <li key={key} className="flex items-center gap-2">
                      <span
                        className="size-1.5 shrink-0 rounded-full bg-emerald-500"
                        aria-hidden
                      />
                      {t(key)}
                    </li>
                  ))}
                </ul>
              </CardHeader>
              <CardContent className="space-y-6 px-5 pt-2 sm:space-y-8 sm:px-7">
                <div className="space-y-5">
                  <div>
                    <p className="mb-2 text-xs font-semibold tracking-[0.08em] text-zinc-500 uppercase">
                      {t("featureGroupRequests")}
                    </p>
                    <ul className="space-y-3 text-sm leading-relaxed text-zinc-700">
                      {liteReviewRequestKeys.map((key) => (
                        <li key={key} className="flex gap-2">
                          <Check className="mt-0.5 size-4 shrink-0 text-blue-600" aria-hidden />
                          <span>{t(key)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="mb-2 text-xs font-semibold tracking-[0.08em] text-zinc-500 uppercase">
                      {t("featureGroupPlatforms")}
                    </p>
                    <ul className="space-y-3 text-sm leading-relaxed text-zinc-700">
                      {liteReviewPlatformKeys.map((key) => (
                        <li key={key} className="flex gap-2">
                          <Check className="mt-0.5 size-4 shrink-0 text-blue-600" aria-hidden />
                          <span>{t(key)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="mb-2 text-xs font-semibold tracking-[0.08em] text-zinc-500 uppercase">
                      {t("featureGroupTools")}
                    </p>
                    <ul className="space-y-3 text-sm leading-relaxed text-zinc-700">
                      {liteToolsKeys.map((key) => (
                        <li key={key} className="flex gap-2">
                          <Check className="mt-0.5 size-4 shrink-0 text-blue-600" aria-hidden />
                          <span>{t(key)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {liteAnnualLeadIn ? (
                  <p className="mt-5 text-center text-sm font-medium leading-snug text-zinc-700">
                    {liteAnnualLeadIn}
                  </p>
                ) : null}

                <Button
                  asChild
                  variant="secondary"
                  size="lg"
                  className="h-12 w-full text-base font-semibold"
                >
                  <a href={trialHref}>{t("ctaTrial")}</a>
                </Button>
                {liteChecks.length ? (
                  <ul className="mt-4 space-y-2 text-center text-sm font-medium text-zinc-700">
                    {liteChecks.map((line) => (
                      <li key={line}>✓ {line}</li>
                    ))}
                  </ul>
                ) : null}
                <p className="text-center text-xs text-zinc-500">{t("litePostCta")}</p>
                <p className="mt-2 text-center text-xs text-muted-foreground">
                  {t("billingSwitchNote")}
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="relative mx-auto w-full max-w-md scale-[1.04] rounded-xl border-2 border-blue-600 bg-blue-50/40 shadow-xl shadow-blue-600/20 transition-shadow hover:shadow-xl lg:mx-0 lg:max-w-[24rem]">
            <div className="absolute -top-3 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-full bg-blue-600 px-4 py-1 text-xs font-semibold text-white shadow-md shadow-blue-600/25">
              {t("mostPopular")}
            </div>
            <CardHeader className="px-5 py-5 sm:px-7 sm:py-7">
              <div className="flex items-center justify-between gap-2">
                <CardTitle className="text-xl tracking-tight text-zinc-900">
                  {t("plusName")}
                </CardTitle>
                <span className="rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-700">
                  {t("plusBadge")}
                </span>
              </div>
              <CardDescription className="text-base text-zinc-600">
                <span className="text-4xl font-semibold tracking-tight text-zinc-900">
                  $49.99
                </span>
                <span className="ml-1 text-sm font-medium text-zinc-500">{t("perMonth")}</span>
              </CardDescription>
              <p className="mt-2 text-sm leading-relaxed text-zinc-700">{t("plusValueLine")}</p>
            </CardHeader>
            <CardContent className="space-y-6 px-5 sm:space-y-8 sm:px-7">
              <div className="space-y-5">
                <div>
                  <p className="mb-2 text-xs font-semibold tracking-[0.08em] text-zinc-500 uppercase">
                    {t("featureGroupRequests")}
                  </p>
                  <ul className="space-y-3 text-sm leading-relaxed text-zinc-700">
                    {plusReviewRequestKeys.map((key) => (
                      <li key={key} className="flex gap-2">
                        <Check className="mt-0.5 size-4 shrink-0 text-blue-600" aria-hidden />
                        <span>{t(key)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="mb-2 text-xs font-semibold tracking-[0.08em] text-zinc-500 uppercase">
                    {t("featureGroupPlatforms")}
                  </p>
                  <ul className="space-y-3 text-sm leading-relaxed text-zinc-700">
                    {plusReviewPlatformKeys.map((key) => (
                      <li key={key} className="flex gap-2">
                        <Check className="mt-0.5 size-4 shrink-0 text-blue-600" aria-hidden />
                        <span>{t(key)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="mb-2 text-xs font-semibold tracking-[0.08em] text-zinc-500 uppercase">
                    {t("featureGroupTools")}
                  </p>
                  <ul className="space-y-3 text-sm leading-relaxed text-zinc-700">
                    {plusToolsKeys.map((key) => (
                      <li key={key} className="flex gap-2">
                        <Check className="mt-0.5 size-4 shrink-0 text-blue-600" aria-hidden />
                        <span>{t(key)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <Button
                asChild
                variant="default"
                size="lg"
                className="h-12 w-full text-base font-semibold text-white shadow-lg shadow-blue-600/25 hover:text-white"
              >
                <a href={plusSignupHref}>{t("ctaPlus")}</a>
              </Button>
              <ul className="mt-4 space-y-2 text-center text-sm font-medium text-zinc-600">
                {trustChecks.map((line) => (
                  <li key={line}>✓ {line}</li>
                ))}
              </ul>
              <p className="text-center text-xs leading-relaxed text-zinc-500">
                {t("plusNote")}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
