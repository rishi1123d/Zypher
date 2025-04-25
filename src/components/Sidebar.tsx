'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navigation = [
  { 
    name: 'Dashboard', 
    href: '/',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    )
  },
  { 
    name: 'Proofs', 
    href: '/proofs',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  { 
    name: 'Settings', 
    href: '/settings',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <>
      {/* Mobile menu button */}
      <div className="md:hidden fixed bottom-4 right-4 z-20">
        <button
          onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
          className="p-3 rounded-full button-gradient text-white shadow-lg"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileNavOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileNavOpen && (
        <div className="fixed inset-0 z-10 bg-gray-800 bg-opacity-75" onClick={() => setIsMobileNavOpen(false)}>
          <div className="fixed bottom-0 left-0 right-0 bg-white rounded-t-2xl p-4" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">Zypher</h2>
              <button onClick={() => setIsMobileNavOpen(false)}>
                <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <nav className="grid grid-cols-3 gap-2">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex flex-col items-center justify-center p-3 rounded-xl transition-all duration-200 ${
                      isActive
                        ? 'text-white button-gradient'
                        : 'text-gray-600 bg-gray-50 hover:bg-gray-100'
                    }`}
                    onClick={() => setIsMobileNavOpen(false)}
                  >
                    <div className="mb-1">{item.icon}</div>
                    <span className="text-xs font-medium">{item.name}</span>
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      )}

      {/* Desktop sidebar */}
      <aside className="hidden md:flex md:flex-col md:w-64 md:fixed md:inset-y-0 z-10">
        <div className="flex flex-col flex-grow bg-white border-r border-gray-100 pt-5 overflow-y-auto">
          <div className="flex items-center flex-shrink-0 px-6 mb-6">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">Zypher</span>
          </div>
          <div className="mt-5 flex-grow flex flex-col">
            <nav className="flex-1 px-4 pb-4 space-y-2">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`group flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 ${
                      isActive
                        ? 'text-white button-gradient shadow-sm'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-primary-600'
                    }`}
                  >
                    <span className="mr-3">{item.icon}</span>
                    {item.name}
                    {isActive && (
                      <span className="ml-auto h-2 w-2 rounded-full bg-white"></span>
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>
          <div className="px-4 pb-6">
            <div className="p-4 bg-primary-50 rounded-xl">
              <h4 className="text-sm font-medium text-primary-700 mb-2">Need help?</h4>
              <p className="text-xs text-primary-600 mb-3">Have questions about zero-knowledge proofs?</p>
              <button className="w-full bg-white text-primary-600 text-sm font-medium px-3 py-2 rounded-lg border border-primary-100 hover:bg-primary-50 transition-colors duration-200">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
} 