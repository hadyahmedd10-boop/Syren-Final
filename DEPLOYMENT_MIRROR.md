# Vercel Deployment & Mirroring Guide

This document outlines the steps to ensure the Syren project is correctly mirrored and deployed to Vercel.

## 1. GitHub Connection
- [ ] Log in to the [Vercel Dashboard](https://vercel.com/dashboard).
- [ ] Click **Add New...** > **Project**.
- [ ] Ensure your GitHub account is connected.
- [ ] Select the repository containing the `Syren Fresh start` project.

## 2. Root Directory Configuration
- [ ] During the import process, locate the **Root Directory** setting.
- [ ] Set the Root Directory to `syren`.
- [ ] Vercel will now look for `package.json` and the `src` folder inside the `/syren` subdirectory.
- [ ] *[Placeholder: Insert Screenshot of Vercel Import Root Directory Settings]*

## 3. Environment Variables
- [ ] Navigate to **Settings** > **Environment Variables**.
- [ ] Ensure the following variables are set for both **Preview** and **Production** environments:
    - `NEXT_PUBLIC_SUPABASE_URL`
    - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
    - `SUPABASE_SERVICE_ROLE_KEY` (if used for admin tasks)
    - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
    - `STRIPE_SECRET_KEY`
    - `NEXT_PUBLIC_BASE_URL` (e.g., `https://syren.travel`)
- [ ] *[Placeholder: Insert Screenshot of Environment Variables Dashboard]*

## 4. Automatic Deployments
- [ ] Go to **Settings** > **Git**.
- [ ] Ensure **Automatic Deployments** is enabled for the `main` (or production) branch.
- [ ] Ensure **Preview Deployments** are enabled for pull requests.

## 5. Build & Output Settings
- [ ] Vercel should automatically detect Next.js.
- [ ] **Build Command**: `next build` (or `npm run build`)
- [ ] **Output Directory**: `.next`
- [ ] **Install Command**: `npm install`

## 6. Verification
- [ ] Trigger a manual deployment or push a commit to the `main` branch.
- [ ] Verify the build logs for any errors.
- [ ] Visit the production URL to ensure all landing pages are accessible.
