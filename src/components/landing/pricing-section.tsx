import { getLocale, getTranslations } from "next-intl/server";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getLiteTrialHref } from "@/lib/marketing-links";
import { Check } from "lucide-react";

import { PlusWaitlistDialog } from "./plus-waitlist-dialog";

const liteKeys = ["liteF1", "liteF2", "liteF3", "liteF4"] as const;
const plusKeys = ["plusF1", "plusF2", "plusF3", "plusF4"] as const;
const liteSupportKeys = ["liteSupport1", "liteSupport2", "liteSupport3"] as const;

export async function PricingSection() {
  const t = await getTranslations("pricing");
  const locale = await getLocale();

  const trialHref = getLiteTrialHref(locale);

  const waitlistCopy = {
    triggerLabel: t("ctaWaitlist"),
    title: t("waitlistModalTitle"),
    description: t("waitlistModalDescription"),
    emailLabel: t("waitlistEmailLabel"),
    emailPlaceholder: t("waitlistEmailPlaceholder"),
    submitLabel: t("waitlistSubmit"),
    cancelLabel: t("waitlistCancel"),
    submittingLabel: t("waitlistSubmitting"),
    successMessage: t("waitlistSuccess"),
    errorMessage: t("waitlistError"),
    configErrorMessage: t("waitlistConfigError"),
    emailInvalid: t("waitlistEmailInvalid"),
    doneLabel: t("waitlistDone"),
    closeAriaLabel: t("waitlistCloseAria"),
  };

  return (
    <section
      id="pricing"
      className="border-b border-zinc-200/60 bg-zinc-50/90 py-24 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-[1.875rem] font-semibold leading-tight tracking-tight text-zinc-950 sm:text-4xl lg:text-[2.625rem]">
          {t("title")}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-center text-base font-medium leading-snug text-zinc-800 sm:text-lg">
          {t("introLine1")}
        </p>
        <p className="mx-auto mt-3 max-w-xl text-center text-sm leading-relaxed text-zinc-600 sm:text-base">
          {t("introLine2")}
        </p>

        <div className="mx-auto mt-16 flex max-w-5xl flex-col items-stretch gap-10 lg:flex-row lg:items-start lg:justify-center lg:gap-12">
          <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-[26rem] lg:flex-shrink-0">
            <div className="absolute -top-3 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-full bg-blue-600 px-4 py-1 text-xs font-semibold text-white shadow-md shadow-blue-600/25">
              {t("mostPopular")}
            </div>
            <Card className="border-2 border-blue-600 pt-7 shadow-2xl shadow-blue-600/20 ring-2 ring-blue-600/15 transition-all duration-300 ease-out hover:shadow-2xl hover:shadow-blue-600/25 lg:scale-[1.02]">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between gap-2">
                  <CardTitle className="text-2xl tracking-tight">
                    {t("liteName")}
                  </CardTitle>
                  <span className="rounded-full bg-blue-600 px-2.5 py-0.5 text-xs font-semibold text-white shadow-sm shadow-blue-600/20">
                    {t("liteBadge")}
                  </span>
                </div>
                <p className="mt-2 text-center text-sm leading-relaxed text-zinc-600">
                  {t("liteValueLine")}
                </p>
                <CardDescription className="pt-2 text-base text-zinc-600">
                  <span className="text-3xl font-semibold tracking-tight text-zinc-950">
                    $24.99
                  </span>
                  <span className="text-zinc-500"> {t("perMonth")}</span>
                </CardDescription>
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
              <CardContent className="space-y-8 pt-2">
                <ul className="space-y-3.5 text-sm leading-relaxed text-zinc-700">
                  {liteKeys.map((key) => (
                    <li key={key} className="flex gap-2">
                      <Check
                        className="mt-0.5 size-4 shrink-0 text-blue-600"
                        aria-hidden
                      />
                      <span>{t(key)}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  size="lg"
                  className="h-12 w-full text-base shadow-lg shadow-blue-600/20"
                >
                  <a href={trialHref}>{t("ctaTrial")}</a>
                </Button>
              </CardContent>
            </Card>
          </div>

          <Card className="relative mx-auto w-full max-w-md border-zinc-200/80 bg-zinc-100/50 opacity-[0.92] lg:mx-0 lg:max-w-[24rem] lg:translate-y-2">
            <CardHeader>
              <div className="flex items-center justify-between gap-2">
                <CardTitle className="text-xl tracking-tight text-zinc-600">
                  {t("plusName")}
                </CardTitle>
                <span className="rounded-full bg-zinc-200/90 px-2.5 py-0.5 text-xs font-semibold text-zinc-600">
                  {t("plusBadge")}
                </span>
              </div>
              <CardDescription className="text-base text-zinc-500">
                <span className="text-2xl font-semibold tracking-tight text-zinc-500">
                  $49.99
                </span>
                <span> {t("perMonth")}</span>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <ul className="space-y-3.5 text-sm leading-relaxed text-zinc-500">
                {plusKeys.map((key) => (
                  <li key={key} className="flex gap-2">
                    <Check
                      className="mt-0.5 size-4 shrink-0 text-zinc-400"
                      aria-hidden
                    />
                    <span>{t(key)}</span>
                  </li>
                ))}
              </ul>
              <PlusWaitlistDialog locale={locale} copy={waitlistCopy} />
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
