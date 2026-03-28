import { getTranslations } from "next-intl/server";

import { Button } from "@/components/ui/button";
import { getLiteTrialHref } from "@/lib/marketing-links";
import { cn } from "@/lib/utils";

export type FinalCtaSectionCopy = {
  headline: string;
  cta: string;
  ctaSubInButton: string;
  sub: string;
  supportingLine?: string;
};

export async function FinalCtaSection({
  locale,
  copy,
  sectionClassName,
}: {
  locale: string;
  copy?: FinalCtaSectionCopy;
  sectionClassName?: string;
}) {
  const t = await getTranslations("finalCta");
  const trialHref = getLiteTrialHref(locale);

  const headline = copy?.headline ?? t("headline");
  const cta = copy?.cta ?? t("cta");
  const ctaSubInButton = copy?.ctaSubInButton ?? t("ctaSubInButton");
  const sub = copy?.sub ?? t("sub");
  const supportingLine = copy?.supportingLine ?? t("supportingLine");

  return (
    <section
      id="trial"
      className={cn(
        "border-b border-blue-700/30 bg-gradient-to-b from-blue-600 via-blue-600 to-blue-800 py-12 text-white md:py-16 lg:py-24",
        sectionClassName,
      )}
    >
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
          {headline}
        </h2>
        <Button
          asChild
          size="lg"
          className="mt-8 h-auto min-h-[3.5rem] flex-col gap-1 bg-white py-3.5 text-blue-700 shadow-xl shadow-blue-950/25 transition-all duration-200 hover:bg-zinc-50 hover:text-blue-800 hover:shadow-2xl sm:mt-12"
        >
          <a href={trialHref} className="flex flex-col items-center gap-1">
            <span className="text-base font-semibold leading-tight">{cta}</span>
            <span className="text-xs font-medium leading-tight text-blue-600/90">
              {ctaSubInButton}
            </span>
          </a>
        </Button>
        <p className="mt-5 text-sm font-medium text-blue-100/95">{sub}</p>
        <p className="mx-auto mt-4 max-w-xl text-pretty text-sm leading-relaxed text-blue-100/85">
          {supportingLine}
        </p>
      </div>
    </section>
  );
}
