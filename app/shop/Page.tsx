'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const DUMMY_PRODUCTS = [
  { id: 1, name: 'Nike Air Max 270', price: 150, category: 'Shoes', type: 'Men' },
  { id: 2, name: 'Nike Tech Hoodie', price: 90, category: 'Clothing', type: 'Women' },
  { id: 3, name: 'Adidas Ultra Boost', price: 160, category: 'Shoes', type: 'Kids' },
  { id: 4, name: 'Nike Cap', price: 25, category: 'Accessories', type: 'Men' },
  { id: 5, name: 'Adidas Sweatpants', price: 70, category: 'Clothing', type: 'Men' },
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

  useEffect(() => {
    const urlCategory = searchParams.get("category");
    const urlType = searchParams.get("type");
    //const urlPrice: string | null= searchParams.get("priceRange");

    if (urlCategory) setSelectedCategory(urlCategory);
    if (urlType) setSelectedType(urlType);
    //if (urlPrice) setSelectedPrice(Number(urlPrice));
  }, [searchParams]);

  const filteredProducts = DUMMY_PRODUCTS.filter((product) => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesType = selectedType === 'All' || product.type === selectedType;
    const matchesPrice =
      product.price >= selectedPrice.min && product.price <= selectedPrice.max;
    return matchesCategory && matchesType && matchesPrice;
  });

  return (
    <div className="flex flex-col md:flex-row max-w-7xl mx-auto px-4 py-8">
      <title>Raja Industries - Shop</title>
      {/* Sidebar Filters */}
      <aside className="w-full md:w-1/4 mb-6 md:mb-0 md:mr-6">
        <div className="bg-white p-4 rounded-xl shadow-sm space-y-6">
          {/* Category Filter */}
          <div>
            <h3 className="font-semibold mb-2">Category</h3>
            <div className="space-y-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`block w-full text-left px-2 py-1 rounded-md ${
                    selectedCategory === cat ? 'bg-black text-white' : 'hover:bg-gray-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Type Filter */}
          <div>
            <h3 className="font-semibold mb-2">Type</h3>
            <div className="space-y-1">
              {types.map((b) => (
                <button
                  key={b}
                  onClick={() => setSelectedType(b)}
                  className={`block w-full text-left px-2 py-1 rounded-md ${
                    selectedType === b ? 'bg-black text-white' : 'hover:bg-gray-100'
                  }`}
                >
                  {b}
                </button>
              ))}
            </div>
          </div>

          {/* Price Filter */}
          <div>
            <h3 className="font-semibold mb-2">Price</h3>
            <div className="space-y-1">
              {priceRanges.map((range) => (
                <button
                  key={range.label}
                  onClick={() => setSelectedPrice(range)}
                  className={`block w-full text-left px-2 py-1 rounded-md ${
                    selectedPrice.label === range.label
                      ? 'bg-black text-white'
                      : 'hover:bg-gray-100'
                  }`}
                >
                  {range.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </aside>

      {/* Product Grid */}
      <main className="flex-1">
        <h2 className="text-2xl font-semibold mb-4">Shop Products</h2>
        {filteredProducts.length === 0 ? (
          <p>No products match your filters.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <Link href={`/product/${product.id}`} key={product.id} className="p-4 border rounded-xl shadow hover:shadow-md">
                <div className="h-40 bg-gray-100 rounded mb-4" />
                <h3 className="font-medium text-lg">{product.name}</h3>
                <p className="text-gray-500">${product.price}</p>
              </Link>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
