'use client';

import { Color, Size } from '@/types';
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';
import qs from 'query-string';
import Button from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface FilterProps {
   valueKey: string;
   data: (Size | Color)[];
   name: string;
}

export default function Filter({ valueKey, data, name }: FilterProps) {
   const searchParams = useSearchParams();
   const router = useRouter();

   const selected = searchParams.get(valueKey);

   const handleClick = (id: string) => {
      const current = qs.parse(searchParams.toString());

      const query = {
         ...current,
         [valueKey]: id,
      };

      if (current[valueKey] === id) {
         query[valueKey] = null;
      }

      const url = qs.stringifyUrl(
         {
            url: window.location.href,
            query,
         },
         { skipNull: true }
      );

      router.push(url);
   };

   return (
      <div className="mb-8 ">
         <h3 className="text-lg font-semibold">{name}</h3>
         <hr className="my-4" />
         <div className="flex flex-wrap gap-2">
            {data.map((item) => (
               <div key={item.id} className="flex items-center">
                  <Button
                     className={cn(
                        'rounded-md text-small text-gray-800 p-2 bg-white border border-gray-300',
                        selected === item.id && 'bg-black text-white'
                     )}
                     onClick={() => handleClick(item.id)}>
                     {item.name}
                  </Button>
               </div>
            ))}
         </div>
      </div>
   );
}
