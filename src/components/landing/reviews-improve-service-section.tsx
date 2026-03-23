import { getTranslations } from "next-intl/server";

import { Card, CardContent } from "@/components/ui/card";

export async function ReviewsImproveServiceSection() {
  const t = await getTranslations("reviewsImproveService");
  const bodyKeys = ["body1", "body2", "body3"] as const;

  return (
    <section
      className="border-b border-zinc-200/60 bg-gradient-to-b from-zinc-50/50 to-white py-24 md:py-32"
      aria-labelledby="reviews-improve-service-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Card className="mx-auto max-w-5xl overflow-hidden border-zinc-200/80 bg-gradient-to-b from-white to-zinc-50/60 shadow-lg shadow-zinc-950/[0.07] ring-1 ring-zinc-950/[0.03]">
          <CardContent className="px-6 py-9 text-center sm:px-12 sm:py-11 lg:px-14 lg:py-12">
            <p className="mx-auto inline-flex items-center rounded-full border border-blue-100 bg-blue-50/80 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-blue-700 sm:text-sm">
              Customer Insights
            </p>
            <h2
              id="reviews-improve-service-heading"
              className="mt-5 text-balance text-2xl font-semibold leading-snug tracking-tight text-zinc-950 sm:mt-6 sm:text-3xl sm:leading-tight lg:text-[2.125rem] lg:leading-tight"
            >
              {t("title")}
            </h2>
            <div className="mx-auto mt-7 max-w-4xl space-y-3.5 text-left text-base leading-relaxed text-zinc-700 sm:mt-8 sm:space-y-4 sm:text-lg sm:leading-relaxed">
              {bodyKeys.map((key) => (
                <p
                  key={key}
                  className="flex items-start gap-3 rounded-lg border border-zinc-200/70 bg-white/80 px-4 py-3 sm:px-5 sm:py-3.5"
                >
                  <span
                    className="mt-2.5 size-2 shrink-0 rounded-full bg-blue-500 sm:mt-3"
                    aria-hidden
                  />
                  <span>{t(key)}</span>
                </p>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
