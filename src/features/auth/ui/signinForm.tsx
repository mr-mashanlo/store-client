import { FC, useEffect, useState } from 'react';
import { Form, Link, useActionData, useNavigate, useNavigation } from 'react-router-dom';

import { Button, TextInput } from '@/shared/widgets';

const SigninForm: FC = () => {
  const navigation = useNavigation();
  const navigate = useNavigate();
  const actionData = useActionData() as { success: boolean, error?: { errors: Array<{ path: string, msg: string }> } };
  const [ errorName, setErrorName ] = useState( '' );
  const [ errorMessage, setErrorMessage ] = useState( '' );

  useEffect( () => {
    if ( !actionData ) {
      return;
    }
    if ( actionData.success ) {
      return navigate( '/' );
    }
    setErrorName( actionData.error ? actionData.error.errors[0].path : '' );
    setErrorMessage( actionData.error ? actionData.error.errors[0].msg : '' );
  }, [ actionData, navigate ] );

  return (
    <div className="flex flex-col gap-7">
      <Form method="post" className="flex flex-col gap-7">
        <TextInput onChange={() => {setErrorName( '' ); setErrorMessage( '' );}} id="email" name="email" label={errorName === 'email' ? errorMessage : 'Email'} type="text" placeholder="one@company.com" required />
        <TextInput onChange={() => {setErrorName( '' ); setErrorMessage( '' );}} id="password" name="password" label={errorName === 'password' ? errorMessage : 'Password'} type="password" placeholder="••••••••" required />
        <Button loading={navigation.state === 'submitting'} disabled={navigation.state === 'submitting'}>Sign in</Button>
      </Form>
      <p className="text-center">Create a new account? <Link to="/signup" className="hover:text-white hover:underline"><b>Sign up</b></Link></p>
    </div>
  );
};

export default SigninForm;