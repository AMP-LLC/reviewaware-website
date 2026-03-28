import { MessageCircle, UserRound, Zap } from "lucide-react";

import { cn } from "@/lib/utils";

export type ReviewPainCard = {
  title: string;
};

export type ReviewPainSectionCopy = {
  title: string;
  intro?: string;
  layout?: "bullets" | "cards";
  bullets?: string[];
  cards?: ReviewPainCard[];
  closing: string;
};

const CARD_ICONS = [MessageCircle, UserRound, Zap] as const;

const DEFAULT_REVIEW_PAIN_COPY: ReviewPainSectionCopy = {
  title: "Great Jobs Don't Automatically Turn Into Great Reviews",
  intro:
    "Most service businesses do great work every day — but that doesn't mean customers leave reviews.",
  layout: "bullets",
  bullets: [
    "Customers forget once the technician leaves",
    "Technicians don't always ask",
    "Follow-up is inconsistent or never happens",
    "Negative experiences get remembered more than positive ones",
  ],
  closing: "Without a system, even happy customers stay silent.",
};

export function ReviewPainSection({
  copy,
  sectionClassName,
}: { copy?: ReviewPainSectionCopy; sectionClassName?: string } = {}) {
  const c = copy ?? DEFAULT_REVIEW_PAIN_COPY;
  const layout = c.layout ?? "bullets";

  return (
    <section
      className={cn(
        "border-b border-zinc-200/60 bg-gray-50 py-12 md:py-16 lg:py-24",
        sectionClassName,
      )}
    >
      <div className={`mx-auto px-6 ${layout === "cards" ? "max-w-6xl" : "max-w-4xl"}`}>
        {layout === "cards" && c.cards?.length ? (
          <>
            <h2 className="text-balance text-center text-3xl font-semibold leading-tight tracking-tight text-zinc-950 sm:text-4xl">
              {c.title}
            </h2>
            {c.intro ? (
              <p className="mx-auto mt-4 max-w-3xl text-pretty text-center text-sm leading-relaxed text-zinc-600 sm:text-base">
                {c.intro}
              </p>
            ) : null}
            <div className="mt-10 grid gap-5 sm:grid-cols-3 sm:gap-6">
              {c.cards.map((card, index) => {
                const Icon = CARD_ICONS[index] ?? MessageCircle;
                return (
                  <div
                    key={card.title}
                    className="rounded-xl border border-zinc-200/80 bg-white p-6 text-center shadow-sm"
                  >
                    <div className="mx-auto flex size-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100">
                      <Icon className="size-6" aria-hidden />
                    </div>
                    <p className="mt-4 text-pretty text-base font-semibold leading-snug text-zinc-950 sm:text-lg">
                      {card.title}
                    </p>
                  </div>
                );
              })}
            </div>
            <p className="mx-auto mt-10 max-w-3xl text-pretty text-center text-lg font-semibold text-zinc-950 sm:mt-12">
              {c.closing}
            </p>
          </>
        ) : (
          <div className="rounded-2xl border border-zinc-200/80 bg-white/80 px-8 py-10 shadow-sm backdrop-blur-sm sm:px-10 sm:py-12">
            <h2 className="text-balance text-center text-3xl font-semibold leading-tight tracking-tight text-zinc-950 sm:text-4xl">
              {c.title}
            </h2>
            {c.intro ? (
              <p className="mx-auto mt-4 max-w-3xl text-pretty text-center text-sm leading-relaxed text-zinc-600 sm:text-base">
                {c.intro}
              </p>
            ) : null}
            <div className={c.intro ? "mt-8 flex justify-center" : "mt-10 flex justify-center"}>
              <ul className="w-fit max-w-xl space-y-4 text-left text-sm leading-relaxed text-zinc-700 sm:text-base">
                {(c.bullets ?? []).map((text) => (
                  <li className="flex items-start gap-3" key={text}>
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-zinc-400" aria-hidden />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="mx-auto mt-8 max-w-3xl text-pretty text-center text-lg font-semibold text-zinc-950 sm:mt-10">
              {c.closing}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
