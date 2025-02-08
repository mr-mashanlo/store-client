import { FC, FormEvent, FormHTMLAttributes, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { Fieldset, Legend } from '@headlessui/react';

import { validateResponseError } from '@/entities/shared';
import { getUserID, userController, useUserQuery, validateUserRequestData, validateUserResponseData } from '@/entities/user';
import { CustomButton, CustomInput } from '@/shared/ui';

type Props = FormHTMLAttributes<HTMLFormElement>

const UpdateUserForm: FC<Props> = ( { ...others } ) => {
  const { data } = useUserQuery();
  const queryClient = useQueryClient();
  const mutation = useMutation( userController.update );
  const [ error, setError ] = useState( { name: '', message: '' } );

  async function handleFormSubmit( e: FormEvent<HTMLFormElement> ) {
    try {
      e.preventDefault();
      const formData = new FormData( e.currentTarget );
      const fields = Object.fromEntries( formData.entries() );
      const { fullname } = validateUserRequestData( fields );
      const response = await mutation.mutateAsync( { query: { _id: getUserID() || '' }, updates: { fullname } } );
      validateUserResponseData( response );
      queryClient.invalidateQueries( { queryKey: [ 'user' ] } );
    } catch ( error ) {
      const result = await validateResponseError( error );
      setError( result );
    }
  };

  return (
    <form onSubmit={e => handleFormSubmit( e )} className="w-full sm:max-w-96" {...others}>
      <Fieldset>
        <Legend className="font-semibold text-center">User</Legend>
        <CustomInput defaultValue={data?.email} type="email" name="email" label="Email" error={error} placeholder="name@company.com" className="mt-8" disabled />
        <CustomInput defaultValue={data?.fullname} type="text" name="fullname" label="Fullname" error={error} placeholder="Jonh Doe" className="mt-8" />
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

export default UpdateUserForm;