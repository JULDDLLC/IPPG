'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Sparkles, 
  Image as ImageIcon,
  RefreshCw,
  Download,
  Share2,
  Calendar
} from 'lucide-react';

export function ContentGenerator() {
  const [prompt, setPrompt] = useState('');
  const [platform, setPlatform] = useState('Instagram');
  const [style, setStyle] = useState('Luxury');
  const [tone, setTone] = useState('Professional');
  const [format, setFormat] = useState('Square');
  const [loading, setLoading] = useState(false);
  const [generated, setGenerated] = useState(false);
  
  const handleGenerate = async () => {
    if (!prompt) {
      alert('Please enter a prompt to generate content');
      return;
    }
    
    setLoading(true);
    
    // Simulate content generation
    setTimeout(() => {
      setLoading(false);
      setGenerated(true);
    }, 2000);
  };
  
  return (
    <div className="space-y-8">
      {/* Input Section */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle>What would you like to create?</CardTitle>
          <CardDescription>
            Describe your product or service in a sentence, and we'll generate content for you
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <Input 
                className="glass-input text-lg py-6" 
                placeholder="e.g., Our luxury watches combine Swiss craftsmanship with modern design"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <label className="text-sm font-medium mb-1 block">Platform</label>
                <select 
                  className="glass-input w-full"
                  value={platform}
                  onChange={(e) => setPlatform(e.target.value)}
                >
                  <option>Instagram</option>
                  <option>Facebook</option>
                  <option>Twitter</option>
                  <option>LinkedIn</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">Style</label>
                <select 
                  className="glass-input w-full"
                  value={style}
                  onChange={(e) => setStyle(e.target.value)}
                >
                  <option>Luxury</option>
                  <option>Minimalist</option>
                  <option>Bold</option>
                  <option>Artistic</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">Tone</label>
                <select 
                  className="glass-input w-full"
                  value={tone}
                  onChange={(e) => setTone(e.target.value)}
                >
                  <option>Professional</option>
                  <option>Friendly</option>
                  <option>Inspirational</option>
                  <option>Humorous</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">Format</label>
                <select 
                  className="glass-input w-full"
                  value={format}
                  onChange={(e) => setFormat(e.target.value)}
                >
                  <option>Square</option>
                  <option>Portrait</option>
                  <option>Landscape</option>
                  <option>Story</option>
                </select>
              </div>
            </div>
            <Button 
              className="glass-button w-full py-6 text-lg"
              onClick={handleGenerate}
              disabled={loading}
            >
              <Sparkles className="mr-2 h-5 w-5" /> 
              {loading ? 'Generating...' : 'Generate Content'}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Results Section - Conditionally rendered */}
      {generated && (
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Generated Content</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Image Preview */}
            <Card className="glass-card overflow-hidden">
              <div className="aspect-square bg-accent/10 relative">
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                  <ImageIcon className="h-16 w-16" />
                </div>
              </div>
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-medium">Generated Image</h3>
                  <div className="flex space-x-2">
                    <Button size="icon" variant="ghost">
                      <RefreshCw className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="ghost">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <Button className="glass-button w-full">
                    <Share2 className="mr-2 h-4 w-4" /> Share Now
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Calendar className="mr-2 h-4 w-4" /> Schedule Post
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Caption Preview */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Generated Caption</CardTitle>
                <CardDescription>
                  Compelling text to accompany your image
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-background/50 p-4 rounded-md mb-4">
                  <p className="mb-2">✨ Where craftsmanship meets innovation ✨</p>
                  <p className="mb-2">Our luxury timepieces are more than just watches—they're a statement of elegance and precision engineering.</p>
                  <p className="mb-2">Each piece combines traditional Swiss craftsmanship with cutting-edge design, creating a perfect harmony of heritage and modernity.</p>
                  <p>What story will your watch tell? #LuxuryWatches #SwissMade #TimelessElegance</p>
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    <RefreshCw className="mr-2 h-4 w-4" /> Regenerate
                  </Button>
                  <Button size="sm" className="flex-1">
                    <Download className="mr-2 h-4 w-4" /> Copy Text
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Variations */}
          <div>
            <h3 className="text-xl font-semibold mb-4">More Variations</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((item) => (
                <Card key={item} className="glass-card overflow-hidden">
                  <div className="aspect-square bg-accent/10 relative">
                    <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                      <ImageIcon className="h-8 w-8" />
                    </div>
                  </div>
                  <CardContent className="p-2">
                    <Button size="sm" variant="ghost" className="w-full">Select</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}