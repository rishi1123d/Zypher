'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const WalletProvider = dynamic(
  () => import('@solana/wallet-adapter-react').then(mod => mod.WalletProvider),
  { ssr: false }
);

const WalletModalProvider = dynamic(
  () => import('@solana/wallet-adapter-react-ui').then(mod => mod.WalletModalProvider),
  { ssr: false }
);

const PrivyProvider = dynamic(
  () => import('@privy-io/react-auth').then(mod => mod.PrivyProvider),
  { ssr: false }
);

interface WalletWrapperProps {
  children: React.ReactNode;
}

export default function WalletWrapper({ children }: WalletWrapperProps) {
  const [mounted, setMounted] = useState(false);
  const [wallets, setWallets] = useState<any[]>([]);

  useEffect(() => {
    const initWallets = async () => {
      const { PhantomWalletAdapter } = await import('@solana/wallet-adapter-wallets');
      setWallets([new PhantomWalletAdapter()]);
      setMounted(true);
    };
    initWallets();
  }, []);

  if (!mounted || wallets.length === 0) {
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
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          {children}
        </WalletModalProvider>
      </WalletProvider>
    </PrivyProvider>
  );
} 