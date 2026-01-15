# Syren Deployment & Mirror Verification Checklist

This checklist ensures your Vercel deployment correctly mirrors your GitHub repository and that all security/infrastructure components are functioning as expected.

## 1. Vercel Project Configuration
- [ ] **Git Integration**: Confirm GitHub repository is linked and Vercel Git Integration is enabled.
- [ ] **Auto Deployments**: Confirm "Auto Deployments" is enabled for the `main` branch.
- [ ] **Root Directory**: Verify that `Root Directory` is set to `syren` in Vercel Project Settings.
- [ ] **Framework Preset**: Confirm `Next.js` is selected.
- [ ] **Build Command**: Confirm `npm run build` is used.

## 2. Environment Variables Mapping
Configure these in **Project Settings > Environment Variables**. 
> **Note**: You must redeploy (or create a new deployment) after any environment variable changes for them to take effect.

| Variable | Environment | Description |
| :--- | :--- | :--- |
| `NEXT_PUBLIC_SUPABASE_URL` | All | Your Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | All | Your Supabase anonymous key |
| `SUPABASE_SERVICE_ROLE_KEY` | All | **(Secret)** Required for admin/moderation API routes |
| `NEXT_PUBLIC_SITE_URL` | Production | Set to your Vercel Production domain (e.g., `https://syren-luxury.vercel.app`) |
| `ADMIN_EMAIL_ALLOWLIST` | All | Comma-separated list of emails allowed in `/admin` |
| `STRIPE_SECRET_KEY` | All | **(Secret)** Your Stripe secret key |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | All | Your Stripe publishable key |
| `STRIPE_WEBHOOK_SECRET` | All | **(Secret)** Optional: For Stripe events |

## 3. Post-Deployment Verification
- [ ] **Build Success**: Check Vercel deployment logs to ensure the build passes without errors.
- [ ] **Domain Verification**: Verify the site is accessible at the assigned Vercel URL.
- [ ] **Admin Security Lock**:
    - [ ] Attempt to access `/admin` without logging in (should redirect to `/login`).
    - [ ] Log in with an email **NOT** in the `ADMIN_EMAIL_ALLOWLIST` (should show "not allowed" error).
    - [ ] Log in with an email **IN** the allowlist (should grant access to Moderation Dashboard).
- [ ] **API Security**: 
    - [ ] Verify that moderation actions (approve/delete) work in the admin dashboard (uses `SUPABASE_SERVICE_ROLE_KEY`).
- [ ] **Stripe Checkout**: Verify the checkout flow initiates correctly on the production URL.

## 4. Maintenance
- [ ] **Mirror Sync**: Ensure any push to `main` triggers a successful deployment on Vercel.
- [ ] **Logs**: Monitor Vercel "Logs" tab for any runtime errors in production.
