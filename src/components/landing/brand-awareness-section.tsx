import { getTranslations } from "next-intl/server";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const awarenessCards = [
  { id: "customer", titleKey: "cardCustomerTitle", bodyKey: "cardCustomerBody" },
  { id: "service", titleKey: "cardServiceTitle", bodyKey: "cardServiceBody" },
  { id: "brand", titleKey: "cardBrandTitle", bodyKey: "cardBrandBody" },
] as const;

export async function BrandAwarenessSection() {
  const t = await getTranslations("brandAwareness");

  return (
    <section className="border-b border-zinc-200/60 bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-[1.875rem] font-semibold leading-tight tracking-tight text-zinc-950 sm:text-4xl lg:text-[2.625rem]">
            <span className="relative inline-block after:absolute after:-bottom-1 after:left-0 after:h-1 after:w-full after:rounded-full after:bg-blue-500/90">
              {t("titleHighlight")}
            </span>{" "}
            {t("titleRest")}
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-pretty text-base leading-relaxed text-zinc-700 sm:text-lg">
            {t("body1")}
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-pretty text-base leading-relaxed text-zinc-700 sm:text-lg">
            {t("body2")}
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-pretty text-base leading-relaxed text-zinc-700 sm:text-lg">
            {t("body3")}
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3 md:gap-10">
          {awarenessCards.map((card) => (
            <Card key={card.id} className="rounded-xl border border-gray-200 bg-white shadow-sm">
              <CardHeader className="pb-3 text-center">
                <CardTitle className="text-xl tracking-tight text-blue-600">{t(card.titleKey)}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm leading-relaxed text-zinc-700 sm:text-base">{t(card.bodyKey)}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
