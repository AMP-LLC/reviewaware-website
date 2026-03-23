import { Fragment } from "react";
import { getTranslations } from "next-intl/server";

import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, Send, Star } from "lucide-react";

const icons = [CheckCircle2, Send, Star] as const;
const stepKeys = ["step1", "step2", "step3"] as const;

export async function BuiltForServiceSection() {
  const t = await getTranslations("builtForService");

  return (
    <section className="border-b border-zinc-200/60 bg-zinc-50/90 py-16 md:py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-[1.875rem] font-semibold leading-tight tracking-tight text-zinc-950 sm:text-4xl lg:text-[2.625rem]">
          {t("title")}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-center text-base font-medium leading-snug text-zinc-800 sm:text-lg">
          {t("subtitle")}
        </p>
        <p className="mx-auto mt-6 max-w-2xl text-center text-sm leading-relaxed text-zinc-600 sm:text-base">
          {t("intro")}
        </p>

        <ul className="mx-auto mt-8 max-w-xl space-y-2 text-center text-sm font-medium text-zinc-700 sm:text-base">
          <li>{t("bullet1")}</li>
          <li>{t("bullet2")}</li>
          <li>{t("bullet3")}</li>
        </ul>

        <div className="mt-14 flex flex-col items-stretch gap-3 lg:flex-row lg:items-center lg:justify-center lg:gap-2">
          {stepKeys.map((key, i) => {
            const Icon = icons[i];
            return (
              <Fragment key={key}>
                <Card className="flex min-h-[7.5rem] flex-1 border-zinc-200/80 bg-white shadow-sm lg:min-h-0 lg:max-w-[15rem] lg:flex-initial">
                  <CardContent className="flex flex-1 flex-col items-center justify-center gap-3 px-5 py-6 text-center sm:px-6">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-blue-50/90 text-blue-600 ring-1 ring-blue-600/10">
                      <Icon className="size-5" aria-hidden />
                    </div>
                    <p className="text-sm font-semibold leading-snug text-zinc-950 sm:text-base">{t(key)}</p>
                  </CardContent>
                </Card>
                {i < stepKeys.length - 1 && (
                  <div
                    className="flex shrink-0 items-center justify-center py-0.5 text-zinc-400 lg:px-1 lg:py-0"
                    aria-hidden
                  >
                    <ArrowRight className="hidden size-6 lg:block" />
                    <span className="text-lg font-light leading-none lg:hidden">↓</span>
                  </div>
                )}
              </Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
}
