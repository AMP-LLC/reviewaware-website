import { getTranslations } from "next-intl/server";

const stepKeys = ["step1", "step2", "step3", "step4"] as const;

export async function SolutionSection() {
  const t = await getTranslations("solution");

  return (
    <section className="border-b border-zinc-200/60 bg-zinc-50/90 py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="mx-auto max-w-3xl text-balance text-center text-[1.875rem] font-semibold leading-tight tracking-tight text-zinc-950 sm:text-4xl lg:text-[2.625rem] lg:leading-[1.15]">
          {t("title")}
        </h2>
        <div className="mx-auto mt-14 flex max-w-md flex-col items-stretch gap-0 sm:max-w-lg">
          {stepKeys.map((key, i) => (
            <div key={key} className="flex flex-col items-center">
              <div className="w-full rounded-2xl border border-zinc-200/70 bg-white px-6 py-5 text-center text-sm font-medium leading-snug text-zinc-900 shadow-sm shadow-zinc-950/[0.04] ring-1 ring-zinc-950/[0.02] transition-shadow duration-300 ease-out hover:shadow-md hover:shadow-zinc-950/[0.06] sm:text-base">
                {t(key)}
              </div>
              {i < stepKeys.length - 1 && (
                <span
                  className="py-3 text-lg font-light text-blue-500/90"
                  aria-hidden
                >
                  ↓
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
