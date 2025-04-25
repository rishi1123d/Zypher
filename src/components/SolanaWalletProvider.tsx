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

interface SolanaWalletProviderProps {
  children: React.ReactNode;
}

export default function SolanaWalletProvider({ children }: SolanaWalletProviderProps) {
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
    <WalletProvider wallets={wallets} autoConnect>
      <WalletModalProvider>
        {children}
      </WalletModalProvider>
    </WalletProvider>
  );
} 