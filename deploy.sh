#!/bin/bash

# Build the application
echo "Building the application..."
npm run build

# Deploy to Cloudflare Pages
echo "Deploying to Cloudflare Pages..."
npx wrangler pages deploy out --project-name=juldd-insta-promo

echo "Deployment complete!"