'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface CheckoutButtonProps {
  plan: 'starter' | 'professional' | 'enterprise';
  className?: string;
  children: React.ReactNode;
}

export function CheckoutButton({ plan, className, children }: CheckoutButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    
    try {
      // In a real app, this would call the Stripe API
      console.log('Processing checkout for plan:', plan);
      
      // Simulate checkout process
      setTimeout(() => {
        // Redirect to dashboard after successful payment
        window.location.href = '/dashboard';
      }, 1500);
    } catch (error) {
      console.error('Checkout error:', error);
      alert('An error occurred during checkout. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button 
      className={className} 
      onClick={handleCheckout}
      disabled={loading}
    >
      {loading ? 'Processing...' : children}
    </Button>
  );
}