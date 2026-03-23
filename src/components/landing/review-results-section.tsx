import { getTranslations } from "next-intl/server";

import { Card, CardContent } from "@/components/ui/card";

const stats = [
  {
    stat: "3–5× More Reviews",
    text: "Businesses that consistently request reviews receive dramatically more feedback than those that do not.",
  },
  {
    stat: "2–4× More Google Reviews",
    text: "Automated requests sent immediately after service significantly increase customer response rates.",
  },
  {
    stat: "Customers Respond When It’s Easy",
    text: "Customers are far more likely to leave a review when the request arrives right after the job is completed.",
  },
] as const;

export async function ReviewResultsSection() {
  await getTranslations("reviewResults");

  return (
    <section className="border-b border-zinc-200/60 bg-gradient-to-b from-white to-zinc-50/90 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-[1.875rem] font-semibold leading-tight tracking-tight text-zinc-950 sm:text-4xl lg:text-[2.625rem]">
          What Happens When You Ask for Reviews Consistently
        </h2>
        <div className="mt-14 grid auto-rows-fr gap-8 md:grid-cols-3 md:gap-10">
          {stats.map(({ stat, text }) => (
            <Card
              key={stat}
              className="flex h-full min-h-0 flex-col rounded-xl border border-gray-200 bg-white text-center shadow-sm"
            >
              <CardContent className="flex min-h-0 flex-1 flex-col justify-center gap-4 px-6 py-8 sm:px-8 sm:py-10">
                <p className="text-2xl font-semibold leading-tight tracking-tight text-blue-600 sm:text-3xl lg:text-[1.75rem] lg:leading-snug">
                  {stat}
                </p>
                <p className="text-sm leading-relaxed text-zinc-600 sm:text-base">{text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-2xl text-center text-xs leading-relaxed text-zinc-500 sm:mt-12">
          Based on common review request and reputation-management benchmarks.
        </p>
      </div>
    </section>
  );
}
