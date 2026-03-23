import type { ReactNode } from "react";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

function BrowserFrame({
  url,
  children,
}: {
  url: string;
  children: ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-200/90 bg-card shadow-2xl shadow-zinc-950/[0.12] ring-1 ring-zinc-950/[0.06]">
      <div className="flex items-center gap-2 border-b border-zinc-200/80 bg-gradient-to-b from-zinc-100/98 to-zinc-100/90 px-3 py-2.5">
        <div className="flex gap-1.5" aria-hidden>
          <span className="size-2.5 rounded-full bg-zinc-300/90" />
          <span className="size-2.5 rounded-full bg-zinc-300/90" />
          <span className="size-2.5 rounded-full bg-zinc-300/90" />
        </div>
        <div className="mx-auto flex min-h-8 max-w-lg flex-1 items-center justify-center rounded-md border border-zinc-200/90 bg-white px-3 py-1 text-center text-[0.65rem] font-medium text-zinc-500 shadow-inner shadow-zinc-950/[0.03] sm:text-xs">
          {url}
        </div>
      </div>
      {children}
    </div>
  );
}

const secondaryPanels = [
  { labelKey: "s2Label" as const, hintKey: "s2Hint" as const, image: "jobs" as const },
  { labelKey: "s3Label" as const, hintKey: "s3Hint" as const, image: "qr" as const },
  { labelKey: "s4Label" as const, hintKey: "s4Hint" as const, image: "email" as const },
];

/** Bump when replacing files in `public/marketing` so next/image cache busts. */
const MARKETING_SCREENSHOTS_VERSION = "4";

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
    <div className="relative h-[200px] w-full overflow-hidden bg-zinc-100 sm:h-auto sm:aspect-[16/10] sm:max-h-none">
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

export async function ScreenshotsSection({ locale }: { locale: string }) {
  const t = await getTranslations("screenshots");

  const dashSrc = marketingImagePath(locale, "dashboard");

  return (
    <section className="border-b border-zinc-200/60 bg-gradient-to-b from-white to-zinc-50/90 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-[1.875rem] font-semibold leading-tight tracking-tight text-zinc-950 sm:text-4xl lg:text-[2.625rem]">
          {t("title")}
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-relaxed text-zinc-600 sm:text-base">
          {t("subtitle")}
        </p>
        <p className="mx-auto mt-4 max-w-xl text-center text-xs font-medium text-zinc-500 sm:text-sm">
          {t("legitimacyLine")}
        </p>
        <p className="mx-auto mt-1.5 text-center text-[0.65rem] font-medium tracking-wide text-zinc-400 sm:text-xs">
          {t("legitimacyTags")}
        </p>

        <div className="relative mx-auto mt-10 max-w-[69rem] sm:mt-16">
          <div className="hidden lg:block">
            <div className="mx-auto mb-8 grid max-w-5xl gap-3 sm:grid-cols-3">
              {(
                [
                  ["callout1", "callout1Hint"],
                  ["callout2", "callout2Hint"],
                  ["callout3", "callout3Hint"],
                ] as const
              ).map(([lineKey, hintKey]) => (
                <div
                  key={lineKey}
                  className="rounded-lg border border-zinc-200/70 bg-white/90 px-3.5 py-3 text-center shadow-sm shadow-zinc-950/[0.04]"
                >
                  <p className="text-[1.03rem] font-medium leading-snug text-zinc-800">{t(lineKey)}</p>
                  <p className="mt-1.5 text-sm leading-snug text-zinc-500">{t(hintKey)}</p>
                </div>
              ))}
            </div>

            <div className="relative z-[1] min-w-0">
              <BrowserFrame url={t("browserUrl")}>
                <PrimaryScreenshot src={dashSrc} alt={t("primaryCaption")} />
              </BrowserFrame>
              <p className="mt-2 text-center text-xs font-medium text-zinc-500">
                {t("primaryCaption")}
              </p>
            </div>
          </div>

          <div className="mx-auto w-full max-w-lg lg:hidden lg:max-w-none">
            <BrowserFrame url={t("browserUrl")}>
              <PrimaryScreenshot src={dashSrc} alt={t("primaryCaption")} />
            </BrowserFrame>
            <p className="mt-2 text-center text-xs font-medium text-zinc-500">
              {t("primaryCaption")}
            </p>
            <ul className="mt-5 space-y-2.5 sm:mt-6 sm:space-y-3">
              {(
                [
                  ["callout1", "callout1Hint"],
                  ["callout2", "callout2Hint"],
                  ["callout3", "callout3Hint"],
                ] as const
              ).map(([lineKey, hintKey]) => (
                <li
                  key={lineKey}
                  className="rounded-lg border border-zinc-200/70 bg-white px-3 py-2.5 text-left shadow-sm"
                >
                  <div className="flex items-start gap-2">
                    <span
                      className="mt-1.5 size-1.5 shrink-0 rounded-full bg-blue-500"
                      aria-hidden
                    />
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-zinc-800">{t(lineKey)}</p>
                      <p className="mt-0.5 text-xs leading-snug text-zinc-500">{t(hintKey)}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-5xl border-t border-zinc-200/60 pt-12 sm:mt-20 sm:pt-16">
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
