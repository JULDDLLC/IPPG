# JULDD Insta-Promo Pack

A premium SaaS product that generates social media content from a single sentence. This application features a luxury aesthetic with deep blue/gold color scheme, glassmorphism effects, and a polished UI/UX inspired by premium brands like Ralph Lauren.

## Features

- AI-powered content generation from a single sentence
- Luxury aesthetic with deep blue/gold color scheme
- Glassmorphism effects for a premium look and feel
- User authentication and account management
- Subscription-based payment plans
- Content creation dashboard
- Social media post scheduling and management

## Tech Stack

- **Frontend**: Next.js 15, React, TypeScript
- **Styling**: Tailwind CSS, Shadcn UI components
- **Animation**: Framer Motion
- **Authentication**: Supabase Auth
- **Database**: Supabase
- **Payments**: Stripe
- **AI Image Generation**: Pixio API/ComfyUI
- **Deployment**: Cloudflare Pages

## Project Structure

```
juldd-insta-promo/
├── public/                  # Static assets
├── src/
│   ├── app/                 # Next.js app router
│   │   ├── (marketing)/     # Public marketing pages
│   │   ├── (dashboard)/     # Protected dashboard pages
│   │   └── layout.tsx       # Root layout
│   ├── components/          # React components
│   │   ├── ui/              # UI components
│   │   ├── auth/            # Authentication components
│   │   ├── payment/         # Payment components
│   │   └── content/         # Content generation components
│   └── lib/                 # Utility functions and API clients
├── .env.local               # Environment variables
├── next.config.js           # Next.js configuration
├── tailwind.config.js       # Tailwind CSS configuration
└── package.json             # Project dependencies
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Supabase account (for authentication and database)
- Stripe account (for payments)
- Pixio API key (for AI image generation)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd juldd-insta-promo
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Copy `.env.local.example` to `.env.local`
   - Fill in your Supabase, Stripe, and Pixio API credentials

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Deployment

This project is configured for deployment on Cloudflare Pages with the custom domain JULDDmarketing.com. See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

### Quick Deployment Steps

1. Build the application:
   ```bash
   npm run build
   ```

2. Deploy to Cloudflare Pages:
   ```bash
   npx wrangler pages deploy out --project-name=juldd-insta-promo
   ```

3. Configure the custom domain in Cloudflare Pages dashboard.

## Development Notes

### Styling

The application uses a custom color scheme defined in `globals.css` with CSS variables. The primary colors are:
- Deep blue background: hsl(222, 47%, 11%)
- Gold accent: hsl(39, 80%, 70%)
- White text: hsl(0, 0%, 98%)

### Authentication

Authentication is implemented using Supabase Auth. In the current version, authentication is mocked on the client side for demonstration purposes.

### Payments

Payment processing is implemented using Stripe. In the current version, payment processing is mocked on the client side for demonstration purposes.

### AI Image Generation

The AI image generation functionality uses the Pixio API. In the current version, image generation is mocked with placeholder images.

## License

All rights reserved.

## Support

For support or inquiries, please contact [support@julddmarketing.com](mailto:support@julddmarketing.com).