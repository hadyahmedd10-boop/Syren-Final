# Syren Final QA Checklist

## 1. Core Functionality
- [ ] Navigation: All navbar links work and scroll/navigate correctly.
- [ ] Footer: All social links and secondary links are correct.
- [ ] Testimonial Submission: Form works and sends data to Supabase.
- [ ] Testimonial Approval: Admin dashboard correctly displays and allows approval of testimonials.
- [ ] Booking Flow: Stripe checkout redirects correctly (requires environment variables).

## 2. Content & Design
- [ ] Spacing: Verify that the "minimal spacing" between sections looks perfect on all screen sizes.
- [ ] Typography: Consistent font usage across all sections.
- [ ] Images: No broken images; alt tags present for SEO.
- [ ] Mobile Responsiveness: Hero, Destinations, and Experience cards look good on mobile.

## 3. SEO & Performance
- [ ] Meta Tags: Title and description present on all pages.
- [ ] JSON-LD: Schema markup present on Home and Destination pages.
- [ ] Image Optimization: Using Next.js Image component with appropriate sizes.
- [ ] Favicon: Custom favicon is present.

## 4. Analytics
- [ ] PostHog: Page views and checkout clicks are being tracked.

## 5. Stripe Integration
- [ ] API Route: `/api/create-checkout-session` handles errors gracefully.
- [ ] Checkout: Success and Cancel URLs lead back to the correct experience page.
