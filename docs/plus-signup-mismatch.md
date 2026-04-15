# Plus signup mismatch — marketing verification & app implementation

This repo is the **marketing site** (`reviewaware-website`). The behavioral fix for “Lite trial shown + Plus checkout” lives primarily on **app.reviewaware.com** (signup, provisioning, billing). This document tracks **Track A** (this repo) and **Track B** (app) so both ship together.

---

## Track A — Marketing (this repository)

### Plus CTA URL contract

- **Source:** `src/lib/marketing-links.ts` → `getPlusSignupHref(locale)`.
- **Pricing Plus button:** `src/components/landing/pricing-section.tsx` passes `plusSignupHref` from `getPlusSignupHref` into `pricing-section-client.tsx`.
- **Guarantee:** Every Plus CTA URL includes **`plan=plus`**:
  - Default EN: `https://app.reviewaware.com/signup?plan=plus`
  - Default ES: `https://app.reviewaware.com/signup?plan=plus&lang=es`
  - Lite-trial base + merge: `liteSignupWithPlusPlan()` appends `plan=plus` to whatever `getLiteTrialHref` resolved.
  - Explicit `NEXT_PUBLIC_PLUS_SIGNUP_URL*` values are passed through `withPlusPlanIntent()` so **`plan=plus` is always set** even if env omits it.

### Env overrides (Vercel / `.env`)

| Variable | Role |
|----------|------|
| `NEXT_PUBLIC_LITE_TRIAL_URL` | EN trial signup base; Plus links merge `plan=plus` onto this when Plus-specific URL is unset. |
| `NEXT_PUBLIC_LITE_TRIAL_URL_ES` | ES trial signup base; same merge for ES Plus when `NEXT_PUBLIC_PLUS_SIGNUP_URL_ES` is unset. |
| `NEXT_PUBLIC_PLUS_SIGNUP_URL` | Optional EN Plus CTA override; **`plan=plus` merged automatically**. |
| `NEXT_PUBLIC_PLUS_SIGNUP_URL_ES` | Optional ES Plus CTA override; **`plan=plus` merged automatically**. |

**Misconfiguration to avoid:** Pointing `NEXT_PUBLIC_LITE_TRIAL_URL*` at a path that cannot accept query strings (rare). Staging URLs should still be full `https://…/signup` paths.

See also: root **`VERCEL_DEPLOYMENT.md`**.

---

## Track B — App (`app.reviewaware.com`, separate codebase)

Implement in the **app** repository (not this marketing repo).

### B1. Signup: honor `plan=plus`

On the route that renders `/signup`:

1. Read `searchParams.plan` (e.g. Next.js `searchParams` or router query).
2. If `plan === "plus"`:
   - Default the signup UI to **Plus** (not Lite trial).
   - Persist **upgrade intent** (session flag, user metadata `intendedPlan`, or `pending_plus_checkout`) through account creation.
3. Post-signup redirect: send the user to **Plus checkout** (or an “upgrade to Plus” step), not only into a default “Lite trial started” experience.

### B2. Provisioning: no accidental Lite-trial framing for Plus intent

If new users automatically get a **Lite trial** subscription:

- **Branch:** When signup was entered with `plan=plus` (or persisted `intendedPlan === "plus"`):
  - Either **skip** auto Lite trial creation, or create a neutral/free tier state until Plus payment completes.
  - Create **Plus Stripe Checkout** (or equivalent) immediately or right after email verification, per product rules.

### B3. Billing page: `currentPlan` vs `targetPlan`

Avoid showing **“Lite — trial active”** as the hero while the main block is **Plus checkout**.

| State | Header / hero | Body |
|-------|----------------|------|
| Lite trial, not upgrading | Lite trial messaging | Optional upgrade to Plus |
| Lite trial, upgrading to Plus (`plan=plus` or explicit upgrade) | **“Upgrading to Plus”** (or Plus-focused) | Plus checkout; optional one line “Current: Lite trial” |
| Plus active | Plus as current plan | Manage subscription |

Use a single view-model: `currentPlan`, `checkoutTargetPlan` / `upgradeIntent`, derived from URL, session, and subscription API.

### B4. Verification matrix (app QA)

| URL | Expect signup UI | After account creation | Billing page |
|-----|------------------|-------------------------|--------------|
| `/signup` | Default (e.g. Lite trial) | Default provisioning | Matches default plan |
| `/signup?plan=plus` | Plus selected / paid flow | No “stuck on Lite trial only” if Plus was intended | Header aligns with Plus upgrade, not Lite-trial hero + Plus block mismatch |
| `/signup?plan=plus&lang=es` | ES + Plus intent | Same as above | Same, localized |

Re-check marketing: EN home (or any page with pricing) **Plus** button → resolved href contains `plan=plus`; ES locale → `plan=plus` and `lang=es` as implemented in `getPlusSignupHref("es")`.

---

## Ownership

| Area | Repo |
|------|------|
| Plus CTA URLs, env docs | `reviewaware-website` (this repo) |
| Signup query handling, trials, Stripe, billing UI | App repo for `app.reviewaware.com` |
