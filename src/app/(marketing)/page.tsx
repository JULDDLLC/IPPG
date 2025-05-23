import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ChevronRight, Sparkles, Palette, Clock, Zap } from 'lucide-react'

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-[url('/hexagon-texture.png')] bg-cover bg-center opacity-10" />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-background/50 to-background" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="max-w-4xl mx-auto text-center mb-20">
          <div className="mb-8 animate-float">
            <Image
              src="/juldd-logo-full.png"
              alt="JULDD"
              width={400}
              height={100}
              className="mx-auto"
              priority
            />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Instantly Turn a Sentence Into{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Stunning Social Content
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            AI-powered content generation for businesses that demand premium quality
          </p>
          
          <Button asChild className="glass-button text-lg py-6 px-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Link href="/signup">
              Get Started <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </section>

        {/* Features */}
        <section className="max-w-6xl mx-auto py-20">
          <h2 className="text-4xl font-bold text-center mb-12">Why JULDD Stands Out</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="glass-card">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Sparkles className="h-12 w-12 text-accent" />
                </div>
                <CardTitle>AI-Powered Magic</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Generate stunning visuals and compelling captions instantly from your brand voice
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="glass-card">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Palette className="h-12 w-12 text-accent" />
                </div>
                <CardTitle>Brand Consistency</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Maintain your luxury aesthetic across all platforms with our style controls
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="glass-card">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Clock className="h-12 w-12 text-accent" />
                </div>
                <CardTitle>Time Savings</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Get a week's worth of premium content in minutes, not hours
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-3xl mx-auto py-20 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Elevate Your Brand?</h2>
          <Button asChild className="glass-button text-lg py-6 px-8">
            <Link href="/pricing">
              View Premium Plans <Zap className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </section>
      </div>
    </div>
  )
}