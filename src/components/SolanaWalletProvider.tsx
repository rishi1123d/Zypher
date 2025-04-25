'use client';

import React, { useEffect, useState } from 'react';

interface SolanaWalletProviderProps {
  children: React.ReactNode;
}

export default function SolanaWalletProvider({ children }: SolanaWalletProviderProps) {
  const [mounted, setMounted] = useState(false);
  const [initialized, setInitialized] = useState(false);
  const [error, setError] = useState(false);
  const [WalletComponents, setWalletComponents] = useState<{
    WalletProvider: React.ComponentType<any> | null;
    WalletModalProvider: React.ComponentType<any> | null;
    wallets: any[];
  }>({
    WalletProvider: null,
    WalletModalProvider: null,
    wallets: []
  });

  useEffect(() => {
    const initWallets = async () => {
      try {
        // Dynamic imports for wallet components
        const walletAdapterReact = await import('@solana/wallet-adapter-react');
        const walletAdapterReactUI = await import('@solana/wallet-adapter-react-ui');
        const { PhantomWalletAdapter } = await import('@solana/wallet-adapter-wallets');
        
        setWalletComponents({
          WalletProvider: walletAdapterReact.WalletProvider,
          WalletModalProvider: walletAdapterReactUI.WalletModalProvider,
          wallets: [new PhantomWalletAdapter()]
        });
        
        setInitialized(true);
      } catch (err) {
        console.error('Failed to initialize wallet adapters:', err);
        setError(true);
      }
      
      setMounted(true);
    };
    
    initWallets();
  }, []);

  // Remove CSS import that's causing errors
  // We'll handle wallet styles in the global CSS

  // Wait until mounted
  if (!mounted) {
    return null;
  }

  // If there was an error loading the wallet components or it's not initialized,
  // just render the children directly
  if (error || !initialized || !WalletComponents.WalletProvider || !WalletComponents.WalletModalProvider) {
    return <>{children}</>;
  }

  // Use the wallet components if available
  const { WalletProvider, WalletModalProvider, wallets } = WalletComponents;
  
  return (
    <WalletProvider wallets={wallets} autoConnect>
      <WalletModalProvider>
        {children}
      </WalletModalProvider>
    </WalletProvider>
  );
} 