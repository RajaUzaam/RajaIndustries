'use client';

import { motion, AnimatePresence } from 'framer-motion';

type WishlistItem = {
  id: string;
  name: string;
  price: number;
};

const dummyWishlist: WishlistItem[] = [
  { id: '1', name: 'Adidas Ultraboost', price: 150 },
  { id: '2', name: 'Nike Fleece Joggers', price: 90 },
];

export default function WishlistSlidePanel({ open }: { open: boolean }) {
  const wishlistItems = dummyWishlist;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: '0%' }}
          exit={{ x: '100%' }}
          transition={{ type: 'tween', duration: 0.3 }}
          className="absolute right-0 w-full sm:w-1/2 bg-white shadow-2xl z-50 rounded-l-xl overflow-hidden flex flex-col"
        >
          <div className="p-4 border-b text-xl font-bold">Your Wishlist</div>

          <div className="p-4 space-y-4 overflow-y-auto flex-grow">
            {wishlistItems.length === 0 ? (
              <p className="text-center text-gray-500">Your wishlist is empty.</p>
            ) : (
              wishlistItems.map((item) => (
                <div
                  key={item.id}
                  className="border rounded-xl p-4 flex justify-between items-center"
                >
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-500">${item.price}</p>
                  </div>
                  <button className="text-blue-600 text-sm hover:underline">
                    Add to Cart
                  </button>
                </div>
              ))
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
