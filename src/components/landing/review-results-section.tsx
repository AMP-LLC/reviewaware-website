import { getTranslations } from "next-intl/server";

import { Card, CardContent } from "@/components/ui/card";

const stats = [
  { statKey: "stat1" as const, textKey: "stat1Text" as const },
  { statKey: "stat2" as const, textKey: "stat2Text" as const },
  { statKey: "stat3" as const, textKey: "stat3Text" as const },
] as const;

export async function ReviewResultsSection() {
  const t = await getTranslations("reviewResults");

  return (
    <section className="border-b border-zinc-200/60 bg-gradient-to-b from-white to-zinc-50/90 py-16 md:py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-[1.875rem] font-semibold leading-tight tracking-tight text-zinc-950 sm:text-4xl lg:text-[2.625rem]">
          {t("title")}
        </h2>
        <div className="mt-14 grid auto-rows-fr gap-6 md:grid-cols-3 md:gap-6 lg:gap-8">
          {stats.map(({ statKey, textKey }) => (
            <Card
              key={statKey}
              className="flex h-full min-h-0 flex-col border-zinc-200/80 bg-white text-center shadow-sm transition-all duration-300 ease-out hover:border-zinc-300/80 hover:shadow-md hover:shadow-zinc-950/[0.06]"
            >
              <CardContent className="flex min-h-0 flex-1 flex-col justify-center gap-4 px-6 py-8 sm:px-8 sm:py-10">
                <p className="text-2xl font-semibold leading-tight tracking-tight text-blue-600 sm:text-3xl lg:text-[1.75rem] lg:leading-snug">
                  {t(statKey)}
                </p>
                <p className="text-sm leading-relaxed text-zinc-600 sm:text-base">{t(textKey)}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
