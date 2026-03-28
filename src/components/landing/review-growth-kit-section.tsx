import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export type ReviewGrowthKitCard = {
  title: string;
  description: string;
};

export function ReviewGrowthKitSection({
  title,
  subtitle,
  cards,
  cardIcons,
  emphasizedHeader,
  sectionClassName,
  bottomSlot,
}: {
  title: string;
  subtitle: string;
  cards: readonly ReviewGrowthKitCard[];
  /** Optional icons in the same order as `cards` */
  cardIcons?: readonly LucideIcon[];
  emphasizedHeader?: boolean;
  sectionClassName?: string;
  /** Optional product visual (e.g. industry QR toolkit mock) */
  bottomSlot?: ReactNode;
}) {
  return (
    <section
      className={cn(
        "border-b border-zinc-200/60 bg-gray-50 py-12 md:py-16 lg:py-24",
        sectionClassName,
      )}
      aria-labelledby="review-growth-kit-heading"
    >
      <div className="mx-auto max-w-6xl px-6">
        <header className="mx-auto max-w-3xl text-center">
          <h2
            id="review-growth-kit-heading"
            className={cn(
              "text-balance font-semibold leading-tight tracking-tight text-zinc-950",
              emphasizedHeader
                ? "text-[2rem] sm:text-4xl lg:text-[2.75rem]"
                : "text-[1.875rem] sm:text-4xl lg:text-[2.625rem]",
            )}
          >
            {title}
          </h2>
          <p
            className={cn(
              "mx-auto mt-5 max-w-2xl text-pretty leading-relaxed text-zinc-600",
              emphasizedHeader ? "text-base font-medium sm:text-lg" : "text-base sm:text-lg",
            )}
          >
            {subtitle}
          </p>
        </header>
        <div className="mt-12 grid gap-6 md:mt-14 md:grid-cols-3 md:gap-8">
          {cards.map((card, index) => {
            const Icon = cardIcons?.[index];
            return (
              <Card
                key={card.title}
                className="h-full rounded-xl border border-zinc-200/80 bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <CardContent className="flex h-full flex-col p-6 text-center sm:p-8">
                  {Icon ? (
                    <div className="mx-auto flex size-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100">
                      <Icon className="size-6" aria-hidden />
                    </div>
                  ) : null}
                  <h3
                    className={cn(
                      "text-lg font-semibold tracking-tight text-zinc-950 sm:text-xl",
                      Icon ? "mt-5" : "",
                    )}
                  >
                    {card.title}
                  </h3>
                  <p className="mt-3 flex-1 text-pretty text-sm leading-relaxed text-zinc-600 sm:text-base">
                    {card.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
        {bottomSlot ? (
          <div className="mt-12 md:mt-16">{bottomSlot}</div>
        ) : null}
      </div>
    </section>
  );
}
