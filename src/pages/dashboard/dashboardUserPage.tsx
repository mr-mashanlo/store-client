import { FC } from 'react';
import { Link } from 'react-router-dom';

import { DeleteUserForm, UpdateUserForm } from '@/features/dashboard/user/ui';

const DashboardUserPage: FC = () => {
  return (
    <div className="grid gap-10 sm:gap-14">
      <div className="flex items-center gap-5">
        <Link to="/dashboard/users" className="w-6 h-6 rounded-full bg-black"></Link>
        <h1 className="text-3xl font-bold uppercase text-black">User page</h1>
      </div>
      <UpdateUserForm />
      <DeleteUserForm />
    </div>
  );
};

export default DashboardUserPage;