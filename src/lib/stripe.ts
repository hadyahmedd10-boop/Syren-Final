import Stripe from "stripe";

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

if (!stripeSecretKey && process.env.NODE_ENV === "production") {
  throw new Error("STRIPE_SECRET_KEY is missing in production environment");
}

export const stripe = stripeSecretKey 
  ? new Stripe(stripeSecretKey, {
      apiVersion: "2024-12-18.acacia" as Stripe.StripeConfig["apiVersion"],
    })
  : null;


