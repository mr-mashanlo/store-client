import { FC } from 'react';
import { Link } from 'react-router-dom';
import { IUser } from '@/entities/auth/types';

interface Props {
  users: Array<IUser>
}

const UserList: FC<Props> = ( { users } ) => {
  return (
    <ul className="overflow-auto">
      {users.map( user => (
        <li key={user._id} className="p-3 odd:bg-[#363636] flex justify-between gap-4">
          <Link to={`/dashboard/users/${user._id}`} className="hover:text-white hover:underline">{user.email}</Link>
          <span>{user.role}</span>
        </li>
      ) )}
    </ul>
  );
};

export default UserList;