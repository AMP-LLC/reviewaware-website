import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

const pillDefault =
  "inline-flex items-center rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-800 shadow-sm transition hover:border-blue-200 hover:bg-blue-50/50 hover:text-blue-900 no-underline";

const pillCompact =
  "inline-flex items-center rounded-full border border-zinc-200/90 bg-zinc-50/80 px-2.5 py-1 text-xs font-medium text-zinc-700 transition hover:border-blue-200 hover:bg-white hover:text-blue-900 no-underline";

/**
 * Reusable internal link group for SEO layer navigation.
 * Keep link lists small and contextual (see docs/seo-content-architecture.md).
 */
export function SeoInternalLinksSection({
  title,
  links,
  sectionClassName,
  compact = false,
}: {
  title: string;
  links: readonly { href: string; label: string }[];
  sectionClassName?: string;
  compact?: boolean;
}) {
  const pill = compact ? pillCompact : pillDefault;

  return (
    <section
      className={cn(
        "border-b border-zinc-200/60 bg-white py-10 md:py-12",
        compact && "bg-zinc-50/40 py-8 md:py-9",
        sectionClassName,
      )}
    >
      <div className="mx-auto max-w-6xl px-6">
        <h2
          className={cn(
            "text-center font-semibold tracking-tight text-zinc-950",
            compact ? "text-base sm:text-lg" : "text-lg sm:text-xl",
          )}
        >
          {title}
        </h2>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {links.map((item) => (
            <Link key={item.href} href={item.href} className={pill}>
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
