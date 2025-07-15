'use client';

import { use } from 'react';
import { useRouter } from 'next/navigation';
import { Undo } from 'lucide-react';
import AddToCartButton from "@/components/AddtoCartBtn";

type Params = {
  id: string;
};

const DUMMY_PRODUCTS = [
  {
    id: '1',
    name: 'Nike Air Max 270',
    price: 150,
    description: 'Lightweight, cushioned, and bold. The Air Max 270 combines style with performance.',
  },
  {
    id: '2',
    name: 'Nike Tech Hoodie',
    price: 90,
    description: 'Comfort meets modern streetwear in the Nike Tech Hoodie.',
  },
];

export default function ProductPage({ params }: { params: Promise<Params> }) {
  const router = useRouter();
  const { id } = use(params);
  const decodedId = decodeURIComponent(id);
  const product = DUMMY_PRODUCTS.find((p) => p.id === decodedId);

  if (!product) {
    return <div className="p-6 text-center text-zinc-500">Product not found.</div>;
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <title>Raja Industries - {product.name}</title>

      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="mb-6 flex items-center gap-2 text-sm text-zinc-600 hover:text-black transition"
      >
        <Undo className="w-4 h-4" />
        Go Back
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div className="w-full h-[450px] rounded-2xl bg-gradient-to-br from-zinc-100 to-zinc-200 shadow-inner hover:shadow-lg transition-shadow duration-500" />

        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 mb-2">{product.name}</h1>
            <p className="text-xl text-zinc-600 font-medium">${product.price}</p>
          </div>

          <p className="text-zinc-700 leading-relaxed text-base">
            {product.description}
          </p>

          <div className="pt-6">
            <AddToCartButton productId={product.id} />
          </div>
        </div>
      </div>
    </div>
  );
}
