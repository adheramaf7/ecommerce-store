import getBillboard from '@/actions/get-billboard';
import getBillboards from '@/actions/get-billboards';
import getProducts from '@/actions/get-products';
import Billboard from '@/components/billboard';
import ProductList from '@/components/product-list';
import Container from '@/components/ui/container';
import React from 'react';

export const revalidate = 0;

export default async function HomePage() {
   const products = await getProducts({ isFeatured: true });
   const billboards = await getBillboards();

   return (
      <Container>
         <div className="space-y-10 pb-10">
            {billboards.length > 0 && <Billboard data={billboards.pop()!} />}
            <div className="flex flex-col gap-y-8 gap-x-4 sm:px-6 lg:px-8 mt-6">
               <ProductList title="Featured Products" items={products} />
            </div>
         </div>
      </Container>
   );
}
