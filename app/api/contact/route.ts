import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { InquirySchema } from "@/lib/validations";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      req.headers.get("x-real-ip") ??
      "unknown";

    const body = await req.json();
    const parsed = InquirySchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, errors: parsed.error.flatten().fieldErrors },
        { status: 400 },
      );
    }

    const {
      fullName,
      phone,
      email,
      eventType,
      eventDate,
      message,
      serviceSlug,
      honeypot,
    } = parsed.data;

    const source = typeof body.source === "string" ? body.source : "website";

    // Honeypot — silently accept bot submissions without saving
    if (honeypot) {
      return NextResponse.json(
        { success: true, id: "bot-detected" },
        { status: 201 },
      );
    }

    const inquiry = await prisma.inquiry.create({
      data: {
        fullName,
        phone,
        email,
        eventType,
        eventDate: new Date(eventDate),
        message,
        serviceSlug: serviceSlug ?? null,
        source: source ?? "website",
        ipAddress: ip,
        userAgent: req.headers.get("user-agent") ?? null,
      },
    });

    return NextResponse.json(
      { success: true, id: inquiry.id },
      { status: 201 },
    );
  } catch (err) {
    console.error("[contact API]", err);
    return NextResponse.json(
      { success: false, error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}

export async function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}
