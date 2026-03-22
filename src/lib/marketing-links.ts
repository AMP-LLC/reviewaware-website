/**
 * Lite trial CTAs point at the app signup flow, localized when possible.
 *
 * Defaults: English has no `lang` query (typical default locale); Spanish uses `lang=es`.
 * For Spanish to actually open in Spanish, `app.reviewaware.com/signup` must read
 * `searchParams.lang` (or your chosen param) on mount and set the UI locale.
 *
 * Env overrides (optional):
 * - `NEXT_PUBLIC_LITE_TRIAL_URL` — English signup URL (must not be Spanish-only).
 * - `NEXT_PUBLIC_LITE_TRIAL_URL_ES` — Spanish signup URL (when marketing locale is `es`).
 */
const DEFAULT_SIGNUP_EN = "https://app.reviewaware.com/signup";
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

  const configured = process.env.NEXT_PUBLIC_LITE_TRIAL_URL?.trim();
  if (configured && configured.length > 0) {
    // Avoid misconfigured env (e.g. Spanish URL set as the "English" override).
    const looksSpanish =
      /[?&]lang=es\b/i.test(configured) || /[?&]locale=es\b/i.test(configured);
    if (!looksSpanish) {
      return configured;
    }
  }
  return DEFAULT_SIGNUP_EN;
}
