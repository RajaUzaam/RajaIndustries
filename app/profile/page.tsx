'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<'profile' | 'orders' | 'FAQs' | 'password'>('profile');

  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    gender: 'Male',
    address: {
      country: 'USA',
      state: 'California',
      city: 'Los Angeles',
      street: '123 Sunset Blvd',
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 flex items-center justify-center p-6">
      <title>Raja Industries - Profile</title>

      <div className="w-full max-w-3xl bg-white/70 backdrop-blur-xl shadow-2xl rounded-xl px-8 py-10 border border-gray-300">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-10 tracking-tight">
          My Account
        </h1>

        {/* Tab Buttons */}
        <div className="flex justify-center flex-wrap gap-4 mb-8">
          {['profile', 'orders', 'password'].map((tab) => (
            <TabButton
              key={tab}
              label={capitalize(tab)}
              isActive={activeTab === tab}
              onClick={() => setActiveTab(tab as typeof activeTab)}
            />
          ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-[200px]">
          <AnimatePresence mode="wait">
            {activeTab === 'profile' && (
              <motion.div
                key="profile"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <InputField label="Name" value={user.name} />
                <InputField label="Email" value={user.email} />
                <InputField label="Gender" value={user.gender} />
                <h3 className="text-lg font-semibold text-gray-800 mt-6">Address</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <InputField label="Country" value={user.address.country} />
                  <InputField label="State" value={user.address.state} />
                  <InputField label="City" value={user.address.city} />
                  <InputField label="Street" value={user.address.street} />
                </div>
              </motion.div>
            )}

            {activeTab === 'orders' && (
              <motion.div
                key="orders"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="text-center text-gray-600"
              >
                You haven’t placed any orders yet.
              </motion.div>
            )}

            {activeTab === 'password' && (
              <motion.div
                key="password"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <PasswordField label="Current Password" />
                <PasswordField label="New Password" />
                <PasswordField label="Confirm New Password" />
                <button className="mt-4 px-6 py-2 bg-black text-white rounded-xl font-medium hover:bg-gray-900 transition">
                  Update Password
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

function TabButton({
  label,
  isActive,
  onClick,
}: {
  label: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 rounded-xl text-sm font-semibold tracking-wide transition-all duration-200 ease-in-out border 
        ${
          isActive
            ? 'bg-black text-white border-black shadow-md'
            : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200'
        } focus:outline-none focus:ring-2 focus:ring-black/40`}
    >
      {label}
    </button>
  );
}

function InputField({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <label className="block mb-1 text-sm font-medium text-gray-700">{label}</label>
      <input
        type="text"
        value={value}
        readOnly
        className="w-full px-4 py-2 text-sm bg-gray-100 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/20"
      />
    </div>
  );
}

function PasswordField({ label }: { label: string }) {
  return (
    <div>
      <label className="block mb-1 text-sm font-medium text-gray-700">{label}</label>
      <input
        type="password"
        className="w-full px-4 py-2 text-sm bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/20"
        placeholder={label}
      />
    </div>
  );
}

function capitalize(word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
