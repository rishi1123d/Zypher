import React, { useState } from 'react';

interface ReplitDemoProps {
  onProofGenerated: (proof: any) => void;
}

export default function ReplitDemo({ onProofGenerated }: ReplitDemoProps) {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerateProof = async () => {
    setIsGenerating(true);
    try {
      // TODO: Implement proof generation logic
      const proof = { status: 'success' };
      onProofGenerated(proof);
    } catch (error) {
      console.error('Error generating proof:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Generate Proof</h2>
      <button
        onClick={handleGenerateProof}
        disabled={isGenerating}
        className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark disabled:opacity-50"
      >
        {isGenerating ? 'Generating...' : 'Generate Proof'}
      </button>
    </div>
  );
} 