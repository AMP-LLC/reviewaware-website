import { getTranslations } from "next-intl/server";

import { cn } from "@/lib/utils";

const BULLET_KEYS = ["bullet1", "bullet2", "bullet3", "bullet4"] as const;

export async function WorkflowFitSection({
  sectionClassName,
}: {
  sectionClassName?: string;
} = {}) {
  const t = await getTranslations("workflowFit");

  return (
    <section
      className={cn(
        "border-b border-zinc-200/60 bg-zinc-50/50 py-12 md:py-16",
        sectionClassName,
      )}
    >
      <div className="mx-auto max-w-6xl px-6">
        <header className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-2xl font-semibold leading-tight tracking-tight text-zinc-950 sm:text-3xl">
            {t("title")}
          </h2>
          <p className="mt-3 text-pretty text-sm leading-relaxed text-zinc-600 sm:text-base">
            {t("subtitle")}
          </p>
        </header>
        <ul className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
          {BULLET_KEYS.map((key) => (
            <li
              key={key}
              className="rounded-xl border border-zinc-200/80 bg-white px-4 py-3 text-left text-sm font-medium leading-snug text-zinc-800 shadow-sm sm:px-5 sm:py-3.5 sm:text-[0.9375rem]"
            >
              {t(key)}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
