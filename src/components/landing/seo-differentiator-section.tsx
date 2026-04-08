import { cn } from "@/lib/utils";

/** Unique copy block per SEO page to limit cannibalization vs shared sections. */
export function SeoDifferentiatorSection({
  title,
  paragraphs,
  sectionClassName,
}: {
  title: string;
  paragraphs: readonly string[];
  sectionClassName?: string;
}) {
  return (
    <section
      className={cn(
        "border-b border-zinc-200/60 bg-white py-12 md:py-16 lg:py-24",
        sectionClassName,
      )}
    >
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-balance text-[1.625rem] font-semibold leading-tight tracking-tight text-zinc-950 sm:text-3xl">
          {title}
        </h2>
        <div className="mt-6 space-y-4 text-pretty text-base leading-relaxed text-zinc-700 sm:text-lg">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
