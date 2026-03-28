import { cn } from "@/lib/utils";

export function IndustryBeforeAfterSection({
  title,
  withoutTitle,
  withoutBullets,
  withTitle,
  withBullets,
  supporting,
  sectionClassName,
}: {
  title: string;
  withoutTitle: string;
  withoutBullets: readonly string[];
  withTitle: string;
  withBullets: readonly string[];
  supporting: string;
  sectionClassName?: string;
}) {
  const bulletClass =
    "flex items-start gap-3 text-sm leading-relaxed sm:text-[0.9375rem]";

  return (
    <section
      className={cn(
        "border-b border-zinc-200/60 bg-white py-12 md:py-16 lg:py-24",
        sectionClassName,
      )}
      aria-labelledby="before-after-heading"
    >
      <div className="mx-auto max-w-6xl px-6">
        <h2
          id="before-after-heading"
          className="mx-auto max-w-3xl text-balance text-center text-[1.625rem] font-semibold leading-tight tracking-tight text-zinc-950 sm:text-3xl md:text-[2rem]"
        >
          {title}
        </h2>
        <div className="mt-10 grid gap-6 md:mt-12 md:grid-cols-2 md:gap-8">
          <div className="rounded-lg bg-gray-50 p-6 text-gray-600">
            <h3 className="text-base font-semibold tracking-tight text-zinc-800 sm:text-lg">
              {withoutTitle}
            </h3>
            <ul className="mt-4 space-y-3">
              {withoutBullets.map((text) => (
                <li key={text} className={bulletClass}>
                  <span
                    className="mt-2 size-1.5 shrink-0 rounded-full bg-zinc-400"
                    aria-hidden
                  />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm text-gray-700">
            <h3 className="text-base font-semibold tracking-tight text-zinc-950 sm:text-lg">
              {withTitle}
            </h3>
            <ul className="mt-4 space-y-3">
              {withBullets.map((text) => (
                <li key={text} className={`${bulletClass} text-gray-700`}>
                  <span
                    className="mt-2 size-1.5 shrink-0 rounded-full bg-blue-600"
                    aria-hidden
                  />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-6 text-center text-sm leading-relaxed text-gray-600 sm:text-base">
          {supporting}
        </p>
      </div>
    </section>
  );
}
