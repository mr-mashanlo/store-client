import { useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';

import { validateResponseError } from '@/entities/shared';

import cartController from '../api/cart';
import { CartResponseType } from './schema';
import { validateCartResponseData } from './validator';

export const useCartQuery = () => {
  const queryClient = useQueryClient();
  const [ cart, setCart ] = useState<CartResponseType>( { _id: '', user: '', products: [] } );

  const { data, isLoading, isError, isSuccess } = useQuery( {
    queryKey: [ 'cart' ],
    queryFn: () => cartController.getOne(),
    onError: async error => {
      const result = await validateResponseError( error );
      console.log( result );
    },
    onSuccess: async data => {
      try {
        if ( !data ) return;
        const result = validateCartResponseData( data );
        setCart( result );
      } catch ( error ) {
        const result = await validateResponseError( error );
        console.log( result );
      }
    }
  } );

  return { cart, data, isLoading, isError, isSuccess, queryClient };
};