import { FC } from 'react';

import { SignupForm } from '@/features/sign-up-form';

const SignupPage: FC = () => {
  return (
    <main aria-labelledby="heading" className="min-h-screen p-5 flex items-center justify-center">
      <SignupForm />
    </main>
  );
};

export default SignupPage;