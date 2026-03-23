"use client";

import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";

type MobileStickyCtaProps = {
  trialHref: string;
};

/**
 * Mobile-only persistent conversion bar. Hidden from md breakpoint up.
 */
export function MobileStickyCta({ trialHref }: MobileStickyCtaProps) {
  const t = useTranslations("mobileStickyCta");

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-zinc-200/80 bg-white/95 px-4 pt-3 shadow-[0_-10px_40px_-12px_rgba(15,23,42,0.18)] backdrop-blur-md md:hidden"
      style={{
        paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom, 0px))",
      }}
    >
      <Button
        asChild
        size="lg"
        className="h-12 w-full text-base font-semibold shadow-lg shadow-blue-600/25"
      >
        <a href={trialHref}>{t("cta")}</a>
      </Button>
      <p className="mt-2 text-center text-[11px] font-medium leading-tight text-zinc-500">
        {t("sub")}
      </p>
    </div>
  );
}
