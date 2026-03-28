import { getTranslations } from "next-intl/server";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const statKeys = [
  { id: "1", statKey: "stat1", textKey: "stat1Text" },
  { id: "2", statKey: "stat2", textKey: "stat2Text" },
  { id: "3", statKey: "stat3", textKey: "stat3Text" },
] as const;

export async function ReviewResultsSection({
  sectionClassName,
  eyebrow,
}: {
  sectionClassName?: string;
  /** Overrides `reviewResults.eyebrow` when set */
  eyebrow?: string;
} = {}) {
  const t = await getTranslations("reviewResults");
  const label = eyebrow ?? t("eyebrow");

  return (
    <section
      className={cn(
        "border-b border-zinc-200/60 bg-gradient-to-b from-blue-50 to-indigo-100 py-12 md:py-16 lg:py-24",
        sectionClassName,
      )}
    >
      <div className="mx-auto max-w-6xl px-6">
        {label ? (
          <p className="text-center text-xs font-semibold uppercase tracking-[0.14em] text-blue-600">
            {label}
          </p>
        ) : null}
        <h2
          className={cn(
            "text-center text-[1.875rem] font-semibold leading-tight tracking-tight text-zinc-950 sm:text-4xl lg:text-[2.625rem]",
            label ? "mt-3" : "",
          )}
        >
          {t("title")}
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-pretty text-center text-xs leading-relaxed text-zinc-500 sm:mt-7 sm:text-sm">
          {t("credibilitySupport")}
        </p>
        <div className="mt-12 grid auto-rows-fr gap-8 sm:mt-14 md:grid-cols-3 md:gap-10">
          {statKeys.map(({ id, statKey, textKey }) => (
            <Card
              key={id}
              className="flex h-full min-h-0 flex-col rounded-xl border border-gray-200 bg-white text-center shadow-sm transition-shadow hover:shadow-md"
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
        <p className="mx-auto mt-10 max-w-2xl text-center text-xs leading-relaxed text-zinc-500 sm:mt-12">
          {t("footnote")}
        </p>
      </div>
    </section>
  );
}
