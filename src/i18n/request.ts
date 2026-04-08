import { hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";

import enSeoLayers from "../../messages/seo-layers.en.json";
import esSeoLayers from "../../messages/seo-layers.es.json";
import { mergeMessages } from "./merge-messages";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  const base = (await import(`../../messages/${locale}.json`)).default as Record<
    string,
    unknown
  >;
  const seoLayers = locale === "es" ? esSeoLayers : enSeoLayers;
  const messages = mergeMessages(base, seoLayers as Record<string, unknown>);

  return {
    locale,
    messages,
  };
});
