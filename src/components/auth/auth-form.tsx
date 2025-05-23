'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function AuthForm({ type = 'login' }: { type?: 'login' | 'signup' }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // In a real app, this would connect to Supabase
      console.log('Auth form submitted:', { email, password, type });
      
      // Simulate authentication
      setTimeout(() => {
        if (type === 'signup' && password !== confirmPassword) {
          setError('Passwords do not match');
          setLoading(false);
          return;
        }
        
        // Redirect to dashboard
        window.location.href = '/dashboard';
      }, 1500);
    } catch (err) {
      setError('Authentication failed. Please try again.');
      console.error('Auth error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="glass-card">
      <CardHeader>
        <CardTitle className="text-2xl text-center">
          {type === 'login' ? 'Welcome Back' : 'Create Your Account'}
        </CardTitle>
        <CardDescription className="text-center">
          {type === 'login' 
            ? 'Log in to your JULDD Insta-Promo Pack account' 
            : 'Join JULDD Insta-Promo Pack and start creating stunning content'}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {error && (
            <div className="bg-destructive/10 text-destructive p-3 rounded-md text-sm">
              {error}
            </div>
          )}
          
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">Email</label>
            <Input 
              id="email" 
              type="email" 
              className="glass-input" 
              placeholder="your@email.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium">Password</label>
            <Input 
              id="password" 
              type="password" 
              className="glass-input" 
              placeholder="••••••••" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          {type === 'signup' && (
            <div className="space-y-2">
              <label htmlFor="confirm-password" className="text-sm font-medium">Confirm Password</label>
              <Input 
                id="confirm-password" 
                type="password" 
                className="glass-input" 
                placeholder="••••••••" 
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          )}
          
          {type === 'login' && (
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="remember" className="rounded border-input bg-transparent" />
                <label htmlFor="remember" className="text-sm">Remember me</label>
              </div>
              <a href="/forgot-password" className="text-sm text-primary hover:underline">
                Forgot password?
              </a>
            </div>
          )}
          
          <Button className="glass-button w-full" disabled={loading}>
            {loading ? 'Processing...' : type === 'login' ? 'Log In' : 'Create Account'}
          </Button>
        </form>
        
        <div className="mt-4 text-center text-sm">
          {type === 'login' ? (
            <>
              Don't have an account?{' '}
              <a href="/signup" className="text-primary hover:underline">
                Sign up
              </a>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <a href="/login" className="text-primary hover:underline">
                Log in
              </a>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
}