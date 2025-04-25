'use client';

import React, { useState } from 'react';

interface ReplitAssistantProps {
  onSuggestionSelected: (suggestion: string) => void;
}

export default function ReplitAssistant({ onSuggestionSelected }: ReplitAssistantProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const suggestions = [
    "I earn over $50k annually",
    "I'm over 18 years old",
    "I have a valid driver's license",
    "I'm a US citizen",
    "I have a college degree"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSuggestionSelected(message);
      setMessage('');
    }
  };

  return (
    <div className="fixed bottom-4 right-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary-dark transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 bg-white rounded-lg shadow-lg">
          <div className="p-4 border-b">
            <h3 className="text-lg font-semibold text-gray-900">AI Assistant</h3>
            <p className="text-sm text-gray-500">Need help phrasing your proof request?</p>
          </div>

          <div className="p-4 space-y-2">
            <p className="text-sm font-medium text-gray-700">Common proof requests:</p>
            <div className="space-y-2">
              {suggestions.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => onSuggestionSelected(suggestion)}
                  className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-md transition-colors"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-4 border-t">
            <div className="flex space-x-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary text-sm"
              />
              <button
                type="submit"
                className="bg-primary text-white px-3 py-2 rounded-md hover:bg-primary-dark transition-colors"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
} 