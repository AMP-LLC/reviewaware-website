import { getTranslations } from "next-intl/server";

import { absoluteMarketingUrl } from "@/lib/site-url";
import { cn } from "@/lib/utils";

const sectionClass =
  "border-b border-zinc-200/60 bg-white py-12 md:py-16 lg:py-24";
const proseWrap = "mx-auto max-w-3xl px-6";

type StepSpec = { title: string; paragraphs: string[] };

function buildHowToJsonLd({
  locale,
  name,
  description,
  steps,
}: {
  locale: string;
  name: string;
  description: string;
  steps: StepSpec[];
}) {
  const url = absoluteMarketingUrl(locale, ["how-to-get-more-google-reviews"]);
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    inLanguage: locale === "es" ? "es" : "en",
    url,
    step: steps.map((step, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: step.title,
      text: step.paragraphs.filter(Boolean).join("\n\n"),
    })),
  };
}

export async function HowToGoogleReviewsGuide({ locale }: { locale: string }) {
  const tUseCase = await getTranslations("useCasePages");
  const g = (key: string) => tUseCase(`howToGetMoreGoogleReviews.guide.${key}`);

  const steps: StepSpec[] = Array.from({ length: 7 }, (_, i) => {
    const n = i + 1;
    const p2 = g(`step${n}P2`);
    return {
      title: g(`step${n}Title`),
      paragraphs: [g(`step${n}P1`), p2.trim().length > 0 ? p2 : ""].filter(
        (p) => p.trim().length > 0,
      ),
    };
  });

  const howToLd = buildHowToJsonLd({
    locale,
    name: g("howToSchemaName"),
    description: g("howToSchemaDescription"),
    steps,
  });

  const tableRows = [
    {
      method: g("tableRow1Method"),
      difficulty: g("tableRow1Difficulty"),
      results: g("tableRow1Results"),
    },
    {
      method: g("tableRow2Method"),
      difficulty: g("tableRow2Difficulty"),
      results: g("tableRow2Results"),
    },
    {
      method: g("tableRow3Method"),
      difficulty: g("tableRow3Difficulty"),
      results: g("tableRow3Results"),
    },
    {
      method: g("tableRow4Method"),
      difficulty: g("tableRow4Difficulty"),
      results: g("tableRow4Results"),
    },
    {
      method: g("tableRow5Method"),
      difficulty: g("tableRow5Difficulty"),
      results: g("tableRow5Results"),
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToLd) }}
      />
      <article className="border-b border-zinc-200/60 bg-white" id="guide">
        <div className={cn(proseWrap, "py-12 md:py-16")}>
          <div
            className="rounded-xl border border-blue-200/80 bg-gradient-to-b from-blue-50/90 to-sky-50/40 p-6 shadow-sm md:p-8"
            aria-label={g("quickSummaryAriaLabel")}
          >
            <h2 className="text-lg font-semibold tracking-tight text-zinc-950 md:text-xl">
              {g("quickSummaryTitle")}
            </h2>
            <p className="mt-3 text-pretty text-sm leading-relaxed text-zinc-700 md:text-base">
              {g("quickSummaryIntro")}
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-pretty text-sm leading-relaxed text-zinc-800 md:text-base">
              <li>{g("quickSummaryBullet1")}</li>
              <li>{g("quickSummaryBullet2")}</li>
              <li>{g("quickSummaryBullet3")}</li>
              <li>{g("quickSummaryBullet4")}</li>
            </ul>
          </div>
        </div>

        <section className={sectionClass} aria-labelledby="why-reviews-heading">
          <div className={proseWrap}>
            <h2
              id="why-reviews-heading"
              className="text-balance text-[1.625rem] font-semibold leading-tight tracking-tight text-zinc-950 sm:text-3xl"
            >
              {g("whyTitle")}
            </h2>
            <p className="mt-6 text-pretty text-base leading-relaxed text-zinc-700 sm:text-lg">
              {g("whyIntro")}
            </p>
            <ul className="mt-6 list-disc space-y-2 pl-5 text-pretty text-base leading-relaxed text-zinc-700 sm:text-lg">
              <li>{g("whyBullet1")}</li>
              <li>{g("whyBullet2")}</li>
              <li>{g("whyBullet3")}</li>
            </ul>
            <p className="mt-6 text-pretty text-base leading-relaxed text-zinc-700 sm:text-lg">
              {g("whyStat")}
            </p>
          </div>
        </section>

        <section className={sectionClass} aria-labelledby="seven-ways-heading">
          <div className={proseWrap}>
            <h2
              id="seven-ways-heading"
              className="text-balance text-[1.625rem] font-semibold leading-tight tracking-tight text-zinc-950 sm:text-3xl"
            >
              {g("sevenWaysTitle")}
            </h2>
            <ol className="mt-8 space-y-10">
              {steps.map((step, i) => (
                <li key={i} className="list-none">
                  <h3 className="text-lg font-semibold text-zinc-950 sm:text-xl">
                    <span className="text-blue-700">{i + 1}.</span> {step.title}
                  </h3>
                  <div className="mt-3 space-y-3 text-pretty text-base leading-relaxed text-zinc-700 sm:text-lg">
                    {step.paragraphs.map((p, j) => (
                      <p key={j}>{p}</p>
                    ))}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className={sectionClass} aria-labelledby="methods-table-heading">
          <div className={proseWrap}>
            <h2
              id="methods-table-heading"
              className="text-balance text-[1.625rem] font-semibold leading-tight tracking-tight text-zinc-950 sm:text-3xl"
            >
              {g("tableSectionTitle")}
            </h2>
            <p className="mt-6 text-pretty text-base leading-relaxed text-zinc-700 sm:text-lg">
              {g("tableIntro")}
            </p>
            <div className="mt-6 overflow-x-auto rounded-lg border border-zinc-200/80 bg-zinc-50/50">
              <table className="w-full min-w-[280px] text-left text-sm text-zinc-800 sm:text-base">
                <thead className="border-b border-zinc-200/80 bg-zinc-100/80">
                  <tr>
                    <th scope="col" className="px-4 py-3 font-semibold text-zinc-950">
                      {g("tableColMethod")}
                    </th>
                    <th scope="col" className="px-4 py-3 font-semibold text-zinc-950">
                      {g("tableColDifficulty")}
                    </th>
                    <th scope="col" className="px-4 py-3 font-semibold text-zinc-950">
                      {g("tableColResults")}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tableRows.map((row, i) => (
                    <tr
                      key={i}
                      className="border-b border-zinc-200/60 last:border-b-0 odd:bg-white/80 even:bg-zinc-50/30"
                    >
                      <td className="px-4 py-3 align-top">{row.method}</td>
                      <td className="px-4 py-3 align-top">{row.difficulty}</td>
                      <td className="px-4 py-3 align-top">{row.results}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className={sectionClass} aria-labelledby="sample-script-heading">
          <div className={proseWrap}>
            <h2
              id="sample-script-heading"
              className="text-balance text-[1.625rem] font-semibold leading-tight tracking-tight text-zinc-950 sm:text-3xl"
            >
              {g("scriptTitle")}
            </h2>
            <blockquote className="mt-6 rounded-lg border border-zinc-200/80 bg-zinc-50/80 px-5 py-4 text-pretty text-base italic leading-relaxed text-zinc-800 sm:text-lg">
              {g("scriptBody")}
            </blockquote>
          </div>
        </section>

        <section className={sectionClass} aria-labelledby="templates-heading">
          <div className={proseWrap}>
            <h2
              id="templates-heading"
              className="text-balance text-[1.625rem] font-semibold leading-tight tracking-tight text-zinc-950 sm:text-3xl"
            >
              {g("templatesTitle")}
            </h2>
            <p className="mt-6 text-pretty text-base leading-relaxed text-zinc-700 sm:text-lg">
              {g("templatesIntro")}
            </p>
            <div className="mt-8 space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-zinc-950">{g("templateSmsTitle")}</h3>
                <pre className="mt-3 overflow-x-auto rounded-lg border border-zinc-200/80 bg-white p-4 text-pretty text-sm leading-relaxed text-zinc-800 whitespace-pre-wrap sm:text-base">
                  {g("templateSmsBody")}
                </pre>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-zinc-950">
                  {g("templateEmailTitle")}
                </h3>
                <pre className="mt-3 overflow-x-auto rounded-lg border border-zinc-200/80 bg-white p-4 text-pretty text-sm leading-relaxed text-zinc-800 whitespace-pre-wrap sm:text-base">
                  {g("templateEmailBody")}
                </pre>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-zinc-950">
                  {g("templateInPersonTitle")}
                </h3>
                <pre className="mt-3 overflow-x-auto rounded-lg border border-zinc-200/80 bg-white p-4 text-pretty text-sm leading-relaxed text-zinc-800 whitespace-pre-wrap sm:text-base">
                  {g("templateInPersonBody")}
                </pre>
              </div>
            </div>
          </div>
        </section>

        <section className={sectionClass} aria-labelledby="automate-heading">
          <div className={proseWrap}>
            <h2
              id="automate-heading"
              className="text-balance text-[1.625rem] font-semibold leading-tight tracking-tight text-zinc-950 sm:text-3xl"
            >
              {g("autoTitle")}
            </h2>
            <p className="mt-6 text-pretty text-base leading-relaxed text-zinc-700 sm:text-lg">
              {g("autoIntro")}
            </p>
            <ul className="mt-6 list-disc space-y-2 pl-5 text-pretty text-base leading-relaxed text-zinc-700 sm:text-lg">
              <li>{g("autoBullet1")}</li>
              <li>{g("autoBullet2")}</li>
              <li>{g("autoBullet3")}</li>
              <li>{g("autoBullet4")}</li>
            </ul>
          </div>
        </section>

        <section
          className={cn(sectionClass, "bg-zinc-50/40")}
          aria-labelledby="mistakes-heading"
        >
          <div className={proseWrap}>
            <h2
              id="mistakes-heading"
              className="text-balance text-[1.625rem] font-semibold leading-tight tracking-tight text-zinc-950 sm:text-3xl"
            >
              {g("mistakesTitle")}
            </h2>
            <ul className="mt-6 list-disc space-y-3 pl-5 text-pretty text-base leading-relaxed text-zinc-700 sm:text-lg">
              <li>{g("mistake1")}</li>
              <li>{g("mistake2")}</li>
              <li>{g("mistake3")}</li>
              <li>{g("mistake4")}</li>
            </ul>
          </div>
        </section>
      </article>
    </>
  );
}
