# Deployment Instructions for JULDD Insta-Promo Pack

## Deploying to Cloudflare Pages

### Prerequisites
- A Cloudflare account
- The domain JULDDmarketing.com added to your Cloudflare account

### Option 1: Deploy via Cloudflare Dashboard

1. Log in to your Cloudflare account
2. Navigate to Pages
3. Click "Create a project"
4. Choose "Upload assets" (for direct upload)
5. Upload the contents of the `out` directory
6. Configure your project settings:
   - Project name: `juldd-insta-promo`
   - Production branch: `main`
   - Build settings:
     - Framework preset: Next.js
     - Build command: `npm run build`
     - Build output directory: `out`
7. Click "Save and Deploy"

### Option 2: Deploy via Wrangler CLI

1. Install Wrangler CLI if you haven't already:
   ```bash
   npm install -g wrangler
   ```

2. Log in to your Cloudflare account via Wrangler:
   ```bash
   wrangler login
   ```

3. Navigate to your project directory:
   ```bash
   cd juldd-insta-promo
   ```

4. Deploy your site:
   ```bash
   wrangler pages deploy out --project-name=juldd-insta-promo
   ```

## Configuring Custom Domain

1. After deployment, go to your Cloudflare Pages project
2. Click on "Custom domains"
3. Click "Set up a custom domain"
4. Enter `JULDDmarketing.com` and follow the instructions
5. Cloudflare will automatically configure the DNS settings since the domain is already on Cloudflare

## Environment Variables

If you need to set environment variables for production:

1. Go to your Cloudflare Pages project
2. Navigate to Settings > Environment variables
3. Add the following variables:
   - `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your Supabase anonymous key
   - `STRIPE_API_KEY`: Your Stripe API key
   - `PIXIO_API_KEY`: Your Pixio API key

## Troubleshooting

If you encounter any issues during deployment:

1. Verify that your Next.js configuration is correct:
   ```js
   // next.config.js
   const nextConfig = {
     output: 'export',
     trailingSlash: true,
     images: {
       unoptimized: true
     }
   }
   ```

2. Make sure all dependencies are installed:
   ```bash
   npm install
   ```

3. Check Cloudflare Pages logs for any build errors

4. If you're having issues with the custom domain, verify that the DNS records are correctly set up in Cloudflare