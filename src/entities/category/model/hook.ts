import { useQuery } from 'react-query';

import { validateResponseError } from '@/shared/libs';

import categoryController from '../api/api';

export const useCategoryQuery = () => {
  const { data, isLoading, isError, isSuccess } = useQuery( {
    queryKey: [ 'category' ],
    queryFn: () => categoryController.getMany( {} ),
    onError: async error => { console.log( await validateResponseError( error ) ); }
  } );
  return { data, isLoading, isError, isSuccess };
};