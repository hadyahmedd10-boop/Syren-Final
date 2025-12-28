import { stripe } from "@/lib/stripe" 
import { NextResponse } from "next/server" 

export async function POST(req: Request) { 
  try {
    const { title, price, slug } = await req.json() 

    const session = await stripe.checkout.sessions.create({ 
      payment_method_types: ["card"], 
      mode: "payment", 
      line_items: [ 
        { 
          price_data: { 
            currency: "usd", 
            product_data: { name: title }, 
            unit_amount: price * 100, 
          }, 
          quantity: 1, 
        }, 
      ], 
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/experiences/${slug}?success=true`, 
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/experiences/${slug}?canceled=true`, 
    }) 

    return NextResponse.json({ url: session.url }) 
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Internal Server Error" }, 
      { status: 500 }
    );
  }
}
