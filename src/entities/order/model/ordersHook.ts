import { useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';

import { validateResponseError } from '@/entities/shared';
import { getUserID } from '@/entities/user';

import orderController from '../api/order';
import { OrdersResponseType } from './schema';
import { validateOrdersResponseData } from './validator';

export const useOrdersQuery = () => {
  const queryClient = useQueryClient();
  const [ orders, setOrders ] = useState<OrdersResponseType>( [] );

  const { data, isLoading, isError, isSuccess } = useQuery( {
    queryKey: [ 'orders' ],
    queryFn: () => orderController.getMany( { user: getUserID() || '' } ),
    onError: async error => {
      const result = await validateResponseError( error );
      console.log( result );
    },
    onSuccess: async data => {
      try {
        const result = validateOrdersResponseData( data );
        setOrders( result );
      } catch ( error ) {
        const result = await validateResponseError( error );
        console.log( result );
      }
    }
  } );

  return { orders, data, isLoading, isError, isSuccess, queryClient };
};