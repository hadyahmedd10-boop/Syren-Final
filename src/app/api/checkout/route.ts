import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { experiences } from "@/data/experiences";
import { excursions } from "@/data/excursions";

// Placeholder pricing map as requested
const PRICING_MAP: Record<string, number> = {
  // Experiences
  "cairo-after-dark": 149900,
  "nile-signature": 329900,
  "red-sea-serenity": 249900,
  "luxor-undiscovered": 189900,
  "cairo-exclusive-luxury": 499900,
  "the-signature-nile-journey": 389900,
  
  // Excursions
  "hurghada-to-luxor-day-trip": 19900,
  "hurghada-to-cairo-day-trip-by-car": 19900,
  "hurghada-jeep-safari": 9900,
};

export async function POST(req: Request) {
  try {
    if (!stripe) {
      return NextResponse.json(
        { error: "Stripe is not configured" },
        { status: 500 }
      );
    }

    const { itemType, slug } = await req.json();

    if (!itemType || !slug) {
      return NextResponse.json(
        { error: "Missing itemType or slug" },
        { status: 400 }
      );
    }

    let item;
    if (itemType === "experience") {
      item = experiences.find((e) => e.slug === slug);
    } else if (itemType === "excursion") {
      item = excursions.find((e) => e.slug === slug);
    } else {
      return NextResponse.json(
        { error: "Invalid itemType" },
        { status: 400 }
      );
    }

    if (!item) {
      return NextResponse.json(
        { error: `${itemType} not found` },
        { status: 404 }
      );
    }

    // Get price from map or data file (fallback to 9900 for excursions if not in map)
    const unitAmount = PRICING_MAP[slug] || (itemType === "excursion" ? 9900 : 149900);

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: item.title,
              description: "description" in item ? item.description : item.shortDescription,
            },
            unit_amount: unitAmount,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${siteUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/cancel`,
      metadata: {
        itemType,
        slug,
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe Checkout Error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Internal Server Error" },
      { status: 500 }
    );
  }
}
