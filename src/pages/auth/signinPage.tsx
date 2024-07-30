import { FC, useEffect, useState } from 'react';
import { Form, Link, useActionData, useNavigate, useNavigation } from 'react-router-dom';
import TextInput from '@/shared/widgets/textInput';
import Button from '@/shared/widgets/button';

interface Action {
  success: boolean
  error?: { errors: Array<{ path: string, msg: string }> }
}

const SigninPage: FC = () => {
  const navigation = useNavigation();
  const navigate = useNavigate();
  const actionData = useActionData() as Action;

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
    <div className="w-full sm:w-96 flex flex-col gap-7">
      <Form method="post" className="flex flex-col gap-7">
        <TextInput onChange={() => {setErrorName( '' ); setErrorMessage( '' );}} id="email" name="email" label={errorName === 'email' ? errorMessage : 'Email'} type="text" placeholder="one@company.com" required />
        <TextInput onChange={() => {setErrorName( '' ); setErrorMessage( '' );}} id="password" name="password" label={errorName === 'password' ? errorMessage : 'Password'} type="password" placeholder="••••••••" required />
        <Button loading={navigation.state === 'submitting'}>Sign in</Button>
      </Form>
      <p className="text-center">Create a new account? <Link to="/signup" className="hover:text-white hover:underline"><b>Sign up</b></Link></p>
    </div>
  );
};

export default SigninPage;