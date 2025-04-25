'use client';

import React, { useState } from 'react';

interface ProofRequestFormProps {
  onProofRequested: (request: string) => void;
}

export default function ProofRequestForm({ onProofRequested }: ProofRequestFormProps) {
  const [request, setRequest] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (request.trim()) {
      onProofRequested(request);
    }
  };

  const suggestions = [
    "I earn over $50k annually",
    "I'm over 18 years old",
    "I have a valid driver's license",
    "I'm a US citizen",
    "I have a college degree"
  ];

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="proof-request" className="block text-sm font-medium text-gray-700 mb-2">
            What would you like to prove?
          </label>
          <input
            id="proof-request"
            type="text"
            value={request}
            onChange={(e) => setRequest(e.target.value)}
            placeholder="e.g., 'I earn over $50k'"
            className="input-field"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full button-gradient text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!request.trim()}
        >
          Generate Proof
        </button>
      </form>

      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-3">Popular Proofs</h3>
        <div className="flex flex-wrap gap-2">
          {suggestions.map((suggestion) => (
            <button
              key={suggestion}
              onClick={() => setRequest(suggestion)}
              className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm rounded-lg transition-colors duration-200"
            >
              {suggestion}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
} 