import { FC, FormEvent, FormHTMLAttributes, useState } from 'react';
import { HTTPError } from 'ky';
import { Else, If, Then } from 'react-if';
import { Link, useNavigate } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import { ZodError } from 'zod';
import { Button, Description, Field, Fieldset, Input, Label, Legend } from '@headlessui/react';

import { setUserID, userController, validateAuthRequestData, validateAuthResponseData } from '@/entities/user';

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
        <Legend className="font-semibold text-center">Sign in</Legend>
        <Field className="mt-8 relative">
          <Label className="px-2 text-xs font-medium bg-white absolute -top-[0.55rem] left-3 z-10">Email</Label>
          <Input type="email" name="email" placeholder="email@company.com" className={twMerge( 'block w-full px-3 py-2 outline-none border rounded-md bg-transparent placeholder:text-zinc-500 focus:border-zinc-500', error?.name === 'email' ? 'border-red-400' : 'border-zinc-200' )} required />
          {error?.name === 'email' && <Description className="mt-1 text-xs text-red-400 absolute top-full right-0">{error?.message}</Description>}
        </Field>
        <Field className="mt-8 relative">
          <Label className="px-2 text-xs font-medium bg-white absolute -top-[0.55rem] left-3 z-10">Password</Label>
          <Input type="password" name="password" placeholder="••••••••" className={twMerge( 'block w-full px-3 py-2 outline-none border rounded-md bg-transparent placeholder:text-zinc-500 focus:border-zinc-500', error?.name === 'password' ? 'border-red-400' : 'border-zinc-200' )} required />
          {error?.name === 'password' && <Description className="mt-1 text-xs text-red-400 absolute top-full right-0">{error?.message}</Description>}
        </Field>
        <Button type="submit" className="w-full px-3 py-2 mt-8 outline-none bg-black text-white border border-black rounded-md">Sign in</Button>
        <If condition={error.name === 'network'}>
          <Then>
            <p className="mt-8 text-center text-red-400 leading-6">{error.message}</p>
          </Then>
          <Else>
            <p className="mt-8 text-center leading-6">Dont have an account? <Link to="/signup" className="hover:underline"><b>Register</b></Link>, <br /> or go back to the <Link to="/" className="hover:underline"><b>Home page</b></Link></p>
          </Else>
        </If>
      </Fieldset>
    </form>
  );
};

export default SigninForm;