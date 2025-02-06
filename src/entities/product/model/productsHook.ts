import { useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';

import productController from '../api/product';
import { ProductsResponseType } from './schema';
import { validateProductsResponseData } from './validator';

export const useProductsQuery = () => {
  const queryClient = useQueryClient();
  const [ products, setProducts ] = useState<ProductsResponseType>( [] );

  const { data, isLoading, isError, isSuccess } = useQuery( {
    queryKey: [ 'products' ],
    queryFn: () => productController.getMany( {} ),
    onSuccess: data => validateResponseData( data )
  } );

  function validateResponseData( data: unknown ) {
    try {
      if ( !data ) return;
      const result = validateProductsResponseData( data );
      setProducts( result );
    } catch ( error ) {
      console.log( error );
    }
  }

  return { products, data, isLoading, isError, isSuccess, queryClient };
};