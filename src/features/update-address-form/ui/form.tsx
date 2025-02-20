import { FC, FormEvent, FormHTMLAttributes, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { Fieldset, Legend } from '@headlessui/react';

import { addressController, useAddressQuery, validateAddressRequestData, validateAddressResponseData } from '@/entities/address';
import { useUserStore } from '@/entities/user';
import { validateResponseError } from '@/shared/libs';
import { CustomButton, CustomInput } from '@/shared/ui';

type Props = FormHTMLAttributes<HTMLFormElement>

const UpdateAddressForm: FC<Props> = ( { ...others } ) => {
  const queryClient = useQueryClient();
  const mutation = useMutation( addressController.upsert );
  const { data } = useAddressQuery();
  const userID = useUserStore( state => state.userID );
  const [ error, setError ] = useState( { name: '', message: '' } );

  async function handleFormSubmit( e: FormEvent<HTMLFormElement> ) {
    try {
      e.preventDefault();
      const formData = new FormData( e.currentTarget );
      const fields = Object.fromEntries( formData.entries() );
      const { city, street } = validateAddressRequestData( fields );
      const response = await mutation.mutateAsync( { query: { user: userID }, updates: { city, street } } );
      validateAddressResponseData( response );
      queryClient.invalidateQueries( { queryKey: [ 'address' ] } );
    } catch ( error ) {
      const result = await validateResponseError( error );
      setError( result );
    }
  };

  return (
    <form onSubmit={e => handleFormSubmit( e )} className="w-full sm:max-w-96" {...others}>
      <Fieldset>
        <Legend className="font-semibold text-center">Adderss</Legend>
        <CustomInput defaultValue={data?.city} type="text" name="city" label="City" error={error} placeholder="Moscow" className="mt-8" />
        <CustomInput defaultValue={data?.street} type="text" name="street" label="Street" error={error} placeholder="Somestreet, 31" className="mt-8" />
        <CustomButton isLoading={mutation.isLoading} disabled={mutation.isLoading} type="submit" className="mt-8">Update</CustomButton>
        {
          error.name
          &&
          <p className="mt-8 text-center text-red-400 leading-6">{error.message}</p>
        }
      </Fieldset>
    </form>
  );
};

export default UpdateAddressForm;