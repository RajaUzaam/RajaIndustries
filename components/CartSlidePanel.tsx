'use client';

import { motion, AnimatePresence } from 'framer-motion';

type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

const dummyCartItems: CartItem[] = [
  { id: '1', name: 'Nike Air Max', price: 120, quantity: 1 },
  { id: '2', name: 'Jordan Hoodie', price: 80, quantity: 2 },
];

export default function CartSlidePanel({ open }: { open: boolean }) {
  const cartItems = dummyCartItems;
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

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
          <div className="p-4 border-b text-xl font-bold">Your Cart</div>
          <div className="p-4 space-y-4 overflow-y-auto flex-grow">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="border rounded-xl p-4 flex justify-between items-center"
              >
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                </div>
                <p className="font-bold">${item.price * item.quantity}</p>
              </div>
            ))}
          </div>

          <div className="p-4 border-t flex justify-between items-center font-bold text-lg">
            <span>Total:</span>
            <span>${total}</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
