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
          <div className="space-y-3 text-left text-sm leading-relaxed">
            <div className="flex justify-between gap-4 border-b border-zinc-100 pb-3">
              <span className="text-zinc-600">{t("customerLabel")}</span>
              <span className="font-medium text-zinc-950">{t("customerName")}</span>
            </div>
            <div className="flex justify-between gap-4">
              <span className="text-zinc-600">{t("serviceLabel")}</span>
              <span className="font-medium text-zinc-950">{t("serviceName")}</span>
            </div>
          </div>
        ),
      },
      {
        key: "email",
        title: t("panel2Title"),
        body: (
          <div className="rounded-xl border border-zinc-200/80 bg-white p-5 text-left text-sm leading-relaxed text-zinc-700 shadow-inner shadow-zinc-950/[0.03]">
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
          <div className="flex flex-col items-center justify-center gap-2 py-6 text-center">
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
            <p className="text-sm font-medium text-zinc-950">{t("completed")}</p>
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

  return (
    <section
      id="demo"
      className="border-b border-zinc-200/60 bg-zinc-50/80 bg-[radial-gradient(ellipse_90%_60%_at_50%_-30%,rgba(59,130,246,0.07),transparent)] py-16 md:py-24 lg:py-28"
      aria-labelledby="demo-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="demo-heading"
            className="text-[1.75rem] font-semibold tracking-tight text-zinc-950 sm:text-3xl lg:text-[2.125rem] lg:leading-tight"
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

        <div className="mx-auto mt-6 grid w-full max-w-lg justify-items-stretch gap-5 sm:mt-8 sm:max-w-4xl sm:gap-7 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-stretch lg:gap-5">
          {panels.map((p, i) => (
            <div key={p.key} className="contents lg:block">
              <div
                className={cn(
                  "relative mx-auto w-full max-w-md overflow-hidden rounded-[1.125rem] border bg-white p-5 shadow-md shadow-zinc-950/[0.06] ring-1 ring-zinc-950/[0.03] transition-all duration-500 ease-out sm:p-7 md:p-8 lg:mx-0 lg:max-w-none",
                  i === index
                    ? "border-blue-200/90 ring-2 ring-blue-500/25 shadow-blue-950/10"
                    : "border-zinc-200/70 opacity-[0.72] lg:opacity-100"
                )}
              >
                <h3 className="text-lg font-semibold tracking-tight text-zinc-950">
                  {p.title}
                </h3>
                <div
                  className={cn(
                    "mt-5 transition-opacity duration-500",
                    i === index ? "opacity-100" : "opacity-90"
                  )}
                >
                  {p.body}
                </div>
              </div>
              {i < panels.length - 1 && (
                <div
                  className="hidden items-center justify-center lg:flex"
                  aria-hidden
                >
                  <span className="text-lg font-light tracking-wide text-zinc-400">
                    →
                  </span>
                </div>
              )}
            </div>
          ))}
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
