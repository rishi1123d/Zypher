import React from 'react';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Zero-Knowledge Identity Verification
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Combat AI-generated synthetic fraud with privacy-preserving verification
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Privacy First</h2>
            <p className="text-gray-600">
              Verify claims without exposing sensitive personal data
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">AI-Resistant</h2>
            <p className="text-gray-600">
              Protect against synthetic identity fraud
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Decentralized</h2>
            <p className="text-gray-600">
              Built on Solana with zero-knowledge proofs
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
} 