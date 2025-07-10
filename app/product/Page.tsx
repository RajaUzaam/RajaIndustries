/*import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

// Dummy data to simulate backend
const DUMMY_PRODUCTS = [
  {
    id: '1',
    name: 'Nike Air Max 270',
    price: 150,s
    description: 'Lightweight, cushioned, and bold. The Air Max 270 combines style with performance.',
  },
  {
    id: '2',
    name: 'Nike Tech Hoodie',
    price: 90,
    description: 'Comfort meets modern streetwear in the Nike Tech Hoodie.',
  },
];

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;

  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (id) {
      const found = DUMMY_PRODUCTS.find((p) => p.id === id);
      setProduct(found);
    }
  }, [id]);

  if (!product) {
    return <div className="p-6 text-center">Loading product...</div>;
  }

  return (
    <div className="max-w-5xl mx-auto mt-10 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Image */
        /*div className="bg-gray-100 rounded-xl h-96 w-full" />

        {/* Details */
        /*<div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-xl text-gray-600 mb-4">${product.price}</p>
          <p className="text-gray-700 mb-6">{product.description}</p>

          <button
            className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
            onClick={() => alert('Added to cart (placeholder)')}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
*/