'use client';

import React, { useState, useEffect } from 'react';
import { PrivyProvider } from '@privy-io/react-auth';
import WalletProviders from './WalletProviders';

interface ClientProvidersProps {
  children: React.ReactNode;
}

export default function ClientProviders({ children }: ClientProvidersProps) {
  const [mounted, setMounted] = useState(false);
  
  // Get Privy app ID from environment variable
  const privyAppId = process.env.NEXT_PUBLIC_PRIVY_APP_ID || '';
  
  // Check if running in development mode with no Privy app ID
  const isDevelopmentWithoutPrivy = 
    process.env.NODE_ENV === 'development' && !privyAppId;

  useEffect(() => {
    setMounted(true);
  }, []);

  // If not mounted yet, return null
  if (!mounted) {
    return null;
  }

  // In development, if no Privy app ID is provided, skip the Privy wrapper
  if (isDevelopmentWithoutPrivy) {
    console.warn('No Privy app ID provided. Running in development mode without Privy authentication.');
    return (
      <WalletProviders>
        {children}
      </WalletProviders>
    );
  }

  // Normal flow with Privy
  return (
    <PrivyProvider
      appId={privyAppId}
      config={{
        loginMethods: ['email', 'wallet'],
        appearance: {
          theme: 'light',
          accentColor: '#4F46E5',
        },
      }}
    >
      <WalletProviders>
        {children}
      </WalletProviders>
    </PrivyProvider>
  );
} 