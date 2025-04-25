'use client';

import React, { useState } from 'react';
import Layout from '../components/Layout';
import ProofRequestForm from '../components/ProofRequestForm';
import ProofStatus from '../components/ProofStatus';
import ReplitAssistant from '../components/ReplitAssistant';
import Image from 'next/image';

type ProofStatus = 'idle' | 'pending' | 'generated' | 'failed';

export default function Home() {
  const [status, setStatus] = useState<ProofStatus>('idle');
  const [proof, setProof] = useState<any>(null);
  const [error, setError] = useState<string>('');

  const handleProofRequest = async (request: string) => {
    setStatus('pending');
    setError('');
    
    try {
      const response = await fetch('/api/generate-proof', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ request }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate proof');
      }

      const data = await response.json();
      setProof(data.proof);
      setStatus('generated');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setStatus('failed');
    }
  };

  const handleSuggestionSelected = (suggestion: string) => {
    console.log('Selected suggestion:', suggestion);
  };

  return (
    <Layout>
      <div className="relative min-h-screen">
        {/* Hero Section */}
        <div className="hero-gradient text-white py-20 px-4 sm:px-6 lg:px-8 rounded-b-[2.5rem]">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Zero-Knowledge Identity Verification
            </h1>
            <p className="text-xl mb-8 text-gray-100">
              Combat AI-generated synthetic fraud with privacy-preserving verification
            </p>
            <div className="flex justify-center space-x-4">
              <button className="px-8 py-3 bg-white text-primary font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                Get Started
              </button>
              <button className="px-8 py-3 bg-opacity-20 bg-white text-white font-semibold rounded-lg border border-white hover:bg-opacity-30 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="feature-card">
              <div className="h-12 w-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold mb-2">Privacy First</h2>
              <p className="text-gray-600">
                Verify claims without exposing sensitive personal data
              </p>
            </div>
            <div className="feature-card">
              <div className="h-12 w-12 bg-secondary bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold mb-2">AI-Resistant</h2>
              <p className="text-gray-600">
                Protect against synthetic identity fraud
              </p>
            </div>
            <div className="feature-card">
              <div className="h-12 w-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold mb-2">Decentralized</h2>
              <p className="text-gray-600">
                Built on Solana with zero-knowledge proofs
              </p>
            </div>
          </div>
        </div>

        {/* Proof Request Section */}
        <div className="max-w-4xl mx-auto mt-16 px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-6 text-center">Request a Proof</h2>
            <ProofRequestForm onProofRequested={handleProofRequest} />
            
            {status !== 'idle' && (
              <ProofStatus
                status={status}
                proof={proof}
                error={error}
              />
            )}
          </div>
        </div>

        <ReplitAssistant onSuggestionSelected={handleSuggestionSelected} />
      </div>
    </Layout>
  );
} 