import { useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';

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
    onSuccess: data => validateResponseData( data )
  } );

  function validateResponseData( data: unknown ) {
    try {
      const result = validateProductResponseData( data );
      setProduct( result );
    } catch ( error ) {
      console.log( error );
    }
  }

  return { product, data, isLoading, isError, isSuccess, queryClient };
};