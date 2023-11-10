import { Product } from '@/types';
import { url } from 'inspector';
import queryString from 'query-string';

const BASE_URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
   categoryId?: string;
   colorId?: string;
   sizeId?: string;
   isFeatured?: boolean;
}

const getProducts = async (query: Query): Promise<Product[]> => {
   const url = queryString.stringifyUrl({
      url: BASE_URL,
      query: {
         categoryId: query.categoryId,
         colorId: query.categoryId,
         sizeId: query.categoryId,
         isFeatured: query.isFeatured,
      },
   });

   const res = await fetch(url);
   return res.json();
};

export default getProducts;
