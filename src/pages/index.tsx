'use client';

import React, { useState } from 'react';
import Layout from '../components/Layout';
import ProofRequestForm from '../components/ProofRequestForm';
import ProofStatus from '../components/ProofStatus';
import ReplitAssistant from '../components/ReplitAssistant';
import Image from 'next/image';
import Link from 'next/link';

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
      {/* Hero Section */}
      <section className="hero-gradient text-white">
        <div className="hero-content pt-20 pb-28 px-6 md:pt-32 md:pb-40">
          <div className="absolute top-16 right-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-purple-500/20 to-purple-600/20 blur-3xl"></div>
          <div className="absolute bottom-16 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-indigo-500/20 to-indigo-600/20 blur-3xl"></div>
          
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Zero-Knowledge Identity Verification
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto">
              Combat AI-generated synthetic fraud with privacy-preserving verification
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
              <Link href="#generate-proof" className="button-primary">
                Generate Proof
              </Link>
              <Link href="#how-it-works" className="button-secondary">
                How It Works
              </Link>
            </div>
            
            <div className="mt-16 inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium">
              <span className="flex h-3 w-3 relative mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              Built on Solana blockchain for secure & reliable verification
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 -mt-16 md:-mt-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="feature-card">
            <div className="feature-card-icon">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold mb-3">Privacy First</h2>
            <p className="text-gray-600">
              Verify claims without exposing sensitive personal data. Your information remains encrypted and secure.
            </p>
          </div>
          
          <div className="feature-card">
            <div className="feature-card-icon" style={{background: "linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(16, 185, 129, 0.2) 100%)"}}>
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold mb-3">AI-Resistant</h2>
            <p className="text-gray-600">
              Protect against synthetic identity fraud with technology designed to defeat AI impersonation attempts.
            </p>
          </div>
          
          <div className="feature-card">
            <div className="feature-card-icon">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold mb-3">Decentralized</h2>
            <p className="text-gray-600">
              Built on Solana with zero-knowledge proofs to ensure trustless verification without central authorities.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="max-w-7xl mx-auto mt-24 px-6 py-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 gradient-text inline-block">How It Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Our zero-knowledge protocol allows you to prove claims without revealing sensitive data
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 relative">
          <div className="hidden md:block absolute top-24 left-[25%] right-[25%] step-line"></div>
          
          <div className="relative flex flex-col items-center text-center">
            <div className="h-16 w-16 rounded-full bg-primary-100 flex items-center justify-center mb-5 relative z-10 border-4 border-white shadow-md">
              <span className="text-primary-600 text-xl font-bold">1</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Create Your Claim</h3>
            <p className="text-gray-600">
              Define what you want to prove without revealing the underlying data
            </p>
          </div>
          
          <div className="relative flex flex-col items-center text-center">
            <div className="h-16 w-16 rounded-full bg-primary-100 flex items-center justify-center mb-5 relative z-10 border-4 border-white shadow-md">
              <span className="text-primary-600 text-xl font-bold">2</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Generate Proof</h3>
            <p className="text-gray-600">
              Our system creates a cryptographic zero-knowledge proof of your claim
            </p>
          </div>
          
          <div className="relative flex flex-col items-center text-center">
            <div className="h-16 w-16 rounded-full bg-primary-100 flex items-center justify-center mb-5 relative z-10 border-4 border-white shadow-md">
              <span className="text-primary-600 text-xl font-bold">3</span>
            </div>
            <h3 className="text-xl font-semibold mb-3">Verify Anywhere</h3>
            <p className="text-gray-600">
              Share your proof with anyone, who can verify it without seeing your data
            </p>
          </div>
        </div>
      </section>

      {/* Proof Request Section */}
      <section id="generate-proof" className="max-w-4xl mx-auto mt-16 px-6 py-16">
        <div className="glass-card rounded-2xl overflow-hidden">
          <div className="px-8 py-6 border-b border-gray-100">
            <h2 className="text-2xl font-bold gradient-text">Generate a Zero-Knowledge Proof</h2>
            <p className="text-gray-600 mt-2">Prove a claim without revealing sensitive data</p>
          </div>
          
          <div className="p-8">
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
      </section>

      {/* FAQ Section */}
      <section className="max-w-5xl mx-auto px-6 py-16 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 gradient-text inline-block">Frequently Asked Questions</h2>
          <p className="text-gray-600">Everything you need to know about our zero-knowledge protocol</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="feature-card">
            <h3 className="text-xl font-semibold mb-3">What is a zero-knowledge proof?</h3>
            <p className="text-gray-600">A zero-knowledge proof allows one party to prove to another that a statement is true without revealing any additional information.</p>
          </div>
          
          <div className="feature-card">
            <h3 className="text-xl font-semibold mb-3">Is my data secure?</h3>
            <p className="text-gray-600">Yes, your data never leaves your device. Only the cryptographic proof is transmitted, not the underlying data.</p>
          </div>
          
          <div className="feature-card">
            <h3 className="text-xl font-semibold mb-3">How does this prevent AI fraud?</h3>
            <p className="text-gray-600">Our protocol requires cryptographic signatures that AI systems cannot forge, ensuring human identity verification.</p>
          </div>
          
          <div className="feature-card">
            <h3 className="text-xl font-semibold mb-3">Do I need a Solana wallet?</h3>
            <p className="text-gray-600">Yes, a Solana wallet is required to sign transactions and proofs in our decentralized protocol.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-400 text-white py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to secure your identity?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Start generating zero-knowledge proofs today and protect your personal information
          </p>
          <Link href="#generate-proof" className="button-primary inline-block">
            Get Started Now
          </Link>
        </div>
      </section>

      <ReplitAssistant onSuggestionSelected={handleSuggestionSelected} />
    </Layout>
  );
} 