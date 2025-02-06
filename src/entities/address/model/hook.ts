import { useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';

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
    onSuccess: data => validateResponseData( data )
  } );

  function validateResponseData( data: unknown ) {
    try {
      if ( !data ) return;
      const result = validateAddressResponseData( data );
      setAddress( result );
    } catch ( error ) {
      console.log( error );
    }
  }

  return { address, data, isLoading, isError, isSuccess, queryClient };
};