import { FC, FormEvent, FormHTMLAttributes, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Fieldset, Legend } from '@headlessui/react';

import { validateResponseError } from '@/entities/shared';
import { setUserID, userController, validateAuthRequestData, validateAuthResponseData } from '@/entities/user';
import { CustomButton, CustomInput } from '@/shared/ui';

type Props = FormHTMLAttributes<HTMLFormElement>

const SigninForm: FC<Props> = ( { ...others } ) => {
  const navigate = useNavigate();
  const [ error, setError ] = useState( { name: '', message: '' } );

  async function handleFormSubmit( e: FormEvent<HTMLFormElement> ) {
    try {
      e.preventDefault();
      const formData = new FormData( e.currentTarget );
      const fields = Object.fromEntries( formData.entries() );
      const { email, password } = validateAuthRequestData( fields );
      const response = await userController.signIn( email, password );
      const result = validateAuthResponseData( response );
      setUserID( result.id );
      navigate( '/' );
    } catch ( error ) {
      const response = await validateResponseError( error );
      setError( response );
    }
  };

  return (
    <form onSubmit={e => handleFormSubmit( e )} className="w-full sm:max-w-96" {...others}>
      <Fieldset>
        <Legend className="font-semibold text-center">Sign in</Legend>
        <CustomInput type="email" name="email" label="Email" error={error} placeholder="name@company.com" className="mt-8" />
        <CustomInput type="password" name="password" label="Password" error={error} placeholder="•••••••••" className="mt-8" />
        <CustomButton type="submit" className="mt-8">Sign in</CustomButton>
        {
          error.name === 'network'
            ?
            <p className="mt-8 text-center text-red-400 leading-6">{error.message}</p>
            :
            <p className="mt-8 text-center leading-6">Dont have an account? <Link to="/signup" className="hover:underline"><b>Register</b></Link>, <br /> or go back to the <Link to="/" className="hover:underline"><b>Home page</b></Link></p>
        }
      </Fieldset>
    </form>
  );
};

export default SigninForm;