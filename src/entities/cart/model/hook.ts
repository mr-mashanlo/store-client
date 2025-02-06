import { useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';

import cartController from '../api/cart';
import { CartResponseType } from './schema';
import { validateCartResponseData } from './validator';

export const useCartQuery = () => {
  const queryClient = useQueryClient();
  const [ cart, setCart ] = useState<CartResponseType>( { _id: '', products: [] } );

  const { data, isLoading, isError, isSuccess } = useQuery( {
    queryKey: [ 'cart' ],
    queryFn: () => cartController.getOne(),
    onSuccess: data => validateResponseData( data )
  } );

  function validateResponseData( data: unknown ) {
    try {
      if ( !data ) return;
      const result = validateCartResponseData( data );
      setCart( result );
    } catch ( error ) {
      console.log( error );
    }
  }

  return { cart, data, isLoading, isError, isSuccess, queryClient };
};