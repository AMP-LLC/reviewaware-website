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
 * - `NEXT_PUBLIC_PLUS_SIGNUP_URL` / `NEXT_PUBLIC_PLUS_SIGNUP_URL_ES` — optional Plus upgrade URLs.
 *   When unset, Plus CTAs use the same resolved Lite signup URL with `plan=plus` appended (never the bare Lite path).
 *   When set, `plan=plus` is still merged in so a misconfigured override cannot drop upgrade intent.
 */
const DEFAULT_SIGNUP_EN = "https://app.reviewaware.com/signup";
const DEFAULT_SIGNUP_ES = "https://app.reviewaware.com/signup?lang=es";
const DEFAULT_SIGNUP_PLUS_EN = "https://app.reviewaware.com/signup?plan=plus";
const DEFAULT_SIGNUP_PLUS_ES = "https://app.reviewaware.com/signup?plan=plus&lang=es";

const DEFAULT_LIVE_DEMO_EN = "https://app.reviewaware.com/demo";
const DEFAULT_LIVE_DEMO_ES = "https://app.reviewaware.com/demo?lang=es";

/** Public live product demo (customer review flow). */
export function getLiveDemoHref(locale: string): string {
  const isEs = locale === "es";

  if (isEs) {
    const configuredEs = process.env.NEXT_PUBLIC_LIVE_DEMO_URL_ES;
    if (configuredEs && configuredEs.trim().length > 0) {
      return configuredEs.trim();
    }
    return DEFAULT_LIVE_DEMO_ES;
  }

  const configured = process.env.NEXT_PUBLIC_LIVE_DEMO_URL?.trim();
  if (configured && configured.length > 0) {
    const looksSpanish =
      /[?&]lang=es\b/i.test(configured) || /[?&]locale=es\b/i.test(configured);
    if (!looksSpanish) {
      return configured;
    }
  }
  return DEFAULT_LIVE_DEMO_EN;
}

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

function liteSignupWithPlusPlan(liteTrialHref: string, fallbackPlusUrl: string): string {
  try {
    const u = new URL(liteTrialHref);
    u.searchParams.set("plan", "plus");
    return u.href;
  } catch {
    return fallbackPlusUrl;
  }
}

/** Ensures `plan=plus` is always present for Plus CTAs (covers misconfigured `NEXT_PUBLIC_PLUS_SIGNUP_URL*`). */
function withPlusPlanIntent(href: string, fallback: string): string {
  try {
    const u = new URL(href);
    u.searchParams.set("plan", "plus");
    return u.href;
  } catch {
    return fallback;
  }
}

/** Plus signup CTA URL (preselects Plus plan in app signup flow). Never the bare Lite-only path. */
export function getPlusSignupHref(locale: string): string {
  const isEs = locale === "es";

  if (isEs) {
    const configuredEs = process.env.NEXT_PUBLIC_PLUS_SIGNUP_URL_ES;
    if (configuredEs && configuredEs.trim().length > 0) {
      return withPlusPlanIntent(configuredEs.trim(), DEFAULT_SIGNUP_PLUS_ES);
    }
    return liteSignupWithPlusPlan(getLiteTrialHref("es"), DEFAULT_SIGNUP_PLUS_ES);
  }

  const configured = process.env.NEXT_PUBLIC_PLUS_SIGNUP_URL?.trim();
  if (configured && configured.length > 0) {
    const looksSpanish =
      /[?&]lang=es\b/i.test(configured) || /[?&]locale=es\b/i.test(configured);
    if (!looksSpanish) {
      return withPlusPlanIntent(configured, DEFAULT_SIGNUP_PLUS_EN);
    }
  }

  return liteSignupWithPlusPlan(getLiteTrialHref(locale), DEFAULT_SIGNUP_PLUS_EN);
}
