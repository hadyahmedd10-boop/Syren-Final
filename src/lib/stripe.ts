import Stripe from "stripe";

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

export const stripe = stripeSecretKey 
  ? new Stripe(stripeSecretKey, {
      apiVersion: "2024-12-18.acacia" as Stripe.StripeConfig["apiVersion"],
    })
  : null;

export const isStripeEnabled = !!stripeSecretKey;


