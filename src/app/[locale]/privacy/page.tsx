import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";
import { routing } from "@/i18n/routing";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "privacyPage" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default async function PrivacyPage({ params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const t = await getTranslations("privacyPage");

  const sectionKeys = ["s1", "s2", "s3", "s4", "s5"] as const;

  return (
    <>
      <SiteHeader locale={locale} />
      <main className="border-b border-zinc-200/60 bg-white">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <p className="mb-8 text-center text-sm text-muted-foreground">
            <a
              href="https://reviewaware.com"
              className="font-medium text-zinc-700 hover:text-zinc-950"
            >
              {t("backToHome")}
            </a>
          </p>
          <h1 className="text-center text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
            {t("title")}
          </h1>
          <p className="mt-3 text-center text-sm text-muted-foreground">{t("effectiveDate")}</p>

          <div className="mt-12 max-w-none space-y-10 text-sm leading-relaxed text-zinc-700 sm:text-base">
            <p>{t("intro")}</p>
            {sectionKeys.map((key) => (
              <section key={key}>
                <h2 className="text-lg font-semibold text-zinc-950">{t(`${key}Title`)}</h2>
                <p className="mt-3 whitespace-pre-line">{t(`${key}Body`)}</p>
              </section>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
