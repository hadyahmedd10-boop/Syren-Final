const BREVO_API_KEY = process.env.BREVO_API_KEY;
const EMAIL_FROM = process.env.EMAIL_FROM;
const NOTIFY_EMAIL = process.env.NOTIFY_EMAIL;

interface SendTransactionalEmailParams {
  subject: string;
  html: string;
  replyTo: string; // customer email (REQUIRED)
}

/**
 * Standardized Brevo email helper for Syren Travel.
 * Uses native fetch to send transactional emails via Brevo API v3.
 */
export async function sendTransactionalEmail({
  subject,
  html,
  replyTo,
}: SendTransactionalEmailParams) {
  // Guard: EMAIL_FROM check
  if (!EMAIL_FROM) {
    console.error("EMAIL_FROM missing");
    return {
      success: false,
      error: "EMAIL_FROM missing",
    };
  }

  // Guard: BREVO_API_KEY check
  if (!BREVO_API_KEY) {
    console.error("BREVO_API_KEY missing");
    return {
      success: false,
      error: "BREVO_API_KEY missing",
    };
  }

  // Guard: NOTIFY_EMAIL check
  if (!NOTIFY_EMAIL) {
    console.error("NOTIFY_EMAIL missing");
    return {
      success: false,
      error: "NOTIFY_EMAIL missing",
    };
  }

  try {
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": BREVO_API_KEY,
      },
      body: JSON.stringify({
        sender: {
          name: "Syren Travel",
          email: EMAIL_FROM,
        },
        to: [
          {
            email: NOTIFY_EMAIL,
            name: "Syren Admin",
          },
        ],
        replyTo: {
          email: replyTo,
        },
        subject: subject,
        htmlContent: html,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      // Improved error logging as requested
      console.error(`Brevo API Error [${response.status}]:`, JSON.stringify(data, null, 2));
      return {
        success: false,
        error: `Brevo Error [${response.status}]: ${data.message || JSON.stringify(data)}`,
      };
    }

    return { success: true };
  } catch (error: unknown) {
    console.error("Fetch error sending to Brevo:", error);
    const message = error instanceof Error ? error.message : "Unknown fetch error";
    return {
      success: false,
      error: message,
    };
  }
}
