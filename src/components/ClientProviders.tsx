'use client';

import React, { useState, useEffect } from 'react';
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

  // Simplified version for development - just wrap with WalletProviders
  return (
    <WalletProviders>
      {children}
    </WalletProviders>
  );
} 