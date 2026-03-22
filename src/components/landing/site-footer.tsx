import Image from "next/image";
import { getTranslations } from "next-intl/server";

import { Link } from "@/i18n/navigation";

export async function SiteFooter() {
  const t = await getTranslations("footer");
  const tHeader = await getTranslations("header");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200/60 bg-white py-16 sm:py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 text-center text-sm text-zinc-600 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex shrink-0 items-center justify-center">
          <Image
            src="/reviewaware-logo.svg"
            alt={tHeader("brand")}
            width={130}
            height={32}
            className="h-8 w-auto"
          />
        </Link>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
          <Link
            href="/privacy"
            className="font-medium transition-colors duration-200 hover:text-zinc-950"
          >
            {t("privacy")}
          </Link>
          <Link
            href="/terms"
            className="font-medium transition-colors duration-200 hover:text-zinc-950"
          >
            {t("terms")}
          </Link>
          <a
            href="mailto:support@reviewaware.com"
            className="font-medium transition-colors duration-200 hover:text-zinc-950"
          >
            support@reviewaware.com
          </a>
        </div>
        <p className="text-sm text-zinc-500">
          {t("copyright", { year })}
        </p>
      </div>
    </footer>
  );
}
