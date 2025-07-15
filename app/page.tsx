'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { Montserrat } from 'next/font/google';
import { motion, Variants } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: 'easeOut',
    },
  },
};

export default function Home() {
  const sections = [
    { title: 'Spotlight Collection', count: 6, price: '$129.99', label: 'Signature Piece' },
    { title: 'New Arrivals', count: 8, price: '$89.99', label: 'Drop' },
  ];

  const scrollRefs = useRef<(HTMLDivElement | null)[]>([]);

  return (
    <main className="w-full bg-[#f9f9f9] text-zinc-900 font-sans">
      <title>Raja Industries - Home</title>

      {/* Hero */}
      <section className="min-h-[100vh] bg-zinc-900 text-white flex flex-col justify-center items-center px-6 py-20 relative overflow-hidden">
        <motion.h1
          className={`text-6xl md:text-7xl font-extrabold mb-6 text-center tracking-tight ${montserrat.className}`}
          initial="hidden"
          animate="show"
          variants={fadeUp}
        >
          Unleash Your Look
        </motion.h1>

        <motion.p
          className="text-lg text-gray-300 max-w-xl text-center mb-10"
          initial="hidden"
          animate="show"
          transition={{ delay: 0.4, duration: 1.2 }}
          variants={fadeUp}
        >
          Where trend meets elegance — for Men, Women & Kids.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-3 justify-center"
          initial="hidden"
          animate="show"
          transition={{ delay: 1, duration: 1.2 }}
          variants={fadeUp}
        >
          <Link
            href="/shop"
            className="px-6 py-3 bg-white text-black text-xl font-bold rounded-lg border border-white shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Shop All
          </Link>
        </motion.div>
      </section>

      {/* Browse by Category */}
      <section className="py-20 bg-white text-center">
        <motion.h2
          className={`text-3xl font-bold mb-14 ${montserrat.className}`}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Browse by Category
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-6xl mx-auto px-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 1.2 }}
          variants={fadeUp}
        >
          {['Men', 'Women', 'Kids'].map((label) => (
            <Link
              key={label}
              href={`/shop?category=${label.toLowerCase()}`}
              className="group bg-zinc-50 border-[2.5px] border-zinc-200 rounded-2xl px-8 py-10 text-zinc-900 hover:shadow-xl hover:scale-105 transition-all duration-300 flex flex-col items-center"
            >
              <div className="w-36 h-36 bg-zinc-200 rounded-full mb-6 group-hover:bg-zinc-300 transition" />
              <h3 className="text-2xl font-semibold">{label}</h3>
              <p className="text-sm text-zinc-500 mt-2">Explore {label} styles</p>
            </Link>
          ))}
        </motion.div>
      </section>

      {/* Sections */}
      {sections.map((section, sIdx) => (
        <section
          key={sIdx}
          className="py-20 px-6 bg-white border-t border-zinc-200 relative"
        >
          <motion.h2
            className={`text-3xl font-bold text-center mb-12 ${montserrat.className}`}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            {section.title}
          </motion.h2>

          <button
            onClick={() => scrollRefs.current[sIdx]?.scrollBy({ left: -300, behavior: 'smooth' })}
            className="absolute left-6 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow p-2 hover:bg-zinc-100"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={() => scrollRefs.current[sIdx]?.scrollBy({ left: 300, behavior: 'smooth' })}
            className="absolute right-6 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full shadow p-2 hover:bg-zinc-100"
          >
            <ChevronRight size={24} />
          </button>

          <div
            ref={(el) => {scrollRefs.current[sIdx] = el;}}
            className="flex gap-6 overflow-x-auto px-2 scroll-smooth snap-x snap-mandatory scrollbar-hide max-w-6xl mx-auto"
          >
            {[...Array(section.count)].map((_, i) => (
              <motion.div
                key={i}
                className="min-w-[250px] snap-start bg-white rounded-xl p-4 border-[3px] border-zinc-300 shadow-sm hover:scale-105 transition-transform duration-300"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.1 + 0.2,
                  duration: 1.2,
                  ease: 'easeOut',
                }}
              >
                <div className="aspect-[3/4] bg-gradient-to-br from-zinc-100 to-zinc-200 rounded mb-4" />
                <h3 className="text-base font-semibold mb-1">
                  {section.label} {i + 1}
                </h3>
                <p className="text-sm text-zinc-500">{section.price}</p>
              </motion.div>
            ))}
          </div>
        </section>
      ))}

      {/* Banner */}
      <section className="relative bg-black text-white py-28 px-6 text-center">
        <motion.h2
          className={`text-4xl md:text-5xl font-bold mb-4 ${montserrat.className}`}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Autumn Drop is Live
        </motion.h2>

        <motion.p
          className="text-gray-400 max-w-xl mx-auto mb-8"
          initial="hidden"
          whileInView="show"
          transition={{ delay: 0.2, duration: 1.2 }}
          variants={fadeUp}
        >
          Shop the season’s finest — oversized silhouettes, soft fabrics, and timeless layering pieces.
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="show"
          transition={{ delay: 0.4, duration: 1.2 }}
          variants={fadeUp}
        >
          <Link
            href="/shop"
            className="px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition"
          >
            Explore Now
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
