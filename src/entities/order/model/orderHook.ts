import { useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';

import { validateResponseError } from '@/entities/shared';

import orderController from '../api/order';
import { OrderResponseType } from './schema';
import { validateOrderResponseData } from './validator';

export const useOrderQuery = ( id: string ) => {
  const queryClient = useQueryClient();
  const [ order, setOrder ] = useState<OrderResponseType>();

  const { data, isLoading, isError, isSuccess } = useQuery( {
    queryKey: [ 'order' ],
    queryFn: () => orderController.getOne( { _id: id } ),
    onError: async error => {
      const result = await validateResponseError( error );
      console.log( result );
    },
    onSuccess: async data => {
      try {
        const result = validateOrderResponseData( data );
        setOrder( result );
      } catch ( error ) {
        const result = await validateResponseError( error );
        console.log( result );
      }
    }
  } );

  return { order, data, isLoading, isError, isSuccess, queryClient };
};