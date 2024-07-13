import { UserList } from '@/features/user/ui';
import { FC } from 'react';

const UsersPage: FC = () => {
  return (
    <div className="grid gap-14">
      <h1 className="text-3xl font-bold uppercase text-[#FFCCCC]">Users page</h1>
      <UserList />
    </div>
  );
};

export default UsersPage;