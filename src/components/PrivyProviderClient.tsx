import React from 'react';
import { PrivyProvider } from '@privy-io/react-auth';
import WalletProviderClient from './WalletProviderClient';

interface PrivyProviderClientProps {
  children: React.ReactNode;
}

export default function PrivyProviderClient({ children }: PrivyProviderClientProps) {
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
      <WalletProviderClient>
        {children}
      </WalletProviderClient>
    </PrivyProvider>
  );
} 