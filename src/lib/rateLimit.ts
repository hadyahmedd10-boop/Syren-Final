import { Redis } from "@upstash/redis"; 
 import { Ratelimit } from "@upstash/ratelimit"; 
 
 // Only initialize if environment variables are present
 const hasUpstashVars = 
   process.env.UPSTASH_REDIS_REST_URL && 
   process.env.UPSTASH_REDIS_REST_URL !== "PASTE_HERE" &&
   process.env.UPSTASH_REDIS_REST_TOKEN &&
   process.env.UPSTASH_REDIS_REST_TOKEN !== "PASTE_HERE";

 const redis = hasUpstashVars ? Redis.fromEnv() : null; 
 
 // General form limiter: 5 requests per 10 minutes per IP 
 export const formRateLimit = redis ? new Ratelimit({ 
   redis, 
   limiter: Ratelimit.slidingWindow(5, "10 m"), 
   analytics: true, 
   prefix: "syren:rl:forms", 
 }) : null; 
 
 // Slightly stricter for testimonials (spam magnet) 
export const testimonialRateLimit = redis ? new Ratelimit({ 
  redis, 
  limiter: Ratelimit.slidingWindow(3, "30 m"), 
  analytics: true, 
  prefix: "syren:rl:testimonials", 
}) : null; 

// Specific limiters for contact and quote leads
export const contactRateLimit = redis ? new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(5, "10 m"),
  analytics: true,
  prefix: "syren:rl:contact",
}) : null;

export const quoteRateLimit = redis ? new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(5, "10 m"),
  analytics: true,
  prefix: "syren:rl:quote",
}) : null; 
 
 export function getClientIp(req: Request) { 
   const ip = 
     req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || 
     req.headers.get("x-real-ip")?.trim() || 
     "unknown"; 
   return ip; 
 }

