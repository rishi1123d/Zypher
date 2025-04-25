'use client';

import React from 'react';
import Layout from '../components/Layout';
import { usePrivy } from '@privy-io/react-auth';

// Mock data for demonstration
const mockProofs = [
  {
    id: '1',
    request: "I'm over 18 years old",
    status: 'verified',
    createdAt: '2024-03-20T12:00:00Z',
  },
  {
    id: '2',
    request: 'I earn over $50k annually',
    status: 'pending',
    createdAt: '2024-03-19T15:30:00Z',
  },
  {
    id: '3',
    request: 'I have a valid driver\'s license',
    status: 'failed',
    createdAt: '2024-03-18T09:15:00Z',
  },
];

export default function Proofs() {
  const { authenticated } = usePrivy();

  if (!authenticated) {
    return (
      <Layout>
        <div className="text-center py-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Please sign in to view your proofs
          </h2>
          <p className="text-gray-600">
            Connect your wallet or sign in with email to access your proof history.
          </p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Your Proofs</h1>
          <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark">
            New Proof
          </button>
        </div>

        <div className="bg-white shadow-sm rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Request
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Created
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {mockProofs.map((proof) => (
                <tr key={proof.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {proof.request}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        proof.status === 'verified'
                          ? 'bg-green-100 text-green-800'
                          : proof.status === 'pending'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {proof.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(proof.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button className="text-primary hover:text-primary-dark">
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
} 