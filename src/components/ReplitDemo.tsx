import React, { useState } from 'react';
import { usePrivy } from '@privy-io/react-auth';

interface ReplitDemoProps {
  onProofGenerated: (proof: any) => void;
}

export default function ReplitDemo({ onProofGenerated }: ReplitDemoProps) {
  const { user } = usePrivy();
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateProof = async () => {
    if (!user) {
      setError('Please connect your wallet first');
      return;
    }

    setIsGenerating(true);
    setError(null);

    try {
      // This would be replaced with actual Replit AI agent integration
      const response = await fetch('/api/generate-proof', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: user.id,
          // Add any other necessary data for proof generation
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate proof');
      }

      const proof = await response.json();
      onProofGenerated(proof);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">AI-Assisted Proof Generation</h2>
      <p className="text-gray-600 mb-4">
        Use Replit's AI agent to generate a zero-knowledge proof of your identity
      </p>
      <button
        onClick={generateProof}
        disabled={isGenerating}
        className={`px-4 py-2 rounded-md ${
          isGenerating
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-primary hover:bg-primary-dark'
        } text-white`}
      >
        {isGenerating ? 'Generating Proof...' : 'Generate Proof'}
      </button>
      {error && (
        <p className="mt-2 text-red-600">{error}</p>
      )}
    </div>
  );
} 