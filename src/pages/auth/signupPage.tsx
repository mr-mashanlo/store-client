import { FC } from 'react';
import { Form } from 'react-router-dom';
import TextInput from '@/shared/ui/textInput';
import Button from '@/shared/ui/button';

const SignupPage: FC = () => {
  return (
    <Form className="min-w-96 flex flex-col gap-7">
      <TextInput id="email" name="email" label="Email" type="text" required />
      <TextInput id="password" name="password" label="Password" type="password" required />
      <TextInput id="confirm" name="confirm" label="Confirm" type="password" required />
      <Button>Sign up</Button>
    </Form>
  );
};

export default SignupPage;