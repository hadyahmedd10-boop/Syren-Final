import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, trip_dates, budget, message } = body;

    const notifyEmail = process.env.NOTIFY_EMAIL;

    if (!process.env.RESEND_API_KEY || !notifyEmail) {
      console.error("Missing Resend API key or notification email address");
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Syren <onboarding@resend.dev>", // Replace with verified domain in production
      to: notifyEmail,
      subject: `New Quote Request: ${name}`,
      html: `
        <div style="font-family: serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #1a1a1a;">
          <h1 style="color: #c5a059; border-bottom: 1px solid #c5a059; padding-bottom: 10px;">New Quote Request</h1>
          <p>You have received a new journey inquiry from the website.</p>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 30%;">Name:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Email:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Phone:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${phone || "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Trip Dates:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${trip_dates || "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Budget:</td>
              <td style="padding: 10px; border-bottom: 1px solid #eee;">${budget || "Not provided"}</td>
            </tr>
          </table>

          <div style="margin-top: 30px;">
            <h3 style="color: #c5a059;">Message:</h3>
            <p style="background: #f9f9f9; padding: 15px; border-radius: 5px; font-style: italic;">
              "${message}"
            </p>
          </div>

          <p style="margin-top: 40px; font-size: 12px; color: #888; text-align: center;">
            This inquiry was sent from the Syren Request a Quote form.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (err) {
    console.error("Notify API Error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
