"use client";

import { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function isAllowedReviewUrl(url: string): boolean {
  try {
    const u = new URL(url.trim());
    if (u.protocol !== "https:") return false;
    const h = u.hostname.toLowerCase();
    return (
      h.includes("google.") ||
      h.endsWith("g.page") ||
      h.includes("goo.gl") ||
      h.includes("maps.app.goo.gl")
    );
  } catch {
    return false;
  }
}

export type GoogleReviewQrCodeCopy = {
  sectionTitle: string;
  sectionIntro: string;
  urlLabel: string;
  urlPlaceholder: string;
  invalidUrl: string;
  showQrButton: string;
  qrAlt: string;
  apiNote: string;
  openLink: string;
};

export function GoogleReviewQrCodeTool({ copy }: { copy: GoogleReviewQrCodeCopy }) {
  const [url, setUrl] = useState("");
  const [submitted, setSubmitted] = useState("");
  const [show, setShow] = useState(false);

  const valid = useMemo(() => isAllowedReviewUrl(submitted), [submitted]);

  const qrSrc = useMemo(() => {
    if (!valid || !submitted.trim()) return "";
    return `https://api.qrserver.com/v1/create-qr-code/?size=220x220&margin=2&data=${encodeURIComponent(submitted.trim())}`;
  }, [submitted, valid]);

  function handleGenerate() {
    const t = url.trim();
    setSubmitted(t);
    setShow(true);
  }

  return (
    <section
      className="border-b border-zinc-200/60 bg-zinc-50/40 py-12 md:py-16 lg:py-24"
      aria-labelledby="google-review-qr-heading"
    >
      <div className="mx-auto max-w-3xl px-6">
        <h2
          id="google-review-qr-heading"
          className="text-balance text-[1.625rem] font-semibold leading-tight tracking-tight text-zinc-950 sm:text-3xl"
        >
          {copy.sectionTitle}
        </h2>
        <p className="mt-4 text-pretty text-base leading-relaxed text-zinc-700 sm:text-lg">
          {copy.sectionIntro}
        </p>
        <div className="mt-8 space-y-4 rounded-xl border border-zinc-200/80 bg-white p-5 shadow-sm sm:p-6">
          <div>
            <label htmlFor="review-url-input" className="block text-sm font-medium text-zinc-900">
              {copy.urlLabel}
            </label>
            <input
              id="review-url-input"
              type="url"
              inputMode="url"
              autoComplete="off"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder={copy.urlPlaceholder}
              className={cn(
                "mt-2 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-base text-zinc-900",
                "placeholder:text-zinc-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/25",
              )}
            />
          </div>
          <Button type="button" size="lg" className="w-full sm:w-auto" onClick={handleGenerate}>
            {copy.showQrButton}
          </Button>
          {show && submitted && !valid ? (
            <p className="text-sm font-medium text-red-700">{copy.invalidUrl}</p>
          ) : null}
          {show && valid && qrSrc ? (
            <div className="border-t border-zinc-200/80 pt-6">
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start">
                {/* eslint-disable-next-line @next/next/no-img-element -- external QR data URL */}
                <img src={qrSrc} alt={copy.qrAlt} width={220} height={220} className="rounded-lg border border-zinc-200/80" />
                <div className="space-y-3 text-sm text-zinc-600 sm:max-w-md">
                  <p className="text-pretty leading-relaxed">{copy.apiNote}</p>
                  <Button variant="secondary" size="sm" asChild>
                    <a href={submitted.trim()} target="_blank" rel="noopener noreferrer">
                      {copy.openLink}
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
