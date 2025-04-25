'use client';

import React, { useEffect, useState } from 'react';

// Create a simplified version that doesn't depend on wallet adapters
const MockWalletProvider = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

interface WalletProvidersProps {
  children: React.ReactNode;
}

export default function WalletProviders({ children }: WalletProvidersProps) {
  const [mounted, setMounted] = useState(false);
  const [error, setError] = useState(false);
  const [WalletAdapterWrapper, setWalletAdapterWrapper] = useState<React.ComponentType<{children: React.ReactNode}>>(() => MockWalletProvider);

  useEffect(() => {
    // Try to import wallet adapter components
    const loadWalletAdapters = async () => {
      try {
        const { WalletProvider } = await import('@solana/wallet-adapter-react');
        const { WalletModalProvider } = await import('@solana/wallet-adapter-react-ui');
        const { PhantomWalletAdapter } = await import('@solana/wallet-adapter-wallets');
        
        // Create a component that wraps the children with the wallet providers
        const AdapterWrapper = ({ children }: { children: React.ReactNode }) => {
          const wallets = [new PhantomWalletAdapter()];
          return (
            <WalletProvider wallets={wallets} autoConnect>
              <WalletModalProvider>
                {children}
              </WalletModalProvider>
            </WalletProvider>
          );
        };
        
        setWalletAdapterWrapper(() => AdapterWrapper);
      } catch (err) {
        console.error('Failed to load wallet adapters:', err);
        setError(true);
      }
      
      setMounted(true);
    };
    
    loadWalletAdapters();
  }, []);

  if (!mounted) {
    return null;
  }

  // Use the appropriate wrapper component
  const Wrapper = error ? MockWalletProvider : WalletAdapterWrapper;
  
  return <Wrapper>{children}</Wrapper>;
} 