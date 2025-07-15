"use client";

import Link from "next/link";
import Image from "next/image";
import { X, ShoppingCart } from "lucide-react";

const DUMMY_WISHLIST = [
  {
    id: "1",
    name: "Nike Air Max 270",
    price: 150,
    image: "/products/shoe1.png",
  },
  {
    id: "2",
    name: "Nike Tech Hoodie",
    price: 90,
    image: "/products/hoodie1.png",
  },
  {
    id: "3",
    name: "Loop Tech Hoodie",
    price: 30,
    image: "/products/hoodie1.png",
  },
];

export default function WishlistPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <title>Raja Industries - Wishlist</title>
      <h1 className="text-3xl font-bold mb-6">Your Wishlist</h1>

      {DUMMY_WISHLIST.length === 0 ? (
        <p className="text-zinc-500">Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {DUMMY_WISHLIST.map((item) => (
            <Link
              key={item.id}
              href={`/product/${item.id}`}
              className="border border-zinc-200 rounded-2xl p-5 shadow-sm flex items-start gap-6 bg-white group hover:shadow-md transition-all"
            >
              {/* Product Image */}
              <div className="w-32 h-32 bg-zinc-100 rounded-xl overflow-hidden flex items-center justify-center group-hover:scale-[1.02] transition">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>

              {/* Product Details */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-1">{item.name}</h3>
                <p className="text-zinc-500 mb-2">${item.price}</p>
                <div className="flex items-center gap-3 mt-4">
                  <button
                    className="px-4 py-1.5 text-sm bg-zinc-100 hover:bg-zinc-200 transition rounded-md text-black flex items-center gap-1"
                    onClick={(e) => e.preventDefault()} // Prevents link from triggering on button click
                  >
                    <ShoppingCart size={16} />
                    Add to Cart
                  </button>
                </div>
              </div>

              {/* Remove Button */}
              <button
                className="ml-auto text-zinc-400 hover:text-black transition"
                onClick={(e) => {
                  e.preventDefault();
                  // handleRemove(item.id)
                }}
              >
                <X />
              </button>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
