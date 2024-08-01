import { FC } from 'react';
import { Link, useFetcher } from 'react-router-dom';
import { Button } from '@/shared/widgets';
import { UpdateUserForm } from '@/features/profile/user/ui';

const ProfileAboutPage: FC = () => {
  const logoutFetcher = useFetcher();

  return (
    <div className="grid gap-10 sm:gap-14">
      <div className="flex items-center gap-5">
        <Link to="/" className="w-6 h-6 rounded-full bg-[#505050] sm:hidden"></Link>
        <h1 className="text-3xl font-bold uppercase text-[#FFCCCC]">Profile page</h1>
      </div>
      <UpdateUserForm />
      <logoutFetcher.Form method="post" action="/account/logout">
        <Button className="w-full" loading={logoutFetcher.state === 'submitting'} disabled={logoutFetcher.state === 'submitting'}>Log out</Button>
      </logoutFetcher.Form>
    </div>
  );
};

export default ProfileAboutPage;