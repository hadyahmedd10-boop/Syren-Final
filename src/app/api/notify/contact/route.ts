import { NextResponse } from "next/server";
import { z } from "zod";
import { supabaseAdmin } from "@/lib/supabaseAdmin";
import { contactRateLimit, getClientIp } from "@/lib/rateLimit";
import { sendTransactionalEmail } from "@/lib/email/brevo";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  subject: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
  pathname: z.string().optional(),
});

export async function POST(req: Request) {
  // Rate Limiting
  const ip = getClientIp(req);
  if (contactRateLimit) {
    const { success } = await contactRateLimit.limit(ip);
    if (!success) {
      return NextResponse.json(
        { ok: false, error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }
  }

  try {
    const body = await req.json();
    const validatedData = contactSchema.parse(body);

    // 1. Save to Supabase (service role)
    const { error: dbError } = await supabaseAdmin
      .from("contact_inquiries")
      .insert([
        {
          name: validatedData.name,
          email: validatedData.email,
          phone: validatedData.phone,
          subject: validatedData.subject || "General Inquiry",
          message: validatedData.message,
          pathname: validatedData.pathname,
        },
      ]);

    if (dbError) throw dbError;
    console.log("saved to supabase: contact_inquiries");

    // 2. Send Email via Brevo
    try {
      const htmlContent = `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #1a1a1a; border-bottom: 2px solid #f0f0f0; padding-bottom: 10px;">New Contact Inquiry</h2>
          <div style="margin-top: 20px;">
            <p><strong>Name:</strong> ${validatedData.name}</p>
            <p><strong>Email:</strong> ${validatedData.email}</p>
            ${validatedData.phone ? `<p><strong>Phone:</strong> ${validatedData.phone}</p>` : ""}
            <p><strong>Subject:</strong> ${validatedData.subject || "General Inquiry"}</p>
            <div style="margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-radius: 5px;">
              <p><strong>Message:</strong></p>
              <p style="white-space: pre-wrap;">${validatedData.message}</p>
            </div>
            <p style="margin-top: 10px; font-size: 12px; color: #666;">Sent from page: ${validatedData.pathname || "Unknown"}</p>
          </div>
          <p style="margin-top: 30px; font-size: 12px; color: #666; text-align: center;">Sent from Syren Travel platform</p>
        </div>
      `;

      const emailResult = await sendTransactionalEmail({
        subject: `New Contact Inquiry: ${validatedData.subject || "General Inquiry"}`,
        html: htmlContent,
        replyTo: validatedData.email,
      });

      if (!emailResult.success) {
        throw new Error(emailResult.error || "Email failed");
      }

      console.log("brevo email success: contact inquiry");
      return NextResponse.json({ ok: true }, { status: 200 });
    } catch (emailErr) {
      console.error("brevo email failure:", emailErr);
      return NextResponse.json({ ok: true, warning: "Email failed" }, { status: 200 });
    }
  } catch (err) {
    console.error("Notify route failed:", err);
    return NextResponse.json({ ok: false, error: "Failed to save request" }, { status: 500 });
  }
}
