import { FC, useEffect, useState } from 'react';
import { Form, useActionData, useNavigate, useNavigation } from 'react-router-dom';
import TextInput from '@/shared/ui/textInput';
import Button from '@/shared/ui/button';

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
    <Form method="post" className="min-w-96 flex flex-col gap-7">
      <TextInput onChange={() => {setErrorName( '' ); setErrorMessage( '' );}} id="email" name="email" label={errorName === 'email' ? errorMessage : 'Email'} type="text" placeholder="one@company.com" required />
      <TextInput onChange={() => {setErrorName( '' ); setErrorMessage( '' );}} id="password" name="password" label={errorName === 'password' ? errorMessage : 'Password'} type="password" placeholder="one1234" required />
      <Button loading={navigation.state === 'submitting'}>Sign in</Button>
    </Form>
  );
};

export default SigninPage;