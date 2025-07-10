'use client';

export default function AddToCartButton({ productId }: { productId: string }) {
  return (
    <button
      onClick={() => alert(`Added product ${productId} to cart (placeholder)`)}
      className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
    >
      Add to Cart
    </button>
  );
}
