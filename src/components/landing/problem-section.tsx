import { getTranslations } from "next-intl/server";

import { Card, CardContent } from "@/components/ui/card";
import { UserX, Wrench, Unplug } from "lucide-react";

const icons = [UserX, Wrench, Unplug] as const;
const itemKeys = ["item1", "item2", "item3"] as const;

export async function ProblemSection() {
  const t = await getTranslations("problem");

  return (
    <section className="border-b border-zinc-200/60 bg-white py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="mx-auto max-w-3xl text-balance text-center text-[1.875rem] font-semibold leading-tight tracking-tight text-zinc-950 sm:text-4xl lg:text-[2.625rem] lg:leading-[1.15]">
          {t("title")}
        </h2>
        <div className="mt-14 grid auto-rows-fr gap-5 sm:grid-cols-3 sm:gap-6">
          {itemKeys.map((key, i) => {
            const Icon = icons[i];
            return (
              <Card
                key={key}
                className="flex h-full min-h-0 flex-col shadow-none transition-all duration-300 ease-out hover:border-zinc-300/80 hover:shadow-lg hover:shadow-zinc-950/[0.06]"
              >
                <CardContent className="flex min-h-0 flex-1 flex-col justify-start p-0">
                  <div className="flex flex-row items-start gap-4 px-6 py-5 text-left sm:px-7 sm:py-6">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-zinc-100/90 text-zinc-700 ring-1 ring-zinc-950/[0.04]">
                      <Icon className="size-5" aria-hidden />
                    </div>
                    <p className="min-w-0 flex-1 text-base font-medium leading-snug text-zinc-800">
                      {t(key)}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
