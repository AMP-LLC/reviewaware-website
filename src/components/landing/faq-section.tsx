"use client";

import { useTranslations } from "next-intl";

import { cn } from "@/lib/utils";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FaqSectionProps = {
  sectionClassName?: string;
};

export function FaqSection({ sectionClassName }: FaqSectionProps = {}) {
  const t = useTranslations("faq");

  const items = [
    { q: t("q1"), a: t("a1") },
    { q: t("q2"), a: t("a2") },
    { q: t("q3"), a: t("a3") },
    { q: t("q4"), a: t("a4") },
    { q: t("q5"), a: t("a5") },
  ];

  return (
    <section
      id="faq"
      className={cn(
        "border-b border-zinc-200/60 bg-gray-50 py-12 md:py-16 lg:py-24",
        sectionClassName,
      )}
    >
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-center text-[1.875rem] font-semibold leading-tight tracking-tight text-zinc-950 sm:text-4xl lg:text-[2.625rem]">
          {t("title")}
        </h2>
        <div className="mx-auto mt-12 w-full">
          <Accordion
            type="single"
            collapsible
            className="mx-auto w-full max-w-3xl rounded-2xl border border-zinc-200/60 bg-zinc-50/40 px-5 py-3 text-center shadow-sm shadow-zinc-950/[0.03] sm:px-8 sm:py-4"
          >
            {items.map((item, i) => (
              <AccordionItem key={`faq-${i}`} value={`item-${i}`}>
                <AccordionTrigger className="flex w-full items-center justify-center gap-1 py-5 text-center sm:gap-1.5 [&>svg]:shrink-0">
                  <span className="min-w-0 text-pretty">{item.q}</span>
                </AccordionTrigger>
                <AccordionContent className="text-center text-pretty">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
