import { useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';

import { validateResponseError } from '@/entities/shared';
import { getUserID } from '@/entities/user';

import addressController from '../api/address';
import { AddressResponseType } from './schema';
import { validateAddressResponseData } from './validator';

export const useAddressQuery = () => {
  const queryClient = useQueryClient();
  const [ address, setAddress ] = useState<AddressResponseType>( {
    _id: '',
    user: '',
    city: '',
    street: ''
  } );

  const { data, isLoading, isError, isSuccess } = useQuery( {
    queryKey: [ 'address' ],
    queryFn: () => addressController.getOne( { user: getUserID() || '' } ),
    onError: async error => {
      const result = await validateResponseError( error );
      console.log( result );
    },
    onSuccess: async data => {
      try {
        const result = validateAddressResponseData( data );
        setAddress( result );
      } catch ( error ) {
        const result = await validateResponseError( error );
        console.log( result );
      }
    }
  } );

  return { address, data, isLoading, isError, isSuccess, queryClient };
};