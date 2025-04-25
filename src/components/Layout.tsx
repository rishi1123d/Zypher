'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { usePrivy } from '@privy-io/react-auth';
import Sidebar from './Sidebar';
import Link from 'next/link';

const SolanaWalletProvider = dynamic(() => import('./SolanaWalletProvider'), { ssr: false });

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { authenticated, login, logout, user } = usePrivy();

  return (
    <SolanaWalletProvider>
      <div className="min-h-screen bg-gray-50">
        <div className="flex flex-col md:flex-row md:h-screen">
          <Sidebar />
          
          <div className="flex-1 flex flex-col overflow-hidden">
            <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-10">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                  <div className="flex items-center md:hidden">
                    <h1 className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
                      Zypher
                    </h1>
                  </div>
                  <div className="flex-1 flex items-center justify-end space-x-4">
                    <nav className="hidden md:flex space-x-8">
                      <Link href="/" className="text-gray-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors duration-200">
                        Home
                      </Link>
                      <Link href="/proofs" className="text-gray-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors duration-200">
                        My Proofs
                      </Link>
                      <Link href="/settings" className="text-gray-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors duration-200">
                        Settings
                      </Link>
                    </nav>
                    <div className="flex items-center">
                      {authenticated ? (
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-2 bg-gray-50 rounded-full px-3 py-1.5 border border-gray-200">
                            <div className="h-7 w-7 rounded-full bg-primary-100 flex items-center justify-center">
                              <svg className="h-3.5 w-3.5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                              </svg>
                            </div>
                            <span className="text-sm font-medium text-gray-700 truncate max-w-[120px]">
                              {user?.email?.address || 'Connected'}
                            </span>
                            <button
                              onClick={logout}
                              className="ml-2 text-xs text-gray-500 hover:text-primary-600 font-medium transition-colors duration-200"
                            >
                              Logout
                            </button>
                          </div>
                        </div>
                      ) : (
                        <button
                          onClick={login}
                          className="button-gradient text-white font-medium text-sm px-5 py-2.5 rounded-lg shadow-button hover:shadow-lg flex items-center transition-all duration-200"
                        >
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                          Connect Wallet
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </header>

            <main className="flex-1 overflow-y-auto">
              {children}
            </main>
          </div>
        </div>
      </div>
    </SolanaWalletProvider>
  );
} 