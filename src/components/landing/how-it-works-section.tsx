import { getTranslations } from "next-intl/server";

import { Card, CardContent } from "@/components/ui/card";
import { UserPlus, CheckCircle2, Send } from "lucide-react";

const steps = [
  { labelKey: "stepLabel1" as const, titleKey: "step1" as const, icon: UserPlus },
  { labelKey: "stepLabel2" as const, titleKey: "step2" as const, icon: CheckCircle2 },
  { labelKey: "stepLabel3" as const, titleKey: "step3" as const, icon: Send },
];

export async function HowItWorksSection() {
  const t = await getTranslations("howItWorks");

  return (
    <section
      id="how-it-works"
      className="border-b border-zinc-200/60 bg-white py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-[1.875rem] font-semibold leading-tight tracking-tight text-zinc-950 sm:text-4xl lg:text-[2.625rem]">
          {t("title")}
        </h2>
        <div className="mt-10 grid auto-rows-fr gap-5 md:mt-14 md:grid-cols-3 md:gap-6 lg:gap-8">
          {steps.map(({ labelKey, titleKey, icon: Icon }) => (
            <Card
              key={labelKey}
              className="flex h-full min-h-0 flex-col transition-all duration-300 ease-out hover:border-zinc-300/80 hover:shadow-lg hover:shadow-zinc-950/[0.06]"
            >
              <CardContent className="flex min-h-0 flex-1 flex-col justify-start p-0">
                <div className="flex flex-col gap-4 px-6 py-5 sm:px-8 sm:py-6">
                  <div className="inline-flex w-fit items-center rounded-full bg-blue-600 px-3 py-1.5 text-xs font-semibold tracking-tight text-white shadow-sm shadow-blue-600/25 sm:px-3.5 sm:text-sm">
                    {t(labelKey)}
                  </div>
                  <div className="flex flex-row items-start gap-4">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-blue-50/90 text-blue-600 ring-1 ring-blue-600/10">
                      <Icon className="size-5" aria-hidden />
                    </div>
                    <p className="min-w-0 flex-1 text-base font-medium leading-snug text-zinc-800">
                      {t(titleKey)}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
