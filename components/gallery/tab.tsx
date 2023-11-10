import { Image as ImageType } from '@/types';
import Image from 'next/image';
import React from 'react';
import { Tab } from '@headlessui/react';
import { cn } from '@/lib/utils';

export default function GalleryTab({ image }: { image: ImageType }) {
   return (
      <Tab className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white">
         {({ selected }) => (
            <div>
               <span className="absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md">
                  <Image alt="Image" fill src={image.url} className="object-cover object-center" />
               </span>
               <span
                  className={cn(
                     'absolute inset-0 rounded-md ring-2 ring-offset-2',
                     selected ? 'ring-black' : 'ring-transparent'
                  )}
               />
            </div>
         )}
      </Tab>
   );
}
