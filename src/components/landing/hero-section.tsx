import { getTranslations } from "next-intl/server";

import { Button } from "@/components/ui/button";
import { getLiteTrialHref, getLiveDemoHref } from "@/lib/marketing-links";

export type HeroCtaLayout = "threeButtons" | "trialDemoPlusHowLink";

export type HeroSectionCopy = {
  headlineLine1: string;
  headlineLine2: string;
  subtitleLine1: string;
  subtitleLine2?: string;
  ctaPrimary: string;
  ctaSecondary: string;
  /** Live demo on app.reviewaware.com */
  ctaDemo?: string;
  /** Shown below primary/secondary CTAs, before reassurance chips */
  credibilityLine?: string;
};

export async function HeroSection({
  locale,
  copy,
  ctaLayout = "threeButtons",
}: {
  locale: string;
  copy?: HeroSectionCopy;
  /** Home page: trial + demo buttons, "See how it works" as text link. */
  ctaLayout?: HeroCtaLayout;
}) {
  const t = await getTranslations("hero");
  const trialHref = getLiteTrialHref(locale);
  const demoHref = getLiveDemoHref(locale);

  const headlineLine1 = copy?.headlineLine1 ?? t("headlineLine1");
  const headlineLine2 = copy?.headlineLine2 ?? t("headlineLine2");
  const subtitleLine1 = copy?.subtitleLine1 ?? t("subtitleLine1");
  const subtitleLine2 = copy?.subtitleLine2 ?? t("subtitleLine2");
  const ctaPrimary = copy?.ctaPrimary ?? t("ctaPrimary");
  const ctaSecondary = copy?.ctaSecondary ?? t("ctaSecondary");
  const ctaDemo = copy?.ctaDemo ?? t("ctaDemo");
  const credibilityLine = copy?.credibilityLine;

  const qrSrc =
    `https://api.qrserver.com/v1/create-qr-code/?size=280x280&margin=2&data=${encodeURIComponent(demoHref)}`;

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
          <h1 className="mx-auto mt-6 max-w-[min(100%,40rem)] text-balance text-4xl font-semibold leading-[1.2] tracking-tight text-zinc-950 sm:max-w-[min(100%,44rem)] md:text-5xl md:leading-[1.15]">
            <span className={headlineLine2 ? "block" : "inline"}>{headlineLine1}</span>
            {headlineLine2 ? (
              <span className="mt-1 block sm:mt-1.5">{headlineLine2}</span>
            ) : null}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-zinc-700 sm:text-xl sm:leading-relaxed">
            <span className="block">{subtitleLine1}</span>
            {subtitleLine2 ? <span className="block">{subtitleLine2}</span> : null}
          </p>
          {ctaLayout === "trialDemoPlusHowLink" ? (
            <div className="mx-auto mt-8 flex w-full max-w-xl flex-col items-center sm:max-w-2xl">
              <div className="flex w-full flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4">
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
                  className="h-12 w-full min-w-[200px] border border-blue-200 bg-white px-8 text-base font-semibold text-blue-700 shadow-sm hover:border-blue-300 hover:bg-blue-50/80 sm:w-auto"
                >
                  <a href={demoHref} target="_blank" rel="noopener noreferrer">
                    {ctaDemo}
                  </a>
                </Button>
              </div>
              <p className="mt-2 text-center">
                <a
                  href="#how-it-works"
                  className="inline-block text-sm font-medium text-zinc-500 underline decoration-zinc-300 underline-offset-4 transition-colors hover:text-zinc-700 hover:decoration-zinc-400"
                >
                  {ctaSecondary}
                </a>
              </p>
            </div>
          ) : (
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
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
                <a href="#how-it-works">{ctaSecondary}</a>
              </Button>
              <Button
                asChild
                variant="secondary"
                size="lg"
                className="h-12 w-full min-w-[200px] border border-blue-200 bg-white px-8 text-base font-semibold text-blue-700 shadow-sm hover:border-blue-300 hover:bg-blue-50/80 sm:w-auto"
              >
                <a href={demoHref} target="_blank" rel="noopener noreferrer">
                  {ctaDemo}
                </a>
              </Button>
            </div>
          )}
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
                {t(key)}
              </span>
            ))}
          </div>

          <div
            className="mx-auto mt-10 w-full max-w-lg md:mt-12"
            aria-labelledby="hero-qr-demo-heading"
          >
            <div className="rounded-xl border border-zinc-200/80 bg-muted/40 p-6 text-center shadow-md shadow-zinc-900/5 ring-1 ring-zinc-200/40 sm:p-7">
              <p className="inline-flex items-center justify-center rounded-full bg-blue-50 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-blue-900 ring-2 ring-blue-200/90">
                {t("qrDemoBadge")}
              </p>
              <h2
                id="hero-qr-demo-heading"
                className="mt-4 text-balance text-xl font-semibold leading-snug tracking-tight text-zinc-950 sm:text-2xl"
              >
                {t("qrDemoHeadline")}
              </h2>
              <p className="mx-auto mt-3 max-w-md text-pretty text-sm leading-relaxed text-zinc-600 sm:text-base">
                {t("qrDemoSubheadline")}
              </p>
              <div className="mt-6 flex justify-center">
                <a
                  href={demoHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element -- external QR API; not in next/image remotePatterns */}
                  <img
                    src={qrSrc}
                    alt={t("qrDemoAlt")}
                    width={280}
                    height={280}
                    className="h-[200px] w-[200px] max-w-[92vw] rounded-lg border border-zinc-200/90 bg-white object-contain shadow-sm sm:h-[220px] sm:w-[220px] md:h-[250px] md:w-[250px] lg:h-[260px] lg:w-[260px]"
                  />
                </a>
              </div>
              <p className="mt-4 text-sm font-semibold text-blue-900">{t("qrDemoHelper")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

