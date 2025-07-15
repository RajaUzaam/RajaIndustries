'use client';

import Image from 'next/image';
//import Link from 'next/link';
import { X, Heart } from 'lucide-react';

const dummyCartItems = [
  {
    id: '1',
    name: 'Gazelle Shoes',
    description: 'Shadow Brown / Sky Rush / Cloud White',
    size: 'M 11.5 / W 12.5',
    price: 100.0,
    imageUrl: '/products/shoe1.png'
  },
  {
    id: '2',
    name: 'Bro Shoes',
    description: 'Shadow Brown / Sky Rush / Cloud White',
    size: 'M 11.5 / W 12.5',
    price: 50.0,
    imageUrl: '/products/shoe1.png'
  }
];

export default function CartPage() {
  const subtotal = dummyCartItems.reduce((acc, item) => acc + item.price, 0);
  const salesTax = 12.6;
  const delivery = 4.99;
  const total = subtotal + salesTax + delivery;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">Your Bag</h1>

      <p className="mb-6">
        TOTAL: ({dummyCartItems.length} item{dummyCartItems.length > 1 ? 's' : ''}){' '}
        <span className="font-semibold">${total.toFixed(2)}</span>
      </p>

      <p className="mb-8 text-sm text-zinc-600">
        Items in your bag are not reserved — check out now to make them yours.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-6">
          {dummyCartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row border rounded-xl overflow-hidden shadow-sm"
            >
              <div className="sm:w-1/3 bg-zinc-100 h-48 flex items-center justify-center">
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  width={160}
                  height={160}
                  className="object-contain h-full"
                />
              </div>
              <div className="flex-1 p-4 space-y-1 relative">
                <div className="absolute top-4 right-4 flex gap-3">
                  <button>
                    <Heart size={20} />
                  </button>
                  <button>
                    <X size={20} />
                  </button>
                </div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-sm text-zinc-500">{item.description}</p>
                <p className="text-sm text-zinc-600">SIZE: {item.size}</p>
                <p className="font-semibold mt-2">${item.price.toFixed(2)}</p>
                <select className="mt-4 border rounded p-1 text-sm w-16">
                  {[...Array(10)].map((_, i) => (
                    <option key={i}>{i + 1}</option>
                  ))}
                </select>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="bg-white border border-zinc-200 rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>{dummyCartItems.length} item</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Sales Tax</span>
              <span>${salesTax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery</span>
              <span>${delivery.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-semibold pt-2 border-t mt-2">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          <button className="mt-6 w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-zinc-900 transition">
            Checkout
          </button>

          <div className="mt-4 text-sm underline cursor-pointer text-center">
            Use a promo code
          </div>

          {/*<div className="mt-6 flex gap-3 items-center flex-wrap">
            <Image src="/amex.svg" alt="Amex" width={40} height={24} />
            <Image src="/discover.svg" alt="Discover" width={40} height={24} />
            <Image src="/mastercard.svg" alt="Mastercard" width={40} height={24} />
            <Image src="/klarna.svg" alt="Klarna" width={40} height={24} />
            <Image src="/gpay.svg" alt="GPay" width={40} height={24} />
            <Image src="/visa.svg" alt="Visa" width={40} height={24} />
          </div>*/}
        </div>
      </div>
    </div>
  );
}
