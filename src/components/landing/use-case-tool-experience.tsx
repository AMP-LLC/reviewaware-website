import { getTranslations } from "next-intl/server";

import { GoogleReviewCardsTool } from "@/components/landing/google-review-cards-tool";
import { GoogleReviewLinkGeneratorTool } from "@/components/landing/google-review-link-generator-tool";
import { GoogleReviewQrCodeTool } from "@/components/landing/google-review-qr-code-tool";
import type { UseCaseToolExperience } from "@/lib/use-case-pages/registry";

export async function UseCaseToolExperience({
  messageKey,
  kind,
}: {
  messageKey: string;
  kind: UseCaseToolExperience;
}) {
  const t = await getTranslations("useCasePages");
  const p = `${messageKey}.tool`;

  if (kind === "linkGenerator") {
    const copy = {
      sectionTitle: t(`${p}.sectionTitle`),
      sectionIntro: t(`${p}.sectionIntro`),
      placeLabel: t(`${p}.placeLabel`),
      placePlaceholder: t(`${p}.placePlaceholder`),
      placeHelp: t(`${p}.placeHelp`),
      buildButton: t(`${p}.buildButton`),
      resultLabel: t(`${p}.resultLabel`),
      copyButton: t(`${p}.copyButton`),
      copiedHint: t(`${p}.copiedHint`),
      helpTitle: t(`${p}.helpTitle`),
      helpStep1: t(`${p}.helpStep1`),
      helpStep2: t(`${p}.helpStep2`),
      helpStep3: t(`${p}.helpStep3`),
    };
    return <GoogleReviewLinkGeneratorTool copy={copy} />;
  }

  if (kind === "qrCode") {
    const copy = {
      sectionTitle: t(`${p}.sectionTitle`),
      sectionIntro: t(`${p}.sectionIntro`),
      urlLabel: t(`${p}.urlLabel`),
      urlPlaceholder: t(`${p}.urlPlaceholder`),
      invalidUrl: t(`${p}.invalidUrl`),
      showQrButton: t(`${p}.showQrButton`),
      qrAlt: t(`${p}.qrAlt`),
      apiNote: t(`${p}.apiNote`),
      openLink: t(`${p}.openLink`),
    };
    return <GoogleReviewQrCodeTool copy={copy} />;
  }

  const copy = {
    sectionTitle: t(`${p}.sectionTitle`),
    sectionIntro: t(`${p}.sectionIntro`),
    checklistTitle: t(`${p}.checklistTitle`),
    item1: t(`${p}.item1`),
    item2: t(`${p}.item2`),
    item3: t(`${p}.item3`),
    item4: t(`${p}.item4`),
    item5: t(`${p}.item5`),
    specsTitle: t(`${p}.specsTitle`),
    spec1: t(`${p}.spec1`),
    spec2: t(`${p}.spec2`),
    spec3: t(`${p}.spec3`),
    spec4: t(`${p}.spec4`),
  };
  return <GoogleReviewCardsTool copy={copy} />;
}
