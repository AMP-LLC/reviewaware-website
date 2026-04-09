"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";

export type GoogleReviewCardsCopy = {
  sectionTitle: string;
  sectionIntro: string;
  checklistTitle: string;
  item1: string;
  item2: string;
  item3: string;
  item4: string;
  item5: string;
  specsTitle: string;
  spec1: string;
  spec2: string;
  spec3: string;
  spec4: string;
};

const ITEM_KEYS = ["item1", "item2", "item3", "item4", "item5"] as const;

export function GoogleReviewCardsTool({ copy }: { copy: GoogleReviewCardsCopy }) {
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  return (
    <section
      className="border-b border-zinc-200/60 bg-zinc-50/40 py-12 md:py-16 lg:py-24"
      aria-labelledby="google-review-cards-tool-heading"
    >
      <div className="mx-auto max-w-3xl px-6">
        <h2
          id="google-review-cards-tool-heading"
          className="text-balance text-[1.625rem] font-semibold leading-tight tracking-tight text-zinc-950 sm:text-3xl"
        >
          {copy.sectionTitle}
        </h2>
        <p className="mt-4 text-pretty text-base leading-relaxed text-zinc-700 sm:text-lg">
          {copy.sectionIntro}
        </p>
        <div className="mt-8 rounded-xl border border-zinc-200/80 bg-white p-5 shadow-sm sm:p-6">
          <h3 className="text-lg font-semibold text-zinc-950">{copy.checklistTitle}</h3>
          <ul className="mt-4 space-y-3">
            {ITEM_KEYS.map((key) => (
              <li key={key}>
                <label
                  className={cn(
                    "flex cursor-pointer gap-3 rounded-lg border border-transparent px-2 py-2",
                    "hover:bg-zinc-50 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-blue-500/30",
                  )}
                >
                  <input
                    type="checkbox"
                    checked={Boolean(checked[key])}
                    onChange={(e) => setChecked((s) => ({ ...s, [key]: e.target.checked }))}
                    className="mt-1 size-4 rounded border-zinc-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-pretty text-base leading-relaxed text-zinc-800">
                    {copy[key]}
                  </span>
                </label>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-10">
          <h3 className="text-lg font-semibold text-zinc-950">{copy.specsTitle}</h3>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-pretty text-base leading-relaxed text-zinc-700">
            <li>{copy.spec1}</li>
            <li>{copy.spec2}</li>
            <li>{copy.spec3}</li>
            <li>{copy.spec4}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
