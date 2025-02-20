import { useQuery } from 'react-query';

import { useUserStore } from '@/entities/user';
import { validateResponseError } from '@/shared/libs';

import orderController from '../api/api';

export const useOrderQuery = ( id: string ) => {
  const { data, isLoading, isError, isSuccess } = useQuery( {
    queryKey: [ 'order' ],
    queryFn: () => orderController.getOne( { _id: id } ),
    onError: async error => { console.log( await validateResponseError( error ) ); }
  } );
  return { data, isLoading, isError, isSuccess };
};

export const useOrdersQuery = () => {
  const userID = useUserStore( state => state.userID );
  const { data, isLoading, isError, isSuccess } = useQuery( {
    queryKey: [ 'orders' ],
    queryFn: () => orderController.getMany( { user: userID || '' } ),
    onError: async error => { console.log( await validateResponseError( error ) ); }
  } );
  return { data, isLoading, isError, isSuccess };
};