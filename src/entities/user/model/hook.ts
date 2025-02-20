import { useQuery } from 'react-query';

import { validateResponseError } from '@/shared/libs';

import userController from '../api/api';
import useUserStore from './store';

export const useUserQuery = () => {
  const userID = useUserStore( state => state.userID );
  const { data, isLoading, isError, isSuccess } = useQuery( {
    queryKey: [ 'user' ],
    queryFn: () => userController.getOne( { _id: userID || '' } ),
    onError: async error => { console.log( await validateResponseError( error ) ); }
  } );
  return { data, isLoading, isError, isSuccess };
};