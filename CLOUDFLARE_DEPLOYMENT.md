# Deploying to Cloudflare Pages with Custom Domain

This guide will walk you through deploying the JULDD Insta-Promo Pack to Cloudflare Pages and setting up your custom domain (julddmarketing.com).

## Option 1: Direct Upload (Easiest Method)

1. **Log in to your Cloudflare account** (Julie@juldd.com)

2. **Navigate to Pages**:
   - From the Cloudflare dashboard, click on "Pages" in the left sidebar

3. **Create a new project**:
   - Click "Create a project"
   - Select "Upload assets" (for direct upload)

4. **Upload your build output**:
   - Drag and drop the contents of the `out` directory from the project
   - Alternatively, click "Browse" and select all files from the `out` directory

5. **Configure project settings**:
   - Project name: `juldd-insta-promo`
   - Production branch: `main` (default)

6. **Deploy your site**:
   - Click "Save and Deploy"
   - Wait for the deployment to complete

7. **Set up your custom domain**:
   - Once deployed, go to the "Custom domains" tab
   - Click "Set up a custom domain"
   - Enter `julddmarketing.com` and click "Continue"
   - Since the domain is already in your Cloudflare account, it should be automatically verified
   - Select "Activate domain"

## Option 2: GitHub Integration (Recommended for Ongoing Development)

1. **Push the code to GitHub**:
   - Follow the instructions provided earlier to push the code to your GitHub repository

2. **Connect to Cloudflare Pages**:
   - Log in to your Cloudflare account
   - Navigate to Pages
   - Click "Create a project"
   - Select "Connect to Git"
   - Authorize Cloudflare to access your GitHub account
   - Select the `juldd-insta-promo-marketing-page` repository

3. **Configure build settings**:
   - Framework preset: Next.js
   - Build command: `npm run build`
   - Build output directory: `out`
   - Root directory: `/` (default)
   - Environment variables: Add any necessary environment variables (optional)

4. **Deploy your site**:
   - Click "Save and Deploy"
   - Wait for the build and deployment to complete

5. **Set up your custom domain**:
   - Once deployed, go to the "Custom domains" tab
   - Click "Set up a custom domain"
   - Enter `julddmarketing.com` and click "Continue"
   - Since the domain is already in your Cloudflare account, it should be automatically verified
   - Select "Activate domain"

## Troubleshooting

If you encounter any issues during deployment:

1. **Build failures**:
   - Check the build logs for any errors
   - Ensure all dependencies are correctly installed
   - Verify that the Next.js configuration is correct

2. **Custom domain issues**:
   - Verify that the domain is properly set up in your Cloudflare account
   - Check DNS settings to ensure they point to your Cloudflare Pages site
   - Allow time for DNS propagation (can take up to 24 hours)

3. **Content not displaying correctly**:
   - Verify that all assets (images, CSS, JavaScript) are included in the build
   - Check for any console errors in the browser
   - Ensure paths are correctly set up for static assets

## Maintaining Your Site

Once deployed, you can:

1. **Update your site**:
   - If using GitHub integration, simply push changes to your repository
   - If using direct upload, you'll need to rebuild and re-upload the files

2. **Monitor analytics**:
   - Cloudflare provides basic analytics for your Pages site
   - Access these from the "Analytics" tab in your project

3. **Set up additional features**:
   - Custom headers
   - Environment variables
   - Access policies
   - Web Analytics

For any further assistance, contact Cloudflare support or refer to their documentation at https://developers.cloudflare.com/pages/