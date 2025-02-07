import { useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';

import { validateResponseError } from '@/entities/shared';

import userController from '../api/controller';
import { getUserID } from './mediator';
import { UserResponseType } from './userSchema';
import { validateUserResponseData } from './validator';

export const useUserQuery = () => {
  const queryClient = useQueryClient();
  const [ user, setUser ] = useState<UserResponseType>( {
    _id: '',
    email: '',
    password: '',
    fullname: ''
  } );

  const { data, isLoading, isError, isSuccess } = useQuery( {
    queryKey: [ 'user' ],
    queryFn: () => userController.getOne( { _id: getUserID() || '' } ),
    onError: async error => {
      console.log( error );
      const result = await validateResponseError( error );
      console.log( result );
    },
    onSuccess: async data => {
      try {
        const result = validateUserResponseData( data );
        setUser( result );
      } catch ( error ) {
        const result = await validateResponseError( error );
        console.log( result );
      }
    }
  } );

  return { user, data, isLoading, isError, isSuccess, queryClient };
};