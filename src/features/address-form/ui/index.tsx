import { FC, FormEvent, FormHTMLAttributes, useState } from 'react';
import { HTTPError } from 'ky';
import { useMutation, useQueryClient } from 'react-query';
import { ZodError } from 'zod';
import { Fieldset, Legend } from '@headlessui/react';

import { addressController, useAddressQuery, validateAddressRequestData } from '@/entities/address';
import { getUserID } from '@/entities/user';
import { CustomButton, CustomInput } from '@/shared/ui';

type Props = FormHTMLAttributes<HTMLFormElement>

const AddressForm: FC<Props> = ( { ...others } ) => {
  const queryClient = useQueryClient();
  const { address } = useAddressQuery();
  const [ error, setError ] = useState( { name: '', message: '' } );

  const mutation = useMutation( {
    mutationFn: addressController.upsert,
    onSuccess: () => queryClient.invalidateQueries( { queryKey: [ 'address' ] } )
  } );

  async function handleFormSubmit( e: FormEvent<HTMLFormElement> ) {
    try {
      e.preventDefault();
      const formData = new FormData( e.currentTarget );
      const fields = Object.fromEntries( formData.entries() );
      const { city, address } = validateAddressRequestData( fields );
      mutation.mutate( { query: { user: getUserID() }, updates: { city, address } } );
    } catch ( error ) {
      if ( error instanceof ZodError ) {
        setError( { name: String( error.errors[0].path[0] ), message: error.errors[0].message } );
      } else if ( error instanceof HTTPError ) {
        const response = await error.response.json();
        setError( { name: response.name, message: response.message } );
      } else if ( error instanceof TypeError ) {
        setError( { name: 'network', message: 'Server is not responding. Please try again later.' } );
      }
    }
  };

  return (
    <form onSubmit={e => handleFormSubmit( e )} className="w-full sm:max-w-96" {...others}>
      <Fieldset>
        <Legend className="font-semibold text-center">Adderss</Legend>
        <CustomInput defaultValue={address.city} type="text" name="city" label="City" error={error} placeholder="Moscow" className="mt-8" />
        <CustomInput defaultValue={address.address} type="text" name="address" label="Address" error={error} placeholder="Somestreet, 31" className="mt-8" />
        <CustomButton type="submit" className="mt-8">Update</CustomButton>
        {
          error.name === 'network'
          &&
          <p className="mt-8 text-center text-red-400 leading-6">{error.message}</p>
        }
      </Fieldset>
    </form>
  );
};

export default AddressForm;