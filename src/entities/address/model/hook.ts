import { useQuery } from 'react-query';

import { useUserStore } from '@/entities/user';
import { validateResponseError } from '@/shared/libs';

import addressController from '../api/api';

export const useAddressQuery = () => {
  const userID = useUserStore( state => state.userID );
  const { data, isLoading, isError, isSuccess } = useQuery( {
    queryKey: [ 'address' ],
    queryFn: () => addressController.getOne( { user: userID || '' } ),
    onError: async error => { console.log( await validateResponseError( error ) ); }
  } );
  return { data, isLoading, isError, isSuccess };
};