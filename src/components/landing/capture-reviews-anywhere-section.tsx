import { getTranslations } from "next-intl/server";

import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

const onlineBulletKeys = [
  "onlineBullet1",
  "onlineBullet2",
  "onlineBullet3",
  "onlineBullet4",
] as const;

const realWorldBulletKeys = [
  "realWorldBullet1",
  "realWorldBullet2",
  "realWorldBullet3",
  "realWorldBullet4",
] as const;

export async function CaptureReviewsAnywhereSection() {
  const t = await getTranslations("reviewCaptureDifferentiation");

  return (
    <section
      className="border-b border-zinc-200/60 bg-gray-50 py-24 md:py-28"
      aria-labelledby="review-capture-differentiation-heading"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-x-20 xl:gap-x-24">
          <header className="text-center lg:max-w-xl lg:pt-1 lg:text-left">
            <h2
              id="review-capture-differentiation-heading"
              className="text-balance text-[1.875rem] font-semibold leading-[1.15] tracking-tight text-zinc-950 sm:text-4xl lg:text-[2.375rem] lg:leading-tight"
            >
              {t("title")}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-zinc-600 sm:text-lg lg:mx-0 lg:mt-6">
              {t("intro")}
            </p>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-sm leading-relaxed text-zinc-500 lg:mx-0">
              {t("supportingLine")}
            </p>
          </header>

          <div className="flex flex-col gap-6 md:gap-7 lg:min-w-0">
            <Card className="rounded-xl border border-zinc-200/80 bg-white shadow-sm transition-shadow hover:shadow-md">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl font-semibold tracking-tight text-zinc-950">{t("onlineTitle")}</h3>
                <p className="mt-3 text-pretty text-sm leading-relaxed text-zinc-600 sm:text-base">
                  {t("onlineIntro")}
                </p>
                <ul className="mt-6 space-y-3">
                  {onlineBulletKeys.map((key) => (
                    <li key={key} className="flex gap-3 text-sm leading-snug text-zinc-800 sm:text-base">
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600 ring-1 ring-blue-600/15">
                        <Check className="size-3" strokeWidth={2.5} aria-hidden />
                      </span>
                      <span>{t(key)}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="rounded-xl border border-zinc-200/80 bg-white shadow-sm transition-shadow hover:shadow-md">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl font-semibold tracking-tight text-zinc-950">{t("realWorldTitle")}</h3>
                <p className="mt-3 text-pretty text-sm leading-relaxed text-zinc-600 sm:text-base">
                  {t("realWorldIntro")}
                </p>
                <ul className="mt-6 space-y-3">
                  {realWorldBulletKeys.map((key) => (
                    <li key={key} className="flex gap-3 text-sm leading-snug text-zinc-800 sm:text-base">
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600 ring-1 ring-blue-600/15">
                        <Check className="size-3" strokeWidth={2.5} aria-hidden />
                      </span>
                      <span>{t(key)}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
