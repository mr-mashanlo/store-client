import { FC } from 'react';
import { Link, useFetcher } from 'react-router-dom';

import { UpdateUserForm } from '@/features/profile/user/ui';
import { Button } from '@/shared/widgets';

const ProfileAboutPage: FC = () => {
  const logoutFetcher = useFetcher();

  return (
    <div className="grid gap-10 sm:gap-14">
      <div className="flex items-center gap-5">
        <Link to="/" className="w-6 h-6 rounded-full bg-black"></Link>
        <h1 className="text-3xl font-bold uppercase text-black">Profile page</h1>
      </div>
      <UpdateUserForm />
      <logoutFetcher.Form method="post" action="/account/logout">
        <Button className="w-full" loading={logoutFetcher.state === 'submitting'} disabled={logoutFetcher.state === 'submitting'}>Log out</Button>
      </logoutFetcher.Form>
    </div>
  );
};

export default ProfileAboutPage;