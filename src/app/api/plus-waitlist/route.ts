import { NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * POST JSON: `{ email: string, locale?: string }`
 *
 * Preferred storage: Supabase table via `SUPABASE_URL` + `SUPABASE_SERVICE_ROLE_KEY`.
 * Optional fallback: `PLUS_WAITLIST_WEBHOOK_URL` (Zapier, Make, Slack, etc.).
 * In development, if neither is configured, request is logged and returns 200 for UI testing.
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

  const source = "marketing-plus-waitlist";
  const submittedAt = new Date().toISOString();

  const supabaseUrl = process.env.SUPABASE_URL?.trim();
  const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY?.trim();

  // Prefer DB persistence when Supabase is configured.
  if (supabaseUrl && supabaseServiceRoleKey) {
    const insertUrl = `${supabaseUrl.replace(/\/+$/, "")}/rest/v1/plus_waitlist_signups?on_conflict=email`;
    try {
      const res = await fetch(insertUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: supabaseServiceRoleKey,
          Authorization: `Bearer ${supabaseServiceRoleKey}`,
          Prefer: "resolution=merge-duplicates,return=minimal",
        },
        body: JSON.stringify({
          email,
          locale: locale || "en",
          source,
          submitted_at: submittedAt,
        }),
      });

      if (res.ok) {
        return NextResponse.json({ ok: true });
      }

      // If DB is configured but write fails, surface as upstream/config issue.
      console.error("[plus-waitlist] supabase HTTP", res.status);
      return NextResponse.json({ error: "Upstream error" }, { status: 502 });
    } catch (e) {
      console.error("[plus-waitlist] supabase", e);
      return NextResponse.json({ error: "Request failed" }, { status: 502 });
    }
  }

  const webhook = process.env.PLUS_WAITLIST_WEBHOOK_URL?.trim();

  // Fallback behavior when Supabase is not configured.
  if (!webhook) {
    if (process.env.NODE_ENV === "development") {
      console.info("[plus-waitlist] (no Supabase or webhook configured)", { email, locale });
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
        source,
        submittedAt,
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
