// app/shop/page.tsx
'use client';

import { Suspense } from 'react';
import ShopClient from './ShopClient';

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="p-10">Loading products...</div>}>
      <ShopClient />
    </Suspense>
  );
}
