import { NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * POST JSON: `{ email: string, locale?: string }`
 *
 * Set `PLUS_WAITLIST_WEBHOOK_URL` on Vercel to receive signups (Zapier, Make, Slack, etc.).
 * In development, if unset, the request is logged and returns 200 so the UI can be tested.
 */
export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (typeof body !== "object" || body === null) {
    return NextResponse.json({ error: "Invalid body" }, { status: 400 });
  }

  const raw = body as Record<string, unknown>;
  const email = typeof raw.email === "string" ? raw.email.trim() : "";
  const locale =
    typeof raw.locale === "string" ? raw.locale.slice(0, 12) : "en";

  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const webhook = process.env.PLUS_WAITLIST_WEBHOOK_URL?.trim();

  if (!webhook) {
    if (process.env.NODE_ENV === "development") {
      console.info("[plus-waitlist] (no PLUS_WAITLIST_WEBHOOK_URL)", { email, locale });
      return NextResponse.json({ ok: true });
    }
    return NextResponse.json({ error: "Waitlist not configured" }, { status: 503 });
  }

  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        locale: locale || "en",
        source: "marketing-plus-waitlist",
        submittedAt: new Date().toISOString(),
      }),
    });

    if (!res.ok) {
      console.error("[plus-waitlist] webhook HTTP", res.status);
      return NextResponse.json({ error: "Upstream error" }, { status: 502 });
    }
  } catch (e) {
    console.error("[plus-waitlist]", e);
    return NextResponse.json({ error: "Request failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
