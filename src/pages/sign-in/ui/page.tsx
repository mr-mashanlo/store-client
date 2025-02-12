import { FC } from 'react';

import { SigninForm } from '@/features/sign-in-form';

const SigninPage: FC = () => {
  return (
    <main aria-labelledby="heading" className="min-h-screen p-5 flex items-center justify-center">
      <SigninForm />
    </main>
  );
};

export default SigninPage;