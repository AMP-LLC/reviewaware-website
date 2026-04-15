import { getTranslations } from "next-intl/server";

import { getLiteTrialHref, getPlusSignupHref } from "@/lib/marketing-links";

import { PricingSectionClient } from "@/components/landing/pricing-section-client";

const LITE_FEATURE_KEYS = ["liteFeature1", "liteFeature2", "liteFeature3"] as const;
const LITE_UPGRADE_KEYS = ["liteUpgrade1", "liteUpgrade2", "liteUpgrade3"] as const;
const PLUS_PERFECT_KEYS = ["plusPerfect1", "plusPerfect2", "plusPerfect3"] as const;
const PLUS_FEATURE_KEYS = [
  "plusFeature1",
  "plusFeature2",
  "plusFeature3",
  "plusFeature4",
  "plusFeature5",
] as const;

export async function PricingSection({
  locale,
  liteAnnualLeadIn,
  sectionClassName,
}: {
  locale: string;
  /** Optional one line for industry pages (e.g. annual savings note). */
  liteAnnualLeadIn?: string;
  sectionClassName?: string;
}) {
  const t = await getTranslations("pricing");

  const trialHref = getLiteTrialHref(locale);
  const plusSignupHref = getPlusSignupHref(locale);

  const liteFeatures = LITE_FEATURE_KEYS.map((key) => t(key));
  const liteUpgradeBullets = LITE_UPGRADE_KEYS.map((key) => t(key));
  const plusPerfectBullets = PLUS_PERFECT_KEYS.map((key) => t(key));
  const plusFeatures = PLUS_FEATURE_KEYS.map((key) => t(key));

  return (
    <PricingSectionClient
      sectionClassName={sectionClassName}
      trialHref={trialHref}
      plusSignupHref={plusSignupHref}
      resultsLeadIn={t("resultsLeadIn")}
      title={t("title")}
      planComparisonLine={t("planComparisonLine")}
      introLine1={t("introLine1")}
      introLine2={t("introLine2")}
      monthlyLabel={t("monthly")}
      annualTabLabel={t("annualTab")}
      saveBadge={t("save")}
      perMonthSuffix={t("perMonth")}
      perYearSuffix={t("perYear")}
      mostPopular={t("mostPopular")}
      liteName={t("liteName")}
      liteBadge={t("liteBadge")}
      litePositioningLine={t("litePositioningLine")}
      liteF0={t("liteF0")}
      liteFeatures={liteFeatures}
      liteUpgradeHeading={t("liteUpgradeHeading")}
      liteUpgradeBullets={liteUpgradeBullets}
      liteTrustUnderCta={t("liteTrustUnderCta")}
      plusName={t("plusName")}
      plusBadge={t("plusBadge")}
      plusPositioningLine={t("plusPositioningLine")}
      plusValueLine={t("plusValueLine")}
      plusPerfectHeading={t("plusPerfectHeading")}
      plusPerfectBullets={plusPerfectBullets}
      plusFeatures={plusFeatures}
      plusTrustUnderCta={t("plusTrustUnderCta")}
      liteCtaLabel={t("ctaStartFreeTrial")}
      plusCtaLabel={t("ctaUpgradePlus")}
      liteAnnualLeadIn={liteAnnualLeadIn}
    />
  );
}
