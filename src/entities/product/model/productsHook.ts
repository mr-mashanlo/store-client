import { useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';

import { validateResponseError } from '@/entities/shared';

import productController from '../api/product';
import { ProductsResponseType } from './schema';
import { validateProductsResponseData } from './validator';

export const useProductsQuery = () => {
  const queryClient = useQueryClient();
  const [ products, setProducts ] = useState<ProductsResponseType>( [] );

  const { data, isLoading, isError, isSuccess } = useQuery( {
    queryKey: [ 'products' ],
    queryFn: () => productController.getMany( {} ),
    onError: async error => {
      const result = await validateResponseError( error );
      console.log( result );
    },
    onSuccess: async data => {
      try {
        const result = validateProductsResponseData( data );
        setProducts( result );
      } catch ( error ) {
        const result = await validateResponseError( error );
        console.log( result );
      }
    }
  } );

  return { products, data, isLoading, isError, isSuccess, queryClient };
};