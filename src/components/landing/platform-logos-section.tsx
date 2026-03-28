import { PlatformLogoMarks, PlatformLogoStrip } from "@/components/landing/platform-logo-marks";
import { cn } from "@/lib/utils";

const DEFAULT_TITLE = "Collect Reviews Where Customers Already Leave Them";
const DEFAULT_SUBTITLE =
  "Direct customers to the platforms that matter most for your business.";

export function PlatformLogosSection({
  title = DEFAULT_TITLE,
  subtitle = DEFAULT_SUBTITLE,
  sectionClassName,
  layout = "strip",
}: {
  title?: string;
  subtitle?: string;
  sectionClassName?: string;
  /** `strip`: centered row; `marquee`: infinite scroll */
  layout?: "marquee" | "strip";
} = {}) {
  return (
    <section
      className={cn(
        "border-b border-zinc-200/60 bg-white py-12 md:py-16 lg:py-24",
        sectionClassName,
      )}
    >
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mx-auto max-w-3xl text-balance text-center text-[1.875rem] font-semibold leading-tight tracking-tight text-zinc-950 sm:text-4xl lg:text-[2.625rem]">
          {title}
        </h2>
        <p className="mt-2 text-center text-sm text-muted-foreground">{subtitle}</p>
        <div className="mt-8 md:mt-9">
          {layout === "strip" ? <PlatformLogoStrip /> : <PlatformLogoMarks />}
        </div>
      </div>
    </section>
  );
}
