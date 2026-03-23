import { getTranslations } from "next-intl/server";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquareText, ShieldCheck, TrendingUp } from "lucide-react";

const cards = [
  { titleKey: "card1Title" as const, textKey: "card1Text" as const, subKey: "card1Sub" as const, icon: TrendingUp },
  { titleKey: "card2Title" as const, textKey: "card2Text" as const, subKey: "card2Sub" as const, icon: MessageSquareText },
  { titleKey: "card3Title" as const, textKey: "card3Text" as const, subKey: "card3Sub" as const, icon: ShieldCheck },
] as const;

export async function WhyReviewAwareSection() {
  const t = await getTranslations("whyReviewAware");

  return (
    <section className="border-b border-zinc-200/60 bg-white py-16 md:py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-[1.875rem] font-semibold leading-tight tracking-tight text-zinc-950 sm:text-4xl lg:text-[2.625rem]">
          {t("title")}
        </h2>
        <div className="mt-14 grid auto-rows-fr gap-6 md:grid-cols-3 md:gap-6 lg:gap-8">
          {cards.map(({ titleKey, textKey, subKey, icon: Icon }) => (
            <Card
              key={titleKey}
              className="flex h-full min-h-0 flex-col transition-all duration-300 ease-out hover:border-zinc-300/80 hover:shadow-lg hover:shadow-zinc-950/[0.06]"
            >
              <CardHeader className="flex flex-1 flex-col gap-4 px-6 pb-2 pt-6 sm:px-8 sm:pt-8">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-blue-50/90 text-blue-600 ring-1 ring-blue-600/10">
                  <Icon className="size-5" aria-hidden />
                </div>
                <CardTitle className="text-left text-lg font-semibold leading-snug tracking-tight text-zinc-950 sm:text-xl">
                  {t(titleKey)}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col gap-4 px-6 pb-6 sm:px-8 sm:pb-8">
                <p className="text-left text-sm leading-relaxed text-zinc-700 sm:text-base">{t(textKey)}</p>
                <p className="mt-auto text-left text-xs leading-relaxed text-zinc-500 sm:text-sm">{t(subKey)}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
