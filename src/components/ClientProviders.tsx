'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { PrivyProvider } from '@privy-io/react-auth';
import WalletProviders from './WalletProviders';

interface ClientProvidersProps {
  children: React.ReactNode;
}

export default function ClientProviders({ children }: ClientProvidersProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <PrivyProvider
      appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID || ''}
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