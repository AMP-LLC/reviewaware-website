import Image from "next/image";
import { getTranslations } from "next-intl/server";

import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { getLiteTrialHref } from "@/lib/marketing-links";

const nav = [
  { href: "#demo", labelKey: "demo" as const },
  { href: "#how-it-works", labelKey: "howItWorks" as const },
  { href: "#pricing", labelKey: "pricing" as const },
  { href: "#faq", labelKey: "faq" as const },
];

export async function SiteHeader({ locale }: { locale: string }) {
  const t = await getTranslations("header");
  const trialHref = getLiteTrialHref(locale);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/60 bg-white/85 backdrop-blur-md supports-[backdrop-filter]:bg-white/70">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src="/reviewaware-logo.svg"
            alt={t("brand")}
            width={130}
            height={32}
            className="h-8 w-auto"
            priority
          />
        </Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-zinc-600 transition-colors duration-200 hover:text-zinc-950"
            >
              {t(item.labelKey)}
            </a>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-3 sm:gap-4">
          <div
            className="flex items-center gap-1.5 text-xs font-medium text-zinc-500"
            aria-label="Language"
          >
            <Link
              href="/"
              locale="en"
              className={
                locale === "en"
                  ? "text-zinc-950"
                  : "transition-colors hover:text-zinc-800"
              }
            >
              {t("localeEn")}
            </Link>
            <span className="text-zinc-300" aria-hidden>
              |
            </span>
            <Link
              href="/"
              locale="es"
              className={
                locale === "es"
                  ? "text-zinc-950"
                  : "transition-colors hover:text-zinc-800"
              }
            >
              {t("localeEs")}
            </Link>
          </div>
          <Button asChild size="sm" className="hidden shrink-0 md:inline-flex">
            <a href={trialHref}>{t("startTrial")}</a>
          </Button>
          <Button asChild size="sm" variant="secondary" className="shrink-0">
            <a href="https://app.reviewaware.com/signin">{t("signIn")}</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
