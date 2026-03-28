import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export type SeoEducationBlock = {
  title: string;
  text: string;
};

export function SeoEducationCardsSection({
  title,
  subtitle,
  blocks,
  headingId = "seo-education-heading",
  sectionClassName,
}: {
  title: string;
  subtitle: string;
  blocks: readonly SeoEducationBlock[];
  headingId?: string;
  sectionClassName?: string;
}) {
  return (
    <section
      className={cn(
        "border-b border-zinc-200/60 bg-white py-12 md:py-16 lg:py-24",
        sectionClassName,
      )}
      aria-labelledby={headingId}
    >
      <div className="mx-auto max-w-6xl px-6">
        <header className="mx-auto max-w-3xl text-center">
          <h2
            id={headingId}
            className="text-balance text-[1.875rem] font-semibold leading-tight tracking-tight text-zinc-950 sm:text-4xl lg:text-[2.625rem]"
          >
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-zinc-600 sm:text-lg">
            {subtitle}
          </p>
        </header>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 sm:gap-7 md:mt-14">
          {blocks.map((block) => (
            <Card
              key={block.title}
              className="h-full rounded-xl border border-zinc-200/80 bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <CardContent className="flex h-full flex-col p-6 sm:p-8">
                <h3 className="text-lg font-semibold tracking-tight text-zinc-950 sm:text-xl">
                  {block.title}
                </h3>
                <p className="mt-3 flex-1 text-pretty text-sm leading-relaxed text-zinc-600 sm:text-base">
                  {block.text}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
