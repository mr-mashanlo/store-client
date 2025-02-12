import { FC, FormEvent, FormHTMLAttributes, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Fieldset, Legend } from '@headlessui/react';

import { setUserID, userController, validateAuthRequestData, validateAuthResponseData } from '@/entities/user';
import { validateResponseError } from '@/shared/libs';
import { CustomButton, CustomInput } from '@/shared/ui';

type Props = FormHTMLAttributes<HTMLFormElement>

const SignupForm: FC<Props> = ( { ...others } ) => {
  const navigate = useNavigate();
  const [ error, setError ] = useState( { name: '', message: '' } );

  async function handleFormSubmit( e: FormEvent<HTMLFormElement> ) {
    try {
      e.preventDefault();
      const formData = new FormData( e.currentTarget );
      const fields = Object.fromEntries( formData.entries() );
      const { email, password, confirm } = validateAuthRequestData( fields );
      const response = await userController.signUp( email, password, confirm || '' );
      const result = validateAuthResponseData( response );
      setUserID( result.id );
      navigate( '/' );
    } catch ( error ) {
      const result = await validateResponseError( error );
      setError( result );
    }
  };

  return (
    <form onSubmit={e => handleFormSubmit( e )} className="w-full sm:max-w-96" {...others}>
      <Fieldset>
        <Legend className="font-semibold text-center">Sign up</Legend>
        <CustomInput type="email" name="email" label="Email" error={error} placeholder="name@company.com" className="mt-8" />
        <CustomInput type="password" name="password" label="Password" error={error} placeholder="•••••••••" className="mt-8" />
        <CustomInput type="password" name="confirm" label="Confirm" error={error} placeholder="•••••••••" className="mt-8" />
        <CustomButton type="submit" className="mt-8">Sign up</CustomButton>
        {
          error.name === 'network'
            ?
            <p className="mt-8 text-center text-red-400 leading-6">{error.message}</p>
            :
            <p className="mt-8 text-center leading-6">Already have an account? <Link to="/signin" className="font-bold hover:underline">Log in</Link>, <br /> or go back to the <Link to="/" className="font-bold hover:underline">Home page</Link></p>
        }
      </Fieldset>
    </form>
  );
};

export default SignupForm;