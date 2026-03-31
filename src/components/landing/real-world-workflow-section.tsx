import { getTranslations } from "next-intl/server";

import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, QrCode, Send } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type RealWorldWorkflowStep = {
  step: string;
  title: string;
  body: string;
  icon: LucideIcon;
};

export async function RealWorldWorkflowSection({
  sectionTitle,
  steps,
  variant = "default",
}: {
  sectionTitle?: string;
  steps?: RealWorldWorkflowStep[];
  variant?: "default" | "numbered";
} = {}) {
  const t = await getTranslations("realWorldWorkflow");

  const resolvedSectionTitle = sectionTitle ?? t("title");
  const resolvedSteps =
    steps ??
    ([
      {
        step: t("step1Label"),
        title: t("step1Title"),
        body: t("step1Body"),
        icon: CheckCircle2,
      },
      {
        step: t("step2Label"),
        title: t("step2Title"),
        body: t("step2Body"),
        icon: QrCode,
      },
      {
        step: t("step3Label"),
        title: t("step3Title"),
        body: t("step3Body"),
        icon: Send,
      },
    ] satisfies RealWorldWorkflowStep[]);

  const isNumbered = variant === "numbered";

  return (
    <section id="workflow" className="border-b border-zinc-200/60 bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div id="demo" aria-hidden />
        <h2 className="mx-auto max-w-3xl text-balance text-center text-[1.875rem] font-semibold leading-tight tracking-tight text-zinc-950 sm:text-4xl lg:text-[2.625rem]">
          {resolvedSectionTitle}
        </h2>
        <div
          className={
            isNumbered
              ? "mt-16 grid gap-10 md:mt-20 md:grid-cols-3 md:gap-12"
              : "mt-14 grid gap-8 md:grid-cols-3 md:gap-10"
          }
        >
          {resolvedSteps.map(({ step, title, body, icon: Icon }, index) =>
            isNumbered ? (
              <Card
                className="rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md"
                key={step}
              >
                <CardContent className="space-y-5 p-7 sm:space-y-6 sm:p-10">
                  <div className="flex items-start gap-5">
                    <span
                      className="select-none text-4xl font-bold tabular-nums leading-none tracking-tight text-blue-600 sm:text-5xl"
                      aria-hidden
                    >
                      {index + 1}
                    </span>
                    <div className="min-w-0 flex-1 space-y-5">
                      <div className="flex items-center gap-4">
                        <div className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100">
                          <Icon className="size-7" aria-hidden />
                        </div>
                        <h3 className="text-balance text-xl font-semibold tracking-tight text-zinc-950 sm:text-2xl">
                          {title}
                        </h3>
                      </div>
                      <p className="text-pretty text-sm leading-relaxed text-zinc-600 sm:text-base">
                        {body}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card
                className="rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md"
                key={step}
              >
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                      <Icon className="size-5" aria-hidden />
                    </div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-600">{step}</p>
                  </div>
                  <h3 className="mt-5 text-xl font-semibold tracking-tight text-zinc-950">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-600 sm:text-base">{body}</p>
                </CardContent>
              </Card>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
