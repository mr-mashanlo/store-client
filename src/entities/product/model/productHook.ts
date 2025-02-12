import { useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';

import { validateResponseError } from '@/shared/libs';

import productController from '../api/product';
import { ProductResponseType } from './schema';
import { validateProductResponseData } from './validator';

export const useProductQuery = ( id: string ) => {
  const queryClient = useQueryClient();
  const [ product, setProduct ] = useState<ProductResponseType>( {
    _id: '',
    name: '',
    price: 0
  } );

  const { data, isLoading, isError, isSuccess } = useQuery( {
    queryKey: [ 'product', id ],
    queryFn: () => productController.getOne( { _id: id } ),
    onError: async error => {
      const result = await validateResponseError( error );
      console.log( result );
    },
    onSuccess: async data => {
      try {
        if ( !data ) return;
        const result = validateProductResponseData( data );
        setProduct( result );
      } catch ( error ) {
        const result = await validateResponseError( error );
        console.log( result );
      }
    }
  } );

  return { product, data, isLoading, isError, isSuccess, queryClient };
};