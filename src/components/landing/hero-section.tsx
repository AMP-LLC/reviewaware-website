import { getTranslations } from "next-intl/server";

import { Button } from "@/components/ui/button";
import { getLiteTrialHref } from "@/lib/marketing-links";

export type HeroSectionCopy = {
  headlineLine1: string;
  headlineLine2: string;
  subtitleLine1: string;
  subtitleLine2?: string;
  ctaPrimary: string;
  ctaSecondary: string;
  /** Shown below primary/secondary CTAs, before reassurance chips */
  credibilityLine?: string;
};

export async function HeroSection({
  locale,
  copy,
}: {
  locale: string;
  copy?: HeroSectionCopy;
}) {
  const t = await getTranslations("hero");
  const trialHref = getLiteTrialHref(locale);

  const headlineLine1 = copy?.headlineLine1 ?? t("headlineLine1");
  const headlineLine2 = copy?.headlineLine2 ?? t("headlineLine2");
  const subtitleLine1 = copy?.subtitleLine1 ?? t("subtitleLine1");
  const subtitleLine2 = copy?.subtitleLine2 ?? t("subtitleLine2");
  const ctaPrimary = copy?.ctaPrimary ?? t("ctaPrimary");
  const ctaSecondary = copy?.ctaSecondary ?? t("ctaSecondary");
  const credibilityLine = copy?.credibilityLine;

  return (
    <section className="relative overflow-hidden border-b border-zinc-200/60 bg-gradient-to-b from-white to-blue-50">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-10 size-80 rounded-full bg-blue-500/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-2 size-72 rounded-full bg-sky-300/20 blur-3xl"
      />
      <div className="mx-auto max-w-6xl px-6 py-32">
        <div className="relative mx-auto max-w-4xl text-center">
          <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.15] tracking-tight text-zinc-950 md:text-5xl md:leading-[1.1]">
            <span className="block">{headlineLine1}</span>
            {headlineLine2 ? (
              <span className="mt-1 block sm:mt-1.5">{headlineLine2}</span>
            ) : null}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-zinc-700 sm:text-xl sm:leading-relaxed">
            <span className="block">{subtitleLine1}</span>
            {subtitleLine2 ? <span className="block">{subtitleLine2}</span> : null}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Button
              asChild
              size="lg"
              className="h-12 w-full min-w-[220px] px-8 text-base shadow-lg shadow-blue-600/25 transition duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-600/30 sm:w-auto"
            >
              <a href={trialHref}>{ctaPrimary}</a>
            </Button>
            <Button
              asChild
              variant="secondary"
              size="lg"
              className="h-12 w-full min-w-[200px] border border-zinc-300 bg-white/90 px-8 sm:w-auto"
            >
              <a href="#demo">{ctaSecondary}</a>
            </Button>
          </div>
          <p className="mt-4 text-center text-sm text-muted-foreground">{t("socialProofLine")}</p>
          {credibilityLine ? (
            <p className="mx-auto mt-5 max-w-xl text-pretty text-sm font-medium leading-relaxed text-zinc-600 sm:text-base">
              {credibilityLine}
            </p>
          ) : null}
          <div className="mx-auto mt-6 flex max-w-md flex-wrap justify-center gap-3 sm:max-w-none sm:gap-3.5">
            {(["reassuranceChip1", "reassuranceChip2", "reassuranceChip3"] as const).map((key) => (
              <span
                key={key}
                className="inline-flex items-center rounded-full border border-blue-100 bg-white px-5 py-2.5 text-sm font-semibold text-primary shadow-sm"
              >
                {key === "reassuranceChip3" ? "Be Review-Aware in 5 Minutes" : t(key)}
              </span>
            ))}
          </div>

          <div className="mx-auto mt-8 w-full max-w-sm">
            <div className="rounded-xl border border-zinc-200/80 bg-white/90 p-4 shadow-sm shadow-zinc-900/10 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="grid size-12 place-items-center rounded-lg bg-blue-50 ring-1 ring-blue-100">
                  <div className="grid grid-cols-3 gap-0.5">
                    {Array.from({ length: 9 }).map((_, i) => (
                      <span key={i} className="size-1.5 rounded-[2px] bg-blue-600/85" />
                    ))}
                  </div>
                </div>
                <div className="flex-1 space-y-2 text-left">
                  <div className="h-2.5 w-28 rounded bg-zinc-200" />
                  <div className="h-2.5 w-20 rounded bg-zinc-200/80" />
                </div>
                <div className="h-7 w-20 rounded-md bg-blue-600/90 shadow-sm" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

