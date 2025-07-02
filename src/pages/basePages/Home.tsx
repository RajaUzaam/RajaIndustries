import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Montserrat } from 'next/font/google'; // Assuming you exported your Montserrat font

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin']
});

const Base = () => {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="w-full h-[80vh] bg-black text-white flex items-center justify-center relative overflow-hidden">
        <Image
          src="/hero.jpg"
          alt="Hero Banner"
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="z-10 text-center">
          <h1 className={`text-5xl font-bold mb-4 ${montserrat.className}`}>
            Unleash Your Style
          </h1>
          <p className="text-lg mb-6">Shop the latest from Men, Women, and Kids</p>
          <Link href="/shop">
            <button className="px-6 py-3 bg-white text-black rounded-xl hover:bg-gray-100 transition">
              Shop Now
            </button>
          </Link>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 px-6 text-center">
        <h2 className={`text-3xl font-semibold mb-10 ${montserrat.className}`}>
          Featured Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {['Men', 'Women', 'Kids'].map((cat) => (
            <Link
              key={cat}
              href={`/shop?category=${cat.toLowerCase()}`}
              className="group relative overflow-hidden rounded-xl shadow hover:scale-105 transition"
            >
              <Image
                src={`/${cat.toLowerCase()}.jpg`}
                alt={`${cat} Category`}
                width={400}
                height={500}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-white text-2xl font-semibold">
                {cat}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products - Placeholder */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className={`text-3xl font-semibold mb-10 text-center ${montserrat.className}`}>
          Featured Products
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[1, 2, 3, 4].map((_, i) => (
            <div key={i} className="bg-white shadow rounded-xl p-4">
              <div className="aspect-[3/4] bg-gray-200 mb-4 rounded" />
              <h3 className="text-lg font-medium mb-2">Product Name</h3>
              <p className="text-sm text-gray-500">$99.99</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Base;
