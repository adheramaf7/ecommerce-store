'use client';

import { Product } from '@/types';
import Image from 'next/image';
import React from 'react';
import IconButton from './icon-button';
import { Expand, ShoppingCart } from 'lucide-react';
import Currency from './currency';
import { useRouter } from 'next/navigation';

interface ProductCardProps {
   product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
   const router = useRouter();
   const handleClick = () => router.push(`/products/${product?.id}`);

   return (
      <div className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
         <div className="aspect-square rounded-xl bg-gray-100 relative">
            <Image
               alt="Image"
               src={product?.images?.[0]?.url}
               fill
               className="aspect-square object-cover rounded-md"
            />
            <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6  bottom-5">
               <div className="flex gap-x-6 justify-center">
                  <IconButton
                     icon={<Expand size={20} className="text-gray-600" />}
                     onClick={handleClick}
                  />
                  <IconButton
                     icon={<ShoppingCart size={20} className="text-gray-600" />}
                     onClick={() => {}}
                  />
               </div>
            </div>
         </div>
         <div>
            <p className="font-semibold text-lg">{product.name}</p>
            <p className="text-sm text-gray-500">{product.category?.name}</p>
         </div>
         <div className="flex items-center justify-between">
            <Currency value={product.price} />
         </div>
      </div>
   );
}
