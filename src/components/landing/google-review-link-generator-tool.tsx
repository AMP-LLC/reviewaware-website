"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type GoogleReviewLinkGeneratorCopy = {
  sectionTitle: string;
  sectionIntro: string;
  placeLabel: string;
  placePlaceholder: string;
  placeHelp: string;
  buildButton: string;
  resultLabel: string;
  copyButton: string;
  copiedHint: string;
  helpTitle: string;
  helpStep1: string;
  helpStep2: string;
  helpStep3: string;
};

export function GoogleReviewLinkGeneratorTool({ copy }: { copy: GoogleReviewLinkGeneratorCopy }) {
  const [placeId, setPlaceId] = useState("");
  const [out, setOut] = useState("");
  const [copied, setCopied] = useState(false);

  function build() {
    const raw = placeId.trim();
    if (!raw) {
      setOut("");
      return;
    }
    if (/^https?:\/\//i.test(raw)) {
      setOut(raw);
      return;
    }
    setOut(
      `https://search.google.com/local/writereview?placeid=${encodeURIComponent(raw)}`,
    );
  }

  async function copyLink() {
    if (!out) return;
    await navigator.clipboard.writeText(out);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  }

  return (
    <section
      className="border-b border-zinc-200/60 bg-zinc-50/40 py-12 md:py-16 lg:py-24"
      aria-labelledby="google-review-link-generator-heading"
    >
      <div className="mx-auto max-w-3xl px-6">
        <h2
          id="google-review-link-generator-heading"
          className="text-balance text-[1.625rem] font-semibold leading-tight tracking-tight text-zinc-950 sm:text-3xl"
        >
          {copy.sectionTitle}
        </h2>
        <p className="mt-4 text-pretty text-base leading-relaxed text-zinc-700 sm:text-lg">
          {copy.sectionIntro}
        </p>
        <div className="mt-8 space-y-4 rounded-xl border border-zinc-200/80 bg-white p-5 shadow-sm sm:p-6">
          <div>
            <label
              htmlFor="place-id-input"
              className="block text-sm font-medium text-zinc-900"
            >
              {copy.placeLabel}
            </label>
            <textarea
              id="place-id-input"
              value={placeId}
              onChange={(e) => setPlaceId(e.target.value)}
              placeholder={copy.placePlaceholder}
              rows={3}
              className={cn(
                "mt-2 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-base text-zinc-900",
                "placeholder:text-zinc-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/25",
              )}
            />
            <p className="mt-1.5 text-sm leading-relaxed text-zinc-600">{copy.placeHelp}</p>
          </div>
          <Button type="button" size="lg" className="w-full sm:w-auto" onClick={build}>
            {copy.buildButton}
          </Button>
          {out ? (
            <div className="border-t border-zinc-200/80 pt-6">
              <label
                htmlFor="review-link-out"
                className="block text-sm font-medium text-zinc-900"
              >
                {copy.resultLabel}
              </label>
              <input
                id="review-link-out"
                readOnly
                value={out}
                className="mt-2 w-full rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2.5 text-sm text-zinc-800"
              />
              <Button type="button" variant="secondary" className="mt-3 w-full sm:w-auto" onClick={copyLink}>
                {copied ? copy.copiedHint : copy.copyButton}
              </Button>
            </div>
          ) : null}
        </div>
        <div className="mt-10">
          <h3 className="text-lg font-semibold text-zinc-950">{copy.helpTitle}</h3>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-pretty text-base leading-relaxed text-zinc-700">
            <li>{copy.helpStep1}</li>
            <li>{copy.helpStep2}</li>
            <li>{copy.helpStep3}</li>
          </ol>
        </div>
      </div>
    </section>
  );
}
