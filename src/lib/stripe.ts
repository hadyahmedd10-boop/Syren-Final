import Stripe from "stripe";

// Lazily initialize Stripe to avoid build-time errors when environment variables are missing
const getStripe = () => {
  const apiKey = process.env.STRIPE_SECRET_KEY;
  
  if (!apiKey) {
    // Return null or a dummy instance that throws only when called
    // For build time, we just need the module to evaluate successfully
    return null;
  }

  return new Stripe(apiKey, {
    apiVersion: "2025-12-15.clover" as Stripe.StripeConfig["apiVersion"],
  });
};

export const stripe = getStripe();

