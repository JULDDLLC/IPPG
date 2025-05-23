import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { Check } from 'lucide-react'
import { CheckoutButton } from '@/components/payment/checkout-button'

export default function PricingPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-[url('/hexagon-texture.png')] bg-cover bg-center opacity-10" />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-background/50 to-background" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Premium Plans for Premium Brands</h1>
          <p className="text-xl text-muted-foreground">
            Choose the perfect plan for your content creation needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Basic Plan */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-2xl">Starter</CardTitle>
              <CardDescription>For individuals and small brands</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">$29</span>
                <span className="text-muted-foreground">/month</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-accent mr-2" />
                  <span>50 AI-generated posts/month</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-accent mr-2" />
                  <span>Basic image customization</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-accent mr-2" />
                  <span>3 brand presets</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-accent mr-2" />
                  <span>Email support</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <CheckoutButton plan="starter" className="glass-button w-full">
                Get Started
              </CheckoutButton>
            </CardFooter>
          </Card>

          {/* Pro Plan */}
          <Card className="glass-card relative border-accent">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-medium">
              Most Popular
            </div>
            <CardHeader>
              <CardTitle className="text-2xl">Professional</CardTitle>
              <CardDescription>For growing businesses</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">$79</span>
                <span className="text-muted-foreground">/month</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-accent mr-2" />
                  <span>200 AI-generated posts/month</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-accent mr-2" />
                  <span>Advanced image customization</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-accent mr-2" />
                  <span>10 brand presets</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-accent mr-2" />
                  <span>Priority email support</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-accent mr-2" />
                  <span>Content calendar</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <CheckoutButton plan="professional" className="glass-button w-full">
                Get Started
              </CheckoutButton>
            </CardFooter>
          </Card>

          {/* Enterprise Plan */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-2xl">Enterprise</CardTitle>
              <CardDescription>For large organizations</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">$199</span>
                <span className="text-muted-foreground">/month</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-accent mr-2" />
                  <span>Unlimited AI-generated posts</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-accent mr-2" />
                  <span>Premium image customization</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-accent mr-2" />
                  <span>Unlimited brand presets</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-accent mr-2" />
                  <span>Dedicated account manager</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-accent mr-2" />
                  <span>API access</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-accent mr-2" />
                  <span>Custom integrations</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <CheckoutButton plan="enterprise" className="glass-button w-full">
                Get Started
              </CheckoutButton>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}