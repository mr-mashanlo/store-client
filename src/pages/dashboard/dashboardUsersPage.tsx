import { FC } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

import { IUser } from '@/entities/auth/types';
import { UserList } from '@/shared/widgets';

const DashboardUsersPage: FC = () => {
  const loaderData = useLoaderData() as { success: boolean, data?: Array<IUser> };

  return (
    <div className="grid gap-10 sm:gap-14">
      <div className="flex items-center gap-5">
        <Link to="/" className="w-6 h-6 rounded-full bg-black"></Link>
        <h1 className="text-3xl font-bold uppercase text-black">Users page</h1>
      </div>
      <UserList users={loaderData.data || []} />
    </div>
  );
};

export default DashboardUsersPage;