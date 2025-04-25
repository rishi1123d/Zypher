'use client';

import React, { useState } from 'react';
import Layout from '../components/Layout';
import { usePrivy } from '@privy-io/react-auth';

export default function Settings() {
  const { authenticated, user } = usePrivy();
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  if (!authenticated) {
    return (
      <Layout>
        <div className="text-center py-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Please sign in to access settings
          </h2>
          <p className="text-gray-600">
            Connect your wallet or sign in with email to manage your preferences.
          </p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>

        <div className="bg-white shadow-sm rounded-lg divide-y divide-gray-200">
          <div className="p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Account</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <div className="mt-1 text-sm text-gray-500">
                  {user?.email?.address || 'Not set'}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Wallet Address
                </label>
                <div className="mt-1 text-sm text-gray-500">
                  {user?.wallet?.address || 'Not connected'}
                </div>
              </div>
            </div>
          </div>

          <div className="p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Preferences</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Email Notifications
                  </label>
                  <p className="text-sm text-gray-500">
                    Receive updates about your proofs
                  </p>
                </div>
                <button
                  onClick={() => setNotifications(!notifications)}
                  className={`${
                    notifications ? 'bg-primary' : 'bg-gray-200'
                  } relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2`}
                >
                  <span
                    className={`${
                      notifications ? 'translate-x-5' : 'translate-x-0'
                    } pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out`}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Dark Mode
                  </label>
                  <p className="text-sm text-gray-500">
                    Switch to dark theme
                  </p>
                </div>
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className={`${
                    darkMode ? 'bg-primary' : 'bg-gray-200'
                  } relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2`}
                >
                  <span
                    className={`${
                      darkMode ? 'translate-x-5' : 'translate-x-0'
                    } pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out`}
                  />
                </button>
              </div>
            </div>
          </div>

          <div className="p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Danger Zone</h2>
            <div className="space-y-4">
              <div>
                <button className="text-red-600 hover:text-red-800 text-sm font-medium">
                  Delete Account
                </button>
                <p className="mt-1 text-sm text-gray-500">
                  Permanently delete your account and all associated data
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 