import { useQuery } from 'react-query';

import { validateResponseError } from '@/shared/libs';

import productController from '../api/api';

export const useProductQuery = ( id: string ) => {
  const { data, isLoading, isError, isSuccess } = useQuery( {
    queryKey: [ 'product', id ],
    queryFn: () => productController.getOne( { _id: id } ),
    onError: async error => { console.log( await validateResponseError( error ) ); }
  } );
  return { data, isLoading, isError, isSuccess };
};

export const useProductsQuery = ( query: Record<string, string> ) => {
  const { data, isLoading, isError, isSuccess } = useQuery( {
    queryKey: [ 'products', query ],
    queryFn: () => productController.getMany( query ),
    onError: async error => { console.log( await validateResponseError( error ) ); }
  } );
  return { data, isLoading, isError, isSuccess };
};