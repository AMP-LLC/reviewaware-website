import { cn } from "@/lib/utils";

export function IndustryUseCasesSection({
  title,
  cases,
  sectionClassName,
}: {
  title: string;
  cases: string[];
  sectionClassName?: string;
}) {
  return (
    <section
      className={cn(
        "border-b border-zinc-200/60 bg-gray-50 py-12 md:py-16 lg:py-24",
        sectionClassName,
      )}
    >
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mx-auto max-w-3xl text-balance text-center text-[1.875rem] font-semibold leading-tight tracking-tight text-zinc-950 sm:text-4xl lg:text-[2.625rem]">
          {title}
        </h2>
        <div className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-2 sm:gap-5 md:mt-14">
          {cases.map((label) => (
            <div
              key={label}
              className="rounded-xl border border-zinc-200/80 bg-white px-6 py-5 text-center text-base font-semibold tracking-tight text-zinc-950 shadow-sm transition-shadow hover:shadow-md"
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function IndustryBenefitsSection({
  title,
  items,
  sectionClassName,
}: {
  title: string;
  items: string[];
  sectionClassName?: string;
}) {
  return (
    <section
      className={cn(
        "border-b border-zinc-200/60 bg-white py-12 md:py-16 lg:py-24",
        sectionClassName,
      )}
    >
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-balance text-center text-[1.875rem] font-semibold leading-tight tracking-tight text-zinc-950 sm:text-4xl lg:text-[2.625rem]">
          {title}
        </h2>
        <div className="mt-10 flex justify-center md:mt-12">
          <ul className="w-fit max-w-xl space-y-4 text-left text-sm leading-relaxed text-zinc-700 sm:text-base">
            {items.map((text) => (
              <li className="flex items-start gap-3" key={text}>
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-blue-600/80" aria-hidden />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
