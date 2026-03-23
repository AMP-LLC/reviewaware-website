"use client";

import { useEffect, useMemo, useState } from "react";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { cn } from "@/lib/utils";

type DemoSectionProps = {
  trialHref: string;
};

export function DemoSection({ trialHref }: DemoSectionProps) {
  const t = useTranslations("demo");
  const [index, setIndex] = useState(0);
  const reducedMotion = usePrefersReducedMotion();

  const panels = useMemo(
    () => [
      {
        key: "job",
        title: t("panel1Title"),
        body: (
          <div className="flex w-full justify-center">
            <div className="w-full max-w-sm space-y-3 text-left text-sm leading-relaxed">
              <div className="grid grid-cols-[auto_auto] justify-center gap-x-2 border-b border-zinc-100 pb-3">
                <span className="text-zinc-600">{t("customerLabel")}</span>
                <span className="font-medium text-zinc-950">{t("customerName")}</span>
              </div>
              <div className="grid grid-cols-[auto_auto] justify-center gap-x-2">
                <span className="text-zinc-600">{t("serviceLabel")}</span>
                <span className="font-medium text-zinc-950">{t("serviceName")}</span>
              </div>
            </div>
          </div>
        ),
      },
      {
        key: "email",
        title: t("panel2Title"),
        body: (
          <div className="mx-auto w-full max-w-md rounded-xl border border-zinc-200/80 bg-white p-5 text-center text-sm leading-relaxed text-zinc-700 shadow-inner shadow-zinc-950/[0.03]">
            <p className="font-medium text-zinc-950">{t("emailGreeting")}</p>
            <p className="mt-2">{t("emailLine1")}</p>
            <p className="mt-2">{t("emailLine2")}</p>
            <span className="mt-5 inline-block rounded-lg bg-blue-600 px-3.5 py-2 text-xs font-semibold text-white shadow-sm shadow-blue-600/20">
              {t("emailCta")}
            </span>
          </div>
        ),
      },
      {
        key: "click",
        title: t("panel3Title"),
        body: (
          <div className="flex w-full flex-col items-center justify-center gap-4 py-4 text-center">
            <p className="text-sm font-medium text-zinc-950">{t("completed")}</p>
            <div className="flex size-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
              <svg
                className="size-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>
        ),
      },
    ],
    [t]
  );

  useEffect(() => {
    if (reducedMotion) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % panels.length);
    }, 3800);
    return () => window.clearInterval(id);
  }, [reducedMotion, panels.length]);

  const active = panels[index];

  return (
    <section
      id="demo"
      className="border-b border-zinc-200/60 bg-zinc-50/80 bg-[radial-gradient(ellipse_90%_60%_at_50%_-30%,rgba(59,130,246,0.07),transparent)] py-16 md:py-24 lg:py-28"
      aria-labelledby="demo-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600/90">
            {t("introLine")}
          </p>
          <h2
            id="demo-heading"
            className="mt-3 text-[1.75rem] font-semibold tracking-tight text-zinc-950 sm:mt-3.5 sm:text-3xl lg:text-[2.125rem] lg:leading-tight"
          >
            {t("title")}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-zinc-700 sm:text-base">
            {t("subtitle")}
          </p>
        </div>

        <p className="mx-auto mt-6 max-w-2xl text-center text-sm font-medium leading-relaxed text-zinc-800 sm:mt-10 sm:text-base">
          {t("caption")}
        </p>

        <div
          className="relative mx-auto mt-8 w-full max-w-lg sm:mt-10 sm:max-w-xl"
          role="region"
          aria-roledescription="carousel"
          aria-label={t("title")}
        >
          <div
            key={active.key}
            className={cn(
              "flex min-h-[17.75rem] flex-col items-center overflow-hidden rounded-[1.125rem] border bg-white p-5 shadow-md shadow-zinc-950/[0.06] ring-1 ring-zinc-950/[0.03] sm:min-h-[19.25rem] sm:p-7 md:p-8",
              "border-blue-200/90 ring-2 ring-blue-500/20 shadow-blue-950/10"
            )}
          >
            <h3 className="w-full text-center text-lg font-semibold tracking-tight text-zinc-950">
              {active.title}
            </h3>
            <div className="mt-5 flex min-h-[11.25rem] w-full flex-1 flex-col items-center justify-center text-center sm:min-h-[12.5rem]">
              {active.body}
            </div>
          </div>
        </div>

        <div
          className="mt-8 flex justify-center gap-2.5 sm:mt-10"
          role="tablist"
          aria-label="Demo step"
        >
          {panels.map((p, i) => (
            <button
              key={p.key}
              type="button"
              role="tab"
              aria-selected={i === index}
              className={cn(
                "h-2 rounded-full transition-all duration-300 ease-out",
                i === index
                  ? "w-9 bg-blue-600 shadow-sm shadow-blue-600/30"
                  : "w-2 bg-zinc-300/90 hover:bg-zinc-400"
              )}
              onClick={() => setIndex(i)}
              aria-label={t("stepAria", { n: i + 1 })}
            />
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-xl text-center sm:mt-16">
          <h3 className="text-xl font-semibold tracking-tight text-zinc-950 sm:text-2xl">
            {t("ctaHeadline")}
          </h3>
          <Button
            asChild
            size="lg"
            className="mt-6 h-[3.35rem] w-full min-w-[220px] px-10 text-base shadow-lg shadow-blue-600/20 sm:w-auto"
          >
            <a href={trialHref}>{t("ctaButton")}</a>
          </Button>
          <p className="mt-4 text-sm text-muted-foreground">{t("ctaMicro")}</p>
        </div>
      </div>
    </section>
  );
}
