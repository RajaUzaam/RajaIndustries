'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQS = [
  {
    question: 'What is your return policy?',
    answer:
      'You can return any item within 14 days of delivery for a full refund or exchange, as long as it’s unused and in original packaging.',
  },
  {
    question: 'How long does shipping take?',
    answer:
      'Orders are processed within 1–2 business days. Standard shipping takes 3–7 days depending on your location.',
  },
  {
    question: 'Do you ship internationally?',
    answer: 'Yes! We ship to most countries worldwide with standard and express options available.',
  },
  {
    question: 'How can I track my order?',
    answer:
      'Once your order ships, we’ll email you a tracking number. You can also view tracking in your order history under your account.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept all major credit cards, PayPal, and Cash on Delivery (COD) in select regions.',
  },
];

export default function FaqsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <title>Raja Industries - FAQs</title>
      <h1 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {FAQS.map((faq, index) => (
          <div
            key={index}
            className="border border-zinc-200 rounded-xl overflow-hidden shadow-sm transition"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center px-4 py-3 text-left font-medium text-zinc-800 bg-zinc-100 hover:bg-zinc-200 transition"
            >
              {faq.question}
              <ChevronDown
                className={`transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="px-4 py-3 text-zinc-600 bg-white transition-all duration-300">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
