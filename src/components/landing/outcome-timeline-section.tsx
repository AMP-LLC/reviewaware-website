import { getTranslations } from "next-intl/server";

import { Card, CardContent } from "@/components/ui/card";

const steps = [
  { labelKey: "step1Label" as const, bodyKey: "step1Body" as const },
  { labelKey: "step2Label" as const, bodyKey: "step2Body" as const },
  { labelKey: "step3Label" as const, bodyKey: "step3Body" as const },
  { labelKey: "step4Label" as const, bodyKey: "step4Body" as const },
] as const;

export async function OutcomeTimelineSection() {
  const t = await getTranslations("outcomeTimeline");

  return (
    <section className="border-b border-zinc-200/60 bg-gradient-to-b from-zinc-50/90 to-white py-16 md:py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="mx-auto max-w-3xl text-balance text-center text-[1.875rem] font-semibold leading-tight tracking-tight text-zinc-950 sm:text-4xl lg:text-[2.625rem]">
          {t("title")}
        </h2>

        <div className="relative mt-14 hidden lg:block">
          <div
            className="pointer-events-none absolute left-[6%] right-[6%] top-[0.75rem] z-0 h-px bg-zinc-200/80"
            aria-hidden
          />
          <ol className="relative z-[1] grid list-none grid-cols-4 gap-4">
            {steps.map(({ labelKey, bodyKey }, i) => (
              <li key={labelKey} className="relative flex h-full min-h-[12rem] flex-col">
                <span
                  className="absolute -top-1 left-1/2 z-[2] flex size-8 -translate-x-1/2 items-center justify-center rounded-full border border-white bg-blue-600 text-xs font-bold text-white shadow-md shadow-blue-600/25"
                  aria-hidden
                >
                  {i + 1}
                </span>
                <Card className="mt-4 flex h-full flex-col border-zinc-200/80 bg-white pt-6 shadow-sm">
                  <CardContent className="flex flex-1 flex-col gap-3 px-5 pb-6 text-center sm:px-6">
                    <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">{t(labelKey)}</p>
                    <p className="text-sm leading-relaxed text-zinc-700">{t(bodyKey)}</p>
                  </CardContent>
                </Card>
              </li>
            ))}
          </ol>
        </div>

        <ol className="mt-14 flex list-none flex-col gap-4 lg:hidden">
          {steps.map(({ labelKey, bodyKey }, i) => (
            <li key={labelKey}>
              <Card className="border-zinc-200/80 bg-white shadow-sm">
                <CardContent className="flex gap-4 px-5 py-5 sm:px-6">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white shadow-sm shadow-blue-600/25">
                    {i + 1}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">{t(labelKey)}</p>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-700">{t(bodyKey)}</p>
                  </div>
                </CardContent>
              </Card>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
