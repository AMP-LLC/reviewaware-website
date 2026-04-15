"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

export type BillingPeriod = "monthly" | "annual";

export type PricingSectionClientProps = {
  trialHref: string;
  plusSignupHref: string;
  resultsLeadIn: string;
  title: string;
  introLine1: string;
  introLine2: string;
  monthlyLabel: string;
  annualTabLabel: string;
  saveBadge: string;
  perMonthSuffix: string;
  perYearSuffix: string;
  mostPopular: string;
  liteName: string;
  liteBadge: string;
  litePositioningLine: string;
  liteF0: string;
  liteFeatures: readonly string[];
  liteTrustUnderCta: string;
  plusName: string;
  plusBadge: string;
  plusPositioningLine: string;
  plusValueLine: string;
  plusFeatures: readonly string[];
  plusTrustUnderCta: string;
  ctaLabel: string;
  liteAnnualLeadIn?: string;
  sectionClassName?: string;
};

export function PricingSectionClient({
  trialHref,
  plusSignupHref,
  resultsLeadIn,
  title,
  introLine1,
  introLine2,
  monthlyLabel,
  annualTabLabel,
  saveBadge,
  perMonthSuffix,
  perYearSuffix,
  mostPopular,
  liteName,
  liteBadge,
  litePositioningLine,
  liteF0,
  liteFeatures,
  liteTrustUnderCta,
  plusName,
  plusBadge,
  plusPositioningLine,
  plusValueLine,
  plusFeatures,
  plusTrustUnderCta,
  ctaLabel,
  liteAnnualLeadIn,
  sectionClassName,
}: PricingSectionClientProps) {
  const [billing, setBilling] = useState<BillingPeriod>("monthly");
  const isAnnual = billing === "annual";

  return (
    <section
      id="pricing"
      className={cn(
        "border-b border-zinc-200/60 bg-white py-12 md:py-16 lg:py-24",
        sectionClassName,
      )}
    >
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-4 text-center text-sm font-medium text-muted-foreground">{resultsLeadIn}</p>

        <h2 className="text-center text-[1.875rem] font-semibold leading-tight tracking-tight text-zinc-950 sm:text-4xl lg:text-[2.625rem]">
          {title}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-center text-base font-medium leading-snug text-zinc-800 sm:text-lg">
          {introLine1}
        </p>
        <p className="mx-auto mt-3 max-w-xl text-center text-sm leading-relaxed text-zinc-600 sm:text-base">
          {introLine2}
        </p>

        <div
          className="mb-8 mt-6 flex flex-wrap items-center justify-center gap-2"
          role="group"
          aria-label={monthlyLabel + " / " + annualTabLabel}
        >
          <button
            type="button"
            aria-pressed={billing === "monthly"}
            onClick={() => setBilling("monthly")}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
              billing === "monthly"
                ? "border-emerald-600 bg-emerald-600 text-white"
                : "border-zinc-200 bg-transparent text-muted-foreground hover:bg-zinc-50",
            )}
          >
            {monthlyLabel}
          </button>
          <button
            type="button"
            aria-pressed={billing === "annual"}
            onClick={() => setBilling("annual")}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
              billing === "annual"
                ? "border-emerald-600 bg-emerald-600 text-white"
                : "border-zinc-200 bg-transparent text-muted-foreground hover:bg-zinc-50",
            )}
          >
            {annualTabLabel}
          </button>
        </div>

        <div className="mx-auto flex max-w-5xl flex-col items-stretch gap-8 sm:gap-10 lg:flex-row lg:items-start lg:justify-center lg:gap-12">
          <div className="relative z-[1] mx-auto w-full max-w-md lg:mx-0 lg:max-w-[24rem] lg:flex-shrink-0">
            <Card className="rounded-xl border border-zinc-200 bg-white pt-6 shadow-sm transition-shadow duration-300 hover:shadow-md sm:pt-7">
              <CardHeader className="space-y-0 px-5 pb-0 pt-5 sm:px-7 sm:pt-7">
                <div className="flex items-center justify-between gap-2">
                  <CardTitle className="text-2xl tracking-tight">{liteName}</CardTitle>
                  <span className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-semibold text-zinc-700">
                    {liteBadge}
                  </span>
                </div>
                <p className="pt-1 text-sm font-medium text-zinc-700">{litePositioningLine}</p>
                {isAnnual ? (
                  <p className="pt-2 text-xs font-semibold text-emerald-600">{saveBadge}</p>
                ) : null}
                <CardDescription className="pt-2 text-base text-zinc-600">
                  {isAnnual ? (
                    <>
                      <span className="text-4xl font-semibold tracking-tight text-zinc-950">$199</span>
                      <span className="ml-1 text-sm font-medium text-zinc-500">{perYearSuffix}</span>
                    </>
                  ) : (
                    <>
                      <span className="text-4xl font-semibold tracking-tight text-zinc-950">$24.99</span>
                      <span className="ml-1 text-sm font-medium text-zinc-500">{perMonthSuffix}</span>
                    </>
                  )}
                </CardDescription>
                <p className="mt-4 text-sm font-medium leading-snug text-zinc-800">{liteF0}</p>
              </CardHeader>
              <CardContent className="space-y-5 px-5 pb-6 pt-5 sm:space-y-6 sm:px-7 sm:pb-7">
                <ul className="space-y-2.5 text-sm leading-snug text-zinc-700">
                  {liteFeatures.map((line) => (
                    <li key={line} className="flex gap-2.5">
                      <Check className="mt-0.5 size-4 shrink-0 text-blue-600" aria-hidden />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>

                {liteAnnualLeadIn ? (
                  <p className="text-center text-sm leading-snug text-zinc-600">{liteAnnualLeadIn}</p>
                ) : null}

                <Button
                  asChild
                  variant="secondary"
                  size="lg"
                  className="h-12 w-full text-base font-semibold"
                >
                  <a href={trialHref}>{ctaLabel}</a>
                </Button>
                <p className="text-center text-sm text-zinc-600">{liteTrustUnderCta}</p>
              </CardContent>
            </Card>
          </div>

          <Card className="relative mx-auto w-full max-w-md scale-[1.04] rounded-xl border-2 border-blue-600 bg-blue-50/40 shadow-xl shadow-blue-600/20 transition-shadow hover:shadow-xl lg:mx-0 lg:max-w-[24rem]">
            <div className="absolute -top-3 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-full bg-blue-600 px-4 py-1 text-xs font-semibold text-white shadow-md shadow-blue-600/25">
              {mostPopular}
            </div>
            <CardHeader className="space-y-0 px-5 pb-0 pt-8 sm:px-7 sm:pt-9">
              <div className="flex items-center justify-between gap-2">
                <CardTitle className="text-xl tracking-tight text-zinc-900">{plusName}</CardTitle>
                <span className="rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-700">
                  {plusBadge}
                </span>
              </div>
              <p className="pt-1 text-sm font-medium text-zinc-800">{plusPositioningLine}</p>
              {isAnnual ? (
                <p className="pt-2 text-xs font-semibold text-emerald-600">{saveBadge}</p>
              ) : null}
              <CardDescription className="pt-2 text-base text-zinc-600">
                {isAnnual ? (
                  <>
                    <span className="text-4xl font-semibold tracking-tight text-zinc-900">$399</span>
                    <span className="ml-1 text-sm font-medium text-zinc-500">{perYearSuffix}</span>
                  </>
                ) : (
                  <>
                    <span className="text-4xl font-semibold tracking-tight text-zinc-900">$49.99</span>
                    <span className="ml-1 text-sm font-medium text-zinc-500">{perMonthSuffix}</span>
                  </>
                )}
              </CardDescription>
              <p className="mt-4 text-sm font-medium leading-snug text-zinc-800">{plusValueLine}</p>
            </CardHeader>
            <CardContent className="space-y-5 px-5 pb-7 pt-5 sm:space-y-6 sm:px-7">
              <ul className="space-y-2.5 text-sm leading-snug text-zinc-700">
                {plusFeatures.map((line) => (
                  <li key={line} className="flex gap-2.5">
                    <Check className="mt-0.5 size-4 shrink-0 text-blue-600" aria-hidden />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                variant="default"
                size="lg"
                className="h-12 w-full text-base font-semibold text-white shadow-lg shadow-blue-600/25 hover:text-white"
              >
                <a href={plusSignupHref}>{ctaLabel}</a>
              </Button>
              <p className="text-center text-sm text-zinc-600">{plusTrustUnderCta}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
