import { getTranslations } from "next-intl/server";

import { Card, CardContent } from "@/components/ui/card";

export async function ReviewsImproveServiceSection() {
  const t = await getTranslations("reviewsImproveService");

  return (
    <section
      className="border-b border-zinc-200/60 bg-gradient-to-b from-zinc-50/50 to-white py-14 md:py-20 lg:py-24"
      aria-labelledby="reviews-improve-service-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Card className="mx-auto max-w-3xl border-zinc-200/80 bg-white/90 shadow-sm shadow-zinc-950/[0.04]">
          <CardContent className="px-6 py-8 text-center sm:px-10 sm:py-10">
            <h2
              id="reviews-improve-service-heading"
              className="text-balance text-[1.375rem] font-semibold leading-snug tracking-tight text-zinc-950 sm:text-2xl"
            >
              {t("title")}
            </h2>
            <div className="mx-auto mt-5 max-w-2xl space-y-3 text-sm leading-relaxed text-zinc-600 sm:mt-6 sm:text-base">
              <p>{t("body1")}</p>
              <p>{t("body2")}</p>
              <p>{t("body3")}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
