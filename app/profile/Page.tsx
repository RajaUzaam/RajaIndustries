import { useState } from 'react';

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('profile');

  const user = {
    name: 'John Doe',
    email: 'john@example.com',
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-center">Account</h1>

      {/* Tab Buttons */}
      <div className="flex justify-center mb-6 space-x-4">
        <TabButton label="Profile" isActive={activeTab === 'profile'} onClick={() => setActiveTab('profile')} />
        <TabButton label="Orders" isActive={activeTab === 'orders'} onClick={() => setActiveTab('orders')} />
        <TabButton label="FAQs" isActive={activeTab === 'faqs'} onClick={() => setActiveTab('faqs')} />
      </div>

      {/* Tab Content */}
      <div className="border-t pt-6">
        {activeTab === 'profile' && (
          <div className="space-y-4">
            <div>
              <label className="block font-medium">Name</label>
              <input
                type="text"
                value={user.name}
                readOnly
                className="mt-1 w-full p-2 border rounded-md bg-gray-100"
              />
            </div>
            <div>
              <label className="block font-medium">Email</label>
              <input
                type="email"
                value={user.email}
                readOnly
                className="mt-1 w-full p-2 border rounded-md bg-gray-100"
              />
            </div>
          </div>
        )}

        {activeTab === 'orders' && (
          <div>
            <p className="text-gray-600">You haven’t placed any orders yet.</p>
          </div>
        )}

        {activeTab === 'faqs' && (
          <div className="space-y-4">
            <FAQ q="How do I reset my password?" a="Click 'Forgot Password' on the login screen." />
            <FAQ q="Where is my order?" a="Once shipped, you'll get a tracking link via email." />
            <FAQ q="Can I change my email address?" a="Currently, email changes are not supported via UI." />
          </div>
        )}
      </div>
    </div>
  );
}

function TabButton({ label, isActive, onClick }:{label: string, isActive: boolean, onClick: () => void}) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full font-medium ${
        isActive ? 'bg-black text-white' : 'bg-gray-200 text-gray-700'
      } transition`}
    >
      {label}
    </button>
  );
}

function FAQ({ q, a }:{ q: string; a: string }) {
  return (
    <div>
      <h3 className="font-semibold">{q}</h3>
      <p className="text-gray-600">{a}</p>
    </div>
  );
}
