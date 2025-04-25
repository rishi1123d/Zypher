'use client';

import React from 'react';

interface ProofStatusProps {
  status: 'pending' | 'generated' | 'failed';
  proof?: any;
  error?: string;
}

export default function ProofStatus({ status, proof, error }: ProofStatusProps) {
  const statusConfig = {
    pending: {
      icon: (
        <svg className="animate-spin h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      ),
      title: 'Generating Proof',
      description: 'Please wait while we generate your zero-knowledge proof...',
    },
    generated: {
      icon: (
        <svg className="h-8 w-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
      ),
      title: 'Proof Generated',
      description: 'Your zero-knowledge proof has been successfully generated!',
    },
    failed: {
      icon: (
        <svg className="h-8 w-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      ),
      title: 'Generation Failed',
      description: error || 'An error occurred while generating your proof.',
    },
  };

  const config = statusConfig[status];

  return (
    <div className="mt-8 p-6 glass-card rounded-xl">
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">{config.icon}</div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{config.title}</h3>
          <p className="text-gray-600">{config.description}</p>
        </div>
      </div>

      {status === 'generated' && proof && (
        <div className="mt-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="text-sm font-medium text-gray-700 mb-2">Proof Details</h4>
            <pre className="text-sm text-gray-600 overflow-x-auto">
              {JSON.stringify(proof, null, 2)}
            </pre>
          </div>
          <div className="mt-4 flex space-x-3">
            <button className="button-gradient text-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-200">
              Verify Proof
            </button>
            <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-all duration-200">
              Download Proof
            </button>
          </div>
        </div>
      )}
    </div>
  );
} 