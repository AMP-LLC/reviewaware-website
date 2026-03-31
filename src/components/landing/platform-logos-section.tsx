import { getTranslations } from "next-intl/server";

import { PlatformLogoMarks, PlatformLogoStrip } from "@/components/landing/platform-logo-marks";
import { cn } from "@/lib/utils";

export async function PlatformLogosSection({
  title,
  subtitle,
  sectionClassName,
  layout = "strip",
}: {
  title?: string;
  subtitle?: string;
  sectionClassName?: string;
  /** `strip`: centered row; `marquee`: infinite scroll */
  layout?: "marquee" | "strip";
} = {}) {
  const t = await getTranslations("platformLogos");
  const resolvedTitle = title ?? t("title");
  const resolvedSubtitle = subtitle ?? t("subtitle");

  return (
    <section
      className={cn(
        "border-b border-zinc-200/60 bg-white py-12 md:py-16 lg:py-24",
        sectionClassName,
      )}
    >
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mx-auto max-w-3xl text-balance text-center text-[1.875rem] font-semibold leading-tight tracking-tight text-zinc-950 sm:text-4xl lg:text-[2.625rem]">
          {resolvedTitle}
        </h2>
        <p className="mt-2 text-center text-sm text-muted-foreground">{resolvedSubtitle}</p>
        <div className="mt-8 md:mt-9">
          {layout === "strip" ? <PlatformLogoStrip /> : <PlatformLogoMarks />}
        </div>
      </div>
    </section>
  );
}
