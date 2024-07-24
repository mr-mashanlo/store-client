import { FC } from 'react';
import { useLoaderData } from 'react-router-dom';
import { UserList } from '@/features/user/ui';
import { IUser } from '@/entities/auth/types';

const DashboardUsersPage: FC = () => {
  const loaderData = useLoaderData() as { success: boolean, data?: Array<IUser> };

  return (
    <div className="grid gap-14">
      <h1 className="text-3xl font-bold uppercase text-[#FFCCCC]">Users page</h1>
      <UserList users={loaderData.data || []} />
    </div>
  );
};

export default DashboardUsersPage;