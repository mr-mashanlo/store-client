import { FC, useState } from 'react';
import { useFetcher } from 'react-router-dom';
import { IUser } from '@/entities/auth/types';
import Button from '@/shared/ui/button';

interface Props {
  users: Array<IUser>
}

const UserList: FC<Props> = ( { users } ) => {
  const updateFetcher = useFetcher();
  const deleteFetcher = useFetcher();
  const [ activeButton, setActiveButton ] = useState<string>( '' );

  return (
    <ul className="overflow-auto">
      {users.map( user => (
        <li key={user._id} className="w-[50rem] sm:w-auto p-3 grid grid-cols-3 gap-4 items-center odd:bg-[#363636]">
          <span>{user.email}</span>
          <updateFetcher.Form method="put" action={`/dashboard/users/update/${user._id}`} className="ml-auto flex items-center">
            <select name="role" id="role" defaultValue={user.role} className="px-4 py-2 bg-transparent border-2 border-solid text-sm leading-normal appearance-none">
              <option value="ADMIN" className="text-[#202020]">Admin</option>
              <option value="USER" className="text-[#202020]">User</option>
            </select>
            <Button onClick={() => setActiveButton( user._id )} size="sm" loading={activeButton === user._id && updateFetcher.state === 'submitting'} disabled={activeButton === user._id && updateFetcher.state === 'submitting'} className="leading-normal">Save</Button>
          </updateFetcher.Form>
          <deleteFetcher.Form method="delete" action={`/dashboard/users/delete/${user._id}`} className="ml-auto">
            <Button onClick={() => setActiveButton( user._id )} size="sm" loading={activeButton === user._id && deleteFetcher.state === 'submitting'} disabled={activeButton === user._id && deleteFetcher.state === 'submitting'}>Delete</Button>
          </deleteFetcher.Form>
        </li>
      ) )}
    </ul>
  );
};

export default UserList;