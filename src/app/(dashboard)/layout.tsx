import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { 
  Home, 
  Image as ImageIcon, 
  Calendar, 
  Settings, 
  LogOut,
  Menu,
  X
} from 'lucide-react'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar - Mobile Toggle would be implemented with client components */}
      <div className="hidden md:flex w-64 flex-col fixed inset-y-0">
        <div className="glass-card h-full flex flex-col border-r border-border/40">
          <div className="p-4">
            <Link href="/">
              <Image
                src="/juldd-logo-full.png"
                alt="JULDD"
                width={150}
                height={40}
                className="mx-auto"
              />
            </Link>
          </div>
          <nav className="flex-1 px-4 py-6 space-y-2">
            <Link href="/dashboard" className="flex items-center px-3 py-2 text-sm rounded-md hover:bg-accent/10 transition-colors">
              <Home className="mr-3 h-5 w-5" />
              Dashboard
            </Link>
            <Link href="/dashboard/create" className="flex items-center px-3 py-2 text-sm rounded-md hover:bg-accent/10 transition-colors">
              <ImageIcon className="mr-3 h-5 w-5" />
              Create Content
            </Link>
            <Link href="/dashboard/calendar" className="flex items-center px-3 py-2 text-sm rounded-md hover:bg-accent/10 transition-colors">
              <Calendar className="mr-3 h-5 w-5" />
              Content Calendar
            </Link>
            <Link href="/dashboard/settings" className="flex items-center px-3 py-2 text-sm rounded-md hover:bg-accent/10 transition-colors">
              <Settings className="mr-3 h-5 w-5" />
              Settings
            </Link>
          </nav>
          <div className="p-4 border-t border-border/40">
            <Button variant="ghost" className="w-full justify-start">
              <LogOut className="mr-3 h-5 w-5" />
              Log Out
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 md:pl-64">
        {/* Mobile Header - Toggle functionality would be implemented with client components */}
        <header className="md:hidden glass-card border-b border-border/40 p-4 flex items-center justify-between">
          <Link href="/">
            <Image
              src="/juldd-logo-full.png"
              alt="JULDD"
              width={120}
              height={30}
            />
          </Link>
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
          </Button>
        </header>

        {/* Page Content */}
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  )
}