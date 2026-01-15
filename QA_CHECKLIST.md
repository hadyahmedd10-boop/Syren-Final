# Syren Final QA Checklist

## 1. Core Functionality
- [ ] Navigation: All navbar links work and scroll/navigate correctly.
- [ ] Footer: All social links and secondary links are correct.
- [ ] Testimonial Submission: Form works and sends data to Supabase.
- [ ] Testimonial Approval: Admin dashboard correctly displays and allows approval of testimonials.

## 2. Stripe Checkout Integration
- [ ] Checkout Session: Clicking "Reserve" correctly initiates a session and redirects to Stripe.
- [ ] Success Flow: Paying with a test card redirects to `/success` with a branded confirmation.
- [ ] Cancel Flow: Clicking back/cancel on Stripe returns to `/cancel` with a calm message.
- [ ] Pricing: Verify pricing matches the `PRICING_MAP` in `api/checkout/route.ts`.
- [ ] Security: Ensure `STRIPE_SECRET_KEY` is not present in any client-side bundle or network request.

## 3. Content & Design
- [ ] Spacing: Verify that the "minimal spacing" between sections looks perfect on all screen sizes.
- [ ] Typography: Consistent font usage across all sections.
- [ ] Images: No broken images; alt tags present for SEO.
- [ ] Mobile Responsiveness: Hero, Destinations, and Experience cards look good on mobile.

## 4. SEO & Performance
- [ ] Meta Tags: Title and description present on all pages.
- [ ] JSON-LD: Schema markup present on Home and Destination pages.
- [ ] Image Optimization: Using Next.js Image component with appropriate sizes.
- [ ] Favicon: Custom favicon is present.

## 5. Required Vercel Environment Variables
The following variables must be set in the Vercel Dashboard for the production/preview environments:

| Variable | Scope | Description |
| :--- | :--- | :--- |
| `NEXT_PUBLIC_SITE_URL` | All | Base URL (e.g., https://syren.travel) |
| `STRIPE_SECRET_KEY` | Server | **(Secret)** Your Stripe secret key |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | All | Your Stripe publishable key |
| `NEXT_PUBLIC_SUPABASE_URL` | All | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | All | Supabase anonymous key |
| `SUPABASE_SERVICE_ROLE_KEY` | Server | **(Secret)** Supabase service role key |
| `ADMIN_EMAIL_ALLOWLIST` | All | Comma-separated list of admin emails |

## 6. Deployment Verification
- [ ] Root Directory: Set to `syren` in Vercel project settings.
- [ ] Build Command: `npm run build`.
- [ ] Output Directory: `default`.
