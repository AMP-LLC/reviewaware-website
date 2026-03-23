import { getTranslations } from "next-intl/server";

import { Button } from "@/components/ui/button";
import { getLiteTrialHref } from "@/lib/marketing-links";

export async function FinalCtaSection({ locale }: { locale: string }) {
  const t = await getTranslations("finalCta");
  const trialHref = getLiteTrialHref(locale);

  return (
    <section
      id="trial"
      className="border-b border-blue-700/30 bg-gradient-to-b from-blue-600 via-blue-600 to-blue-800 py-24 text-white md:py-32"
    >
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-[1.75rem] font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[2.5rem] lg:leading-snug">
          {t("headline")}
        </h2>
        <Button
          asChild
          size="lg"
          className="mt-8 h-auto min-h-[3.5rem] flex-col gap-1 bg-white py-3.5 text-blue-700 shadow-xl shadow-blue-950/25 transition-all duration-200 hover:bg-zinc-50 hover:text-blue-800 hover:shadow-2xl sm:mt-12"
        >
          <a href={trialHref} className="flex flex-col items-center gap-1">
            <span className="text-base font-semibold leading-tight">{t("cta")}</span>
            <span className="text-xs font-medium leading-tight text-blue-600/90">
              {t("ctaSubInButton")}
            </span>
          </a>
        </Button>
        <p className="mt-5 text-sm font-medium text-blue-100/95">{t("sub")}</p>
      </div>
    </section>
  );
}
