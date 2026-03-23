import { getTranslations } from "next-intl/server";

import { Card, CardContent } from "@/components/ui/card";
import { Hammer, Home, Leaf, Sparkles, Wind, Wrench } from "lucide-react";

const industries = [
  { key: "roofing" as const, icon: Home },
  { key: "hvac" as const, icon: Wind },
  { key: "plumbing" as const, icon: Wrench },
  { key: "landscaping" as const, icon: Leaf },
  { key: "cleaning" as const, icon: Sparkles },
  { key: "remodeling" as const, icon: Hammer },
] as const;

export async function IndustryStripSection() {
  const t = await getTranslations("industryStrip");

  return (
    <section
      className="border-b border-zinc-200/60 bg-gradient-to-b from-white via-zinc-50/40 to-zinc-50/90"
      aria-labelledby="industry-strip-heading"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600/90">
            {t("eyebrow")}
          </p>
          <h2
            id="industry-strip-heading"
            className="mt-16 text-[1.375rem] font-semibold leading-snug tracking-tight text-zinc-950 sm:text-2xl sm:leading-tight"
          >
            {t("title")}
          </h2>
          <p className="mt-4 text-pretty text-sm leading-relaxed text-zinc-600 sm:text-base">
            {t("subtitle")}
          </p>
        </div>

        <ul className="mt-12 grid auto-rows-fr grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:mt-14 lg:grid-cols-6 lg:gap-4">
          {industries.map(({ key, icon: Icon }) => (
            <li key={key} className="min-w-0">
              <Card className="h-full border-zinc-200/70 bg-white/90 shadow-sm shadow-zinc-950/[0.04] transition-all duration-300 ease-out hover:border-zinc-300/80 hover:shadow-md hover:shadow-zinc-950/[0.06]">
                <CardContent className="flex h-full flex-col items-center justify-center gap-3 p-0 px-4 py-5 text-center sm:px-5 sm:py-6">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-blue-50/90 text-blue-600 ring-1 ring-blue-600/10">
                    <Icon className="size-5" aria-hidden />
                  </div>
                  <span className="text-sm font-medium leading-snug text-zinc-800">{t(key)}</span>
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
