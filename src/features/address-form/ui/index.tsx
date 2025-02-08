import { FC, FormEvent, FormHTMLAttributes, useState } from 'react';
import { useMutation } from 'react-query';
import { Fieldset, Legend } from '@headlessui/react';

import { addressController, useAddressQuery, validateAddressRequestData, validateAddressResponseData } from '@/entities/address';
import { validateResponseError } from '@/entities/shared';
import { getUserID } from '@/entities/user';
import { CustomButton, CustomInput } from '@/shared/ui';

type Props = FormHTMLAttributes<HTMLFormElement>

const AddressForm: FC<Props> = ( { ...others } ) => {
  const mutation = useMutation( addressController.upsert );
  const { data } = useAddressQuery();
  const [ error, setError ] = useState( { name: '', message: '' } );

  async function handleFormSubmit( e: FormEvent<HTMLFormElement> ) {
    try {
      e.preventDefault();
      const formData = new FormData( e.currentTarget );
      const fields = Object.fromEntries( formData.entries() );
      const { city, street } = validateAddressRequestData( fields );
      const response = await mutation.mutateAsync( { query: { user: getUserID() }, updates: { city, street } } );
      validateAddressResponseData( response );
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

export default AddressForm;