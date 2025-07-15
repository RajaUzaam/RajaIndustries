'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const DUMMY_PRODUCTS = [
  { id: 1, name: 'Nike Air Max 270', price: 150, category: 'Shoes', type: 'Men' },
  { id: 2, name: 'Nike Tech Hoodie', price: 90, category: 'Clothing', type: 'Women' },
  { id: 3, name: 'Adidas Ultra Boost', price: 160, category: 'Shoes', type: 'Kids' },
  { id: 4, name: 'Nike Cap', price: 25, category: 'Accessories', type: 'Men' },
  { id: 5, name: 'Adidas Sweatpants', price: 70, category: 'Clothing', type: 'Men' },
  { id: 6, name: 'Adidas Jacket', price: 120, category: 'Clothing', type: 'Women' },
  { id: 7, name: 'Nike Air Force 1', price: 130, category: 'Shoes', type: 'Men' },
  { id: 8, name: 'Nike Bag', price: 45, category: 'Accessories', type: 'Women' },
];

const categories = ['All', 'Shoes', 'Clothing', 'Accessories'];
const types = ['All', 'Men', 'Women', 'Kids'];
const priceRanges = [
  { label: 'All', min: 0, max: Infinity },
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 - $100', min: 50, max: 100 },
  { label: '$100+', min: 100, max: Infinity },
];

export default function ShopPage() {
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [selectedPrice, setSelectedPrice] = useState(priceRanges[0]);
  const [filteredProducts, setFilteredProducts] = useState(DUMMY_PRODUCTS);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const urlCategory = searchParams.get('category');
    const urlType = searchParams.get('type');
    if (urlCategory) setSelectedCategory(urlCategory);
    if (urlType) setSelectedType(urlType);
  }, [searchParams]);

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => {
      const updated = DUMMY_PRODUCTS.filter((product) => {
        const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
        const matchesType = selectedType === 'All' || product.type === selectedType;
        const matchesPrice =
          product.price >= selectedPrice.min && product.price <= selectedPrice.max;
        return matchesCategory && matchesType && matchesPrice;
      });
      setFilteredProducts(updated);
      setIsAnimating(false);
    }, 200);
    return () => clearTimeout(timer);
  }, [selectedCategory, selectedType, selectedPrice]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 relative">
      <title>Raja Industries - Shop</title>

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Explore Products</h2>
        <button
          onClick={() => setShowPopup(true)}
          className="px-4 py-2 border border-black rounded-lg text-black font-medium hover:bg-black hover:text-white transition"
        >
          Filters
        </button>
      </div>

      {/* Filter Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex justify-center items-center px-4"
            onClick={() => setShowPopup(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white w-full max-w-4xl rounded-2xl p-8 shadow-2xl border border-zinc-200"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold">Filters</h3>
                <button
                  onClick={() => setShowPopup(false)}
                  className="text-zinc-400 hover:text-black text-xl"
                >
                  ✕
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h4 className="font-semibold text-lg mb-3">Category</h4>
                  <div className="space-y-2">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`w-full text-left px-4 py-2 rounded-md text-sm font-medium ${
                          selectedCategory === cat
                            ? 'bg-black text-white'
                            : 'bg-zinc-100 hover:bg-zinc-200'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">Type</h4>
                  <div className="space-y-2">
                    {types.map((type) => (
                      <button
                        key={type}
                        onClick={() => setSelectedType(type)}
                        className={`w-full text-left px-4 py-2 rounded-md text-sm font-medium ${
                          selectedType === type
                            ? 'bg-black text-white'
                            : 'bg-zinc-100 hover:bg-zinc-200'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-3">Price</h4>
                  <div className="space-y-2">
                    {priceRanges.map((range) => (
                      <button
                        key={range.label}
                        onClick={() => setSelectedPrice(range)}
                        className={`w-full text-left px-4 py-2 rounded-md text-sm font-medium ${
                          selectedPrice.label === range.label
                            ? 'bg-black text-white'
                            : 'bg-zinc-100 hover:bg-zinc-200'
                        }`}
                      >
                        {range.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Product Grid */}
      {filteredProducts.length === 0 ? (
        <p className="text-zinc-500 mt-10">No products match your filters.</p>
      ) : (
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 transition-opacity duration-500 ${
            isAnimating ? 'opacity-0' : 'opacity-100'
          }`}
        >
          {filteredProducts.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              className="group p-5 bg-white border-[3px] border-zinc-200 rounded-2xl shadow hover:shadow-md transition-all duration-300"
            >
              <div className="aspect-[4/5] bg-zinc-100 rounded-xl mb-4 group-hover:bg-zinc-200 transition" />
              <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
              <p className="text-sm text-zinc-500">${product.price}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
