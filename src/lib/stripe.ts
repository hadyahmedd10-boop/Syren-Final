import Stripe from "stripe";

const getStripe = () => {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) return null;
  
  return new Stripe(key, {
    apiVersion: "2025-12-15.clover" as any,
    typescript: true,
  });
};

export const stripe = getStripe();
