# Vercel deployment plan — ReviewAware marketing site

This document lists everything to configure when deploying **this** Next.js app (`reviewaware-website`) to Vercel. It matches the code in this repository (trial CTAs, Plus waitlist API, localized signup URLs, marketing images).

---

## 1. Repository and project

| Item | Action |
|------|--------|
| **Git remote** | Push this project to GitHub, GitLab, or Bitbucket (or connect a monorepo). |
| **Vercel project** | Create a new project and import the repository. |
| **Root directory** | If the repo root is the parent folder (`reviewaware website/`), set **Root Directory** to `reviewaware-website` so Vercel runs `npm install` and `next build` in the correct folder. |
| **Framework** | Vercel should auto-detect **Next.js**. Default **Build Command** `next build` and **Output** `.next` are correct. |
| **Node** | Use an LTS Node version supported by Next.js 16 (Vercel default is fine unless you need a specific version). |

---

## 2. Environment variables (Vercel → Project → Settings → Environment Variables)

Add each variable for **Production** (and **Preview** if you want staging PRs to behave the same). **`NEXT_PUBLIC_*` values are embedded at build time** — redeploy after changing them.

### Required for production behavior

| Variable | Required? | Purpose |
|----------|------------|---------|
| **`PLUS_WAITLIST_WEBHOOK_URL`** | **Yes** for live Plus waitlist | URL that receives `POST` JSON when someone submits the **ReviewAware Plus** waitlist modal (`/api/plus-waitlist`). Without it, production returns **503** and users see an error. **Development** without this variable logs the payload and returns 200 for local testing. |

Example payload sent to the webhook:

```json
{
  "email": "user@company.com",
  "locale": "en",
  "source": "marketing-plus-waitlist",
  "submittedAt": "2026-03-22T12:00:00.000Z"
}
```

Point this at Zapier, Make, Slack Incoming Webhook, a Google Apps Script URL, or your own endpoint that stores or forwards leads.

### Optional — trial CTA URLs (defaults work without these)

| Variable | Purpose |
|----------|---------|
| **`NEXT_PUBLIC_LITE_TRIAL_URL`** | Overrides the **English** “Start trial” / “Start Free Trial” links. Default: `https://app.reviewaware.com/signup`. |
| **`NEXT_PUBLIC_LITE_TRIAL_URL_ES`** | Overrides the **Spanish** trial links when the site locale is `es`. Default: `https://app.reviewaware.com/signup?lang=es`. |

Use these for staging (`https://staging-…/signup`) or if the app team changes signup paths or query parameters.

**Lite overrides and Plus:** The **Upgrade to Plus** pricing CTA does **not** use the bare Lite URL. It calls `getPlusSignupHref()`, which appends **`plan=plus`** to the resolved Lite signup URL when the Plus-specific overrides below are unset. If you set `NEXT_PUBLIC_LITE_TRIAL_URL` to staging, Plus links still go to that host with `plan=plus` merged—ensure that app build honors `plan=plus` (see `docs/plus-signup-mismatch.md`).

### Optional — Plus-only CTA URLs

| Variable | Purpose |
|----------|---------|
| **`NEXT_PUBLIC_PLUS_SIGNUP_URL`** | Overrides the **English** Plus / upgrade CTA URL. If omitted, Plus uses the Lite trial URL + `plan=plus`. **`plan=plus` is always merged** in code even when this is set. |
| **`NEXT_PUBLIC_PLUS_SIGNUP_URL_ES`** | Same for **Spanish** locale Plus CTAs. **`plan=plus` is always merged.** |

---

## 3. Not configured in Vercel (handled in code or repo)

| Topic | Where it lives |
|--------|----------------|
| **Marketing screenshots** (`/marketing/en-*.png`, `es-*.png`) | Committed under `public/marketing/`. No env vars. |
| **Screenshot cache busting** | `MARKETING_SCREENSHOTS_VERSION` in `src/components/landing/screenshots-section.tsx` — bump when replacing PNGs. |
| **`next/image` local assets** | `images.localPatterns` in `next.config.ts` for `/marketing/**` — already in repo. |
| **i18n routes** (`/en`, `/es`) | `src/i18n/routing.ts` and middleware — no extra Vercel config for standard hosting. |

---

## 4. Deploy and verify (checklist)

1. **Connect repo** → import → set **Root Directory** if needed → deploy.
2. **Set env vars** in Vercel (at minimum **`PLUS_WAITLIST_WEBHOOK_URL`** for production).
3. **Redeploy** after adding or changing any `NEXT_PUBLIC_*` or server-side env vars.
4. **Smoke test production URL:**
   - [ ] `/en` and `/es` load.
   - [ ] Trial buttons go to `app.reviewaware.com` signup (or your overridden URLs).
   - [ ] **Pricing → Upgrade to Plus** resolves to a URL that includes **`plan=plus`** (inspect link in the pricing section on `/en` and `/es`, or any page that renders that CTA).
   - [ ] Plus **Join Waitlist** opens the modal; submit a test email; webhook receives the JSON (or check Vercel **Functions** logs for `/api/plus-waitlist`).
   - [ ] Pipeline section images load (hard refresh if you recently replaced assets).

---

## 5. Optional Vercel settings

| Item | Notes |
|------|--------|
| **Custom domain** | Project → Domains — point DNS per Vercel instructions. |
| **Preview deployments** | Enable for PRs; duplicate **Preview** env vars if previews should use a staging webhook or signup URLs. |
| **Analytics / Speed Insights** | Enable in Vercel if you use them. |
| **Security headers** | Add in `next.config.ts` or Vercel headers if required by policy. |

---

## 6. Quick reference — env summary

| Name | Scope | When to set |
|------|--------|-------------|
| `PLUS_WAITLIST_WEBHOOK_URL` | Server (API route) | Before relying on Plus waitlist in production. |
| `NEXT_PUBLIC_LITE_TRIAL_URL` | Client (build) | Only if English signup URL should not use the default. |
| `NEXT_PUBLIC_LITE_TRIAL_URL_ES` | Client (build) | Only if Spanish signup URL should not use the default. |
| `NEXT_PUBLIC_PLUS_SIGNUP_URL` | Client (build) | Only if English Plus CTA should not use Lite URL + `plan=plus`. |
| `NEXT_PUBLIC_PLUS_SIGNUP_URL_ES` | Client (build) | Only if Spanish Plus CTA should not use Lite URL + `plan=plus`. |

**Note:** These variables belong on the **marketing site’s** Vercel project, not on the separate `app.reviewaware.com` application project, unless they share the same codebase.

**Plus signup / billing alignment:** See **`docs/plus-signup-mismatch.md`** for the full picture (marketing URL contract + app-side signup and billing behavior).
