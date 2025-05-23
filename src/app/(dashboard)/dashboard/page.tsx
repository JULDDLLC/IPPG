import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { 
  BarChart, 
  TrendingUp, 
  Users, 
  Image as ImageIcon,
  Plus
} from 'lucide-react'

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <Button asChild className="glass-button">
          <Link href="/dashboard/create">
            <Plus className="mr-2 h-4 w-4" /> Create New Content
          </Link>
        </Button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="glass-card">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Content</CardTitle>
            <ImageIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">127</div>
            <p className="text-xs text-muted-foreground">
              +14% from last month
            </p>
          </CardContent>
        </Card>
        <Card className="glass-card">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Engagement Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.6%</div>
            <p className="text-xs text-muted-foreground">
              +2.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card className="glass-card">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Audience Growth</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+842</div>
            <p className="text-xs text-muted-foreground">
              +12% from last month
            </p>
          </CardContent>
        </Card>
        <Card className="glass-card">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Content Credits</CardTitle>
            <BarChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">73</div>
            <p className="text-xs text-muted-foreground">
              of 200 monthly credits
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Content */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Recent Content</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <Card key={item} className="glass-card overflow-hidden">
              <div className="aspect-square bg-accent/10 relative">
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                  <ImageIcon className="h-12 w-12" />
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-medium">Luxury Product Showcase #{item}</h3>
                <p className="text-sm text-muted-foreground">Created 3 days ago</p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded-full">Instagram</span>
                  <Button variant="ghost" size="sm">View</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-4 text-center">
          <Button variant="outline" className="glass-card">Load More</Button>
        </div>
      </div>
    </div>
  )
}