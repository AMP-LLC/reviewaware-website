import { getTranslations } from "next-intl/server";

import { Card, CardContent } from "@/components/ui/card";
import {
  Mail,
  QrCode,
  MousePointerClick,
  Bell,
  MonitorSmartphone,
} from "lucide-react";

const features = [
  { titleKey: "f1" as const, icon: Mail },
  { titleKey: "f2" as const, icon: QrCode },
  { titleKey: "f3" as const, icon: MousePointerClick },
  { titleKey: "f4" as const, icon: Bell },
  { titleKey: "f5" as const, icon: MonitorSmartphone },
];

export async function FeaturesSection() {
  const t = await getTranslations("features");

  return (
    <section className="border-b border-zinc-200/60 bg-zinc-50/90 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-[1.875rem] font-semibold leading-tight tracking-tight text-zinc-950 sm:text-4xl lg:text-[2.625rem]">
          {t("title")}
        </h2>
        <div className="mt-10 grid auto-rows-fr gap-8 md:gap-10 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ titleKey, icon: Icon }) => (
            <Card
              key={titleKey}
              className="flex h-full min-h-0 flex-col rounded-xl border border-gray-200 bg-white shadow-sm"
            >
              <CardContent className="flex min-h-0 flex-1 flex-col justify-start p-0">
                <div className="flex w-full items-start gap-5 px-6 py-5 sm:px-8 sm:py-6">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-blue-50/90 text-blue-600 ring-1 ring-blue-600/10">
                    <Icon className="size-5" aria-hidden />
                  </div>
                  <p className="min-w-0 flex-1 text-sm font-medium leading-snug text-zinc-800 sm:text-base">
                    {t(titleKey)}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
