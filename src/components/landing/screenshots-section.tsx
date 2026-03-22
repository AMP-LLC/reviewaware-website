import type { ReactNode } from "react";
import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";

function BrowserFrame({
  url,
  children,
}: {
  url: string;
  children: ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-zinc-200/80 bg-white shadow-[0_20px_50px_-12px_rgba(15,23,42,0.15)] ring-1 ring-zinc-950/[0.04]">
      <div className="flex items-center gap-2 border-b border-zinc-200/80 bg-zinc-100/95 px-3 py-2.5">
        <div className="flex gap-1.5" aria-hidden>
          <span className="size-2.5 rounded-full bg-zinc-300/90" />
          <span className="size-2.5 rounded-full bg-zinc-300/90" />
          <span className="size-2.5 rounded-full bg-zinc-300/90" />
        </div>
        <div className="mx-auto flex min-h-8 max-w-lg flex-1 items-center justify-center rounded-md border border-zinc-200/90 bg-white px-3 py-1 text-center text-[0.7rem] font-medium text-zinc-500 sm:text-xs">
          {url}
        </div>
      </div>
      {children}
    </div>
  );
}

function CalloutPill({ text, align }: { text: string; align: "left" | "right" }) {
  return (
    <div
      className={`relative flex items-center ${align === "right" ? "lg:justify-end" : "lg:justify-start"}`}
    >
      <span
        className={`pointer-events-none absolute top-1/2 hidden h-px w-6 -translate-y-1/2 bg-zinc-200 lg:block ${align === "left" ? "-right-6" : "-left-6"}`}
        aria-hidden
      />
      <span className="relative z-[1] max-w-[11rem] rounded-lg border border-zinc-200/80 bg-white px-3 py-2 text-center text-xs font-medium leading-snug text-zinc-800 shadow-sm shadow-zinc-950/[0.04] sm:text-sm">
        {text}
      </span>
    </div>
  );
}

const secondaryPanels = [
  { labelKey: "s2Label" as const, hintKey: "s2Hint" as const, image: "jobs" as const },
  { labelKey: "s3Label" as const, hintKey: "s3Hint" as const, image: "qr" as const },
  { labelKey: "s4Label" as const, hintKey: "s4Hint" as const, image: "email" as const },
];

/** Bump when replacing files in `public/marketing` so next/image cache busts. */
const MARKETING_SCREENSHOTS_VERSION = "2";

function marketingImagePath(locale: string, name: "dashboard" | "jobs" | "qr" | "email") {
  const prefix = locale === "es" ? "es" : "en";
  return `/marketing/${prefix}-${name}.png?v=${MARKETING_SCREENSHOTS_VERSION}`;
}

function PrimaryScreenshot({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div className="relative aspect-[16/10] w-full bg-zinc-100">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain object-top"
        sizes="(max-width: 1024px) 100vw, 896px"
        priority
      />
    </div>
  );
}

function SecondaryScreenshot({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div className="relative aspect-[4/3] w-full bg-zinc-100">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain object-top"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px"
      />
    </div>
  );
}

export async function ScreenshotsSection() {
  const t = await getTranslations("screenshots");
  const locale = await getLocale();

  const dashSrc = marketingImagePath(locale, "dashboard");

  return (
    <section className="border-b border-zinc-200/60 bg-gradient-to-b from-white to-zinc-50/90 py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-[1.875rem] font-semibold leading-tight tracking-tight text-zinc-950 sm:text-4xl lg:text-[2.625rem]">
          {t("title")}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-relaxed text-zinc-600 sm:text-base">
          {t("subtitle")}
        </p>

        <div className="relative mx-auto mt-16 max-w-5xl">
          <div className="hidden gap-6 lg:grid lg:grid-cols-[minmax(0,10rem)_1fr_minmax(0,10rem)] lg:items-center lg:gap-8">
            <div className="flex flex-col justify-center gap-10 pt-4">
              <CalloutPill text={t("callout1")} align="right" />
            </div>

            <div className="relative z-[1] min-w-0">
              <BrowserFrame url={t("browserUrl")}>
                <PrimaryScreenshot src={dashSrc} alt={t("primaryCaption")} />
              </BrowserFrame>
              <p className="mt-2 text-center text-xs font-medium text-zinc-500">
                {t("primaryCaption")}
              </p>
            </div>

            <div className="flex flex-col justify-center gap-10 pt-4">
              <CalloutPill text={t("callout2")} align="left" />
              <CalloutPill text={t("callout3")} align="left" />
            </div>
          </div>

          <div className="lg:hidden">
            <BrowserFrame url={t("browserUrl")}>
              <PrimaryScreenshot src={dashSrc} alt={t("primaryCaption")} />
            </BrowserFrame>
            <p className="mt-2 text-center text-xs font-medium text-zinc-500">
              {t("primaryCaption")}
            </p>
            <ul className="mt-6 space-y-3">
              {[t("callout1"), t("callout2"), t("callout3")].map((line) => (
                <li
                  key={line}
                  className="flex items-start gap-2 rounded-lg border border-zinc-200/70 bg-white px-3 py-2.5 text-sm font-medium text-zinc-800 shadow-sm"
                >
                  <span
                    className="mt-1.5 size-1.5 shrink-0 rounded-full bg-blue-500"
                    aria-hidden
                  />
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mx-auto mt-20 max-w-5xl border-t border-zinc-200/60 pt-16">
          <h3 className="text-center text-base font-semibold tracking-tight text-zinc-600">
            {t("secondaryHeading")}
          </h3>
          <p className="mx-auto mt-2 max-w-lg text-center text-xs text-zinc-500 sm:text-sm">
            {t("secondarySub")}
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {secondaryPanels.map(({ labelKey, hintKey, image }) => (
              <figure
                key={labelKey}
                className="overflow-hidden rounded-lg border border-zinc-200/50 bg-white/90 opacity-95 shadow-sm ring-1 ring-zinc-950/[0.02] transition-opacity duration-300 hover:opacity-100"
              >
                <div className="flex h-2 gap-1 border-b border-zinc-100 bg-zinc-50/90 px-2 py-1.5">
                  <span className="size-1.5 rounded-full bg-zinc-300/80" aria-hidden />
                  <span className="size-1.5 rounded-full bg-zinc-300/80" aria-hidden />
                  <span className="size-1.5 rounded-full bg-zinc-300/80" aria-hidden />
                </div>
                <SecondaryScreenshot
                  src={marketingImagePath(locale, image)}
                  alt={t(labelKey)}
                />
                <figcaption className="border-t border-zinc-100 bg-white px-3 py-3 text-center">
                  <span className="text-sm font-medium text-zinc-800">
                    {t(labelKey)}
                  </span>
                  <p className="mt-0.5 text-xs leading-relaxed text-zinc-500">
                    {t(hintKey)}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
