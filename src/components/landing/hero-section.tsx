import { getTranslations } from "next-intl/server";

import { Button } from "@/components/ui/button";
import { getLiteTrialHref } from "@/lib/marketing-links";

export async function HeroSection({ locale }: { locale: string }) {
  const t = await getTranslations("hero");
  const trialHref = getLiteTrialHref(locale);

  return (
    <section className="border-b border-zinc-200/60 bg-gradient-to-b from-white via-white to-zinc-50/60">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 md:py-24 lg:px-8 lg:py-36">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-balance text-[1.7rem] font-semibold leading-[1.12] tracking-tight text-zinc-950 sm:text-5xl sm:leading-[1.08] lg:text-6xl lg:leading-[1.05] xl:text-[3.5rem]">
            <span className="block">{t("headlineLine1")}</span>
            <span className="mt-1 block sm:mt-1.5">{t("headlineLine2")}</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-zinc-700 sm:mt-8 sm:text-xl sm:leading-relaxed">
            {t("subtitle")}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-12 sm:flex-row sm:gap-4">
            <Button
              asChild
              size="lg"
              className="h-[3.35rem] w-full min-w-[220px] px-10 text-base shadow-lg shadow-blue-600/20 sm:w-auto"
            >
              <a href={trialHref}>{t("ctaPrimary")}</a>
            </Button>
            <Button asChild variant="secondary" size="lg" className="w-full min-w-[200px] sm:w-auto">
              <a href="#demo">{t("ctaSecondary")}</a>
            </Button>
          </div>
          <p className="mt-4 text-center text-sm font-medium text-zinc-600">{t("reassuranceLine")}</p>
          <p className="mt-3 text-center text-sm text-muted-foreground">{t("socialProofLine")}</p>
        </div>
      </div>
    </section>
  );
}
