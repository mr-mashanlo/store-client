import { FC } from 'react';
import { Form, useLoaderData } from 'react-router-dom';
import { IUser } from '@/entities/auth/types';

const UserList: FC = () => {
  const users = useLoaderData() as { success: boolean, data: Array<IUser> };

  return (
    <ul className="">
      {users.data.map( user => (
        <li key={user._id} className="p-3 grid grid-cols-4 gap-4 items-center even:bg-[#363636]">
          <span>{user._id}</span>
          <span>{user.email}</span>
          <Form method="put" navigate={false} action={`/dashboard/users/update/${user._id}`} className="ml-auto flex items-center">
            <select name="role" id="role" defaultValue={user.role} className="px-4 py-2 bg-transparent border-2 border-solid text-sm leading-normal appearance-none">
              <option value="ADMIN">ADMIN</option>
              <option value="USER">USER</option>
            </select>
            <button type="submit" className="px-4 py-2 bg-white text-[#202020] text-sm leading-normal border-2 border-solid">Save</button>
          </Form>
          <Form method="delete" navigate={false} action={`/dashboard/users/delete/${user._id}`} className="ml-auto">
            <button type="submit" className="px-4 py-2 bg-white text-[#202020] text-sm leading-normal border-2 border-solid">Delete account</button>
          </Form>
        </li>
      ) )}
    </ul>
  );
};

export default UserList;