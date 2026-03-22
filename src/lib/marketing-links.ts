/**
 * Lite trial CTAs point at the app signup flow, localized when possible.
 *
 * Env overrides (optional):
 * - `NEXT_PUBLIC_LITE_TRIAL_URL` — replaces the default English signup URL.
 * - `NEXT_PUBLIC_LITE_TRIAL_URL_ES` — replaces the default Spanish signup URL (when locale is `es`).
 *
 * If the app expects a different query or path for Spanish, set `NEXT_PUBLIC_LITE_TRIAL_URL_ES`
 * to the exact URL (e.g. `https://app.reviewaware.com/signup?locale=es`).
 */
const DEFAULT_SIGNUP_EN = "https://app.reviewaware.com/signup";
/** Default Spanish: same path with `lang=es` (adjust via env if your app uses another param/path). */
const DEFAULT_SIGNUP_ES = "https://app.reviewaware.com/signup?lang=es";

export function getLiteTrialHref(locale: string): string {
  const isEs = locale === "es";

  if (isEs) {
    const configuredEs = process.env.NEXT_PUBLIC_LITE_TRIAL_URL_ES;
    if (configuredEs && configuredEs.trim().length > 0) {
      return configuredEs.trim();
    }
    return DEFAULT_SIGNUP_ES;
  }

  const configured = process.env.NEXT_PUBLIC_LITE_TRIAL_URL;
  if (configured && configured.trim().length > 0) {
    return configured.trim();
  }
  return DEFAULT_SIGNUP_EN;
}
