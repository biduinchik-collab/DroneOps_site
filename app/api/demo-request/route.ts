import { NextResponse } from "next/server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body || typeof body !== "object") {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const name = normalize(body.name);
  const organization = normalize(body.organization);
  const email = normalize(body.email);
  const context = normalize(body.context);
  const locale = normalize(body.locale);

  if (!name || !organization || !email || !context || !emailPattern.test(email)) {
    return NextResponse.json({ ok: false, error: "Missing required fields." }, { status: 400 });
  }

  const payload = {
    name,
    organization,
    email,
    context,
    locale,
    submittedAt: new Date().toISOString(),
    source: "droneoperations.ai",
  };

  if (process.env.CONTACT_WEBHOOK_URL) {
    const response = await fetch(process.env.CONTACT_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      return NextResponse.json({ ok: false, error: "Webhook failed." }, { status: 502 });
    }
  }

  return NextResponse.json({ ok: true });
}

function normalize(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}
