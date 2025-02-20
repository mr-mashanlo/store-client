import { useQuery } from 'react-query';

import { validateResponseError } from '@/shared/libs';

import cartController from '../api/api';

export const useCartQuery = () => {
  const { data, isLoading, isError, isSuccess } = useQuery( {
    queryKey: [ 'cart' ],
    queryFn: () => cartController.getOne(),
    onError: async error => { console.log( await validateResponseError( error ) ); }
  } );
  return { data, isLoading, isError, isSuccess };
};