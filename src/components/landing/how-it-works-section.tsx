import { getTranslations } from "next-intl/server";
import { ClipboardCheck, Send, Star } from "lucide-react";

import { cn } from "@/lib/utils";

const STEP_ICONS = [ClipboardCheck, Send, Star] as const;

export async function HowItWorksSection({
  sectionClassName,
}: {
  sectionClassName?: string;
} = {}) {
  const t = await getTranslations("howItWorks");

  const steps = [
    { titleKey: "step1Title" as const, descKey: "step1Description" as const },
    { titleKey: "step2Title" as const, descKey: "step2Description" as const },
    { titleKey: "step3Title" as const, descKey: "step3Description" as const },
  ] as const;

  return (
    <section
      id="how-it-works"
      className={cn(
        "border-b border-zinc-200/60 bg-white py-12 md:py-16 lg:py-24",
        sectionClassName,
      )}
    >
      <div className="mx-auto max-w-6xl px-6">
        <header className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-[1.875rem] font-semibold leading-tight tracking-tight text-zinc-950 sm:text-4xl lg:text-[2.625rem]">
            {t("title")}
          </h2>
          <p className="mt-3 text-pretty text-base text-muted-foreground sm:text-lg">
            {t("subtitle")}
          </p>
        </header>

        <div className="mt-10 grid grid-cols-1 gap-10 text-center md:grid-cols-3 md:gap-10 lg:mt-14">
          {steps.map(({ titleKey, descKey }, index) => {
            const Icon = STEP_ICONS[index] ?? ClipboardCheck;
            return (
              <div
                key={titleKey}
                className="rounded-xl border border-zinc-200/80 bg-white p-6 shadow-sm"
              >
                <div className="mx-auto flex size-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100">
                  <Icon className="size-6" aria-hidden />
                </div>
                <h3 className="mt-4 text-lg font-semibold tracking-tight text-zinc-950">
                  {t(titleKey)}
                </h3>
                <p className="mt-2 text-pretty text-sm leading-relaxed text-zinc-600 sm:text-base">
                  {t(descKey)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
