import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

export function IndustryResultsBulletsSection({
  title,
  items,
  headingId = "industry-results-bullets-heading",
  sectionClassName,
}: {
  title: string;
  items: readonly string[];
  headingId?: string;
  sectionClassName?: string;
}) {
  return (
    <section
      className={cn(
        "border-b border-zinc-200/60 bg-gradient-to-b from-blue-50/80 to-white py-12 md:py-16 lg:py-24",
        sectionClassName,
      )}
      aria-labelledby={headingId}
    >
      <div className="mx-auto max-w-3xl px-6">
        <h2
          id={headingId}
          className="text-balance text-center text-[1.875rem] font-semibold leading-tight tracking-tight text-zinc-950 sm:text-4xl"
        >
          {title}
        </h2>
        <ul className="mx-auto mt-10 w-fit max-w-xl space-y-4 text-left sm:mt-12">
          {items.map((text) => (
            <li
              key={text}
              className="flex items-start gap-3 text-sm leading-relaxed text-zinc-800 sm:text-base"
            >
              <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white">
                <Check className="size-3.5" strokeWidth={3} aria-hidden />
              </span>
              <span className="text-pretty">{text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
