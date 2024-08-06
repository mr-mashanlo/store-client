import { FC } from 'react';
import { Form, useLoaderData, useNavigation } from 'react-router-dom';
import { Button, TextInput } from '@/shared/widgets';
import { IAddress } from '@/entities/address/types';
import { IUser } from '@/entities/auth/types';

const UpdateUserForm: FC = () => {
  const navigation = useNavigation();
  const loaderData = useLoaderData() as { success: boolean, data: { user: IUser, address: IAddress } };

  return (
    <Form method="post" action={`/dashboard/users/${loaderData.data.user._id}`}>
      <div className="flex flex-col gap-7">
        <div className="grid sm:grid-cols-2 gap-7">
          <TextInput id="fullname" name="fullname" label="Full name" type="text" placeholder="John Doe" defaultValue={loaderData.data.user.fullname} required />
          <TextInput id="phone" name="phone" label="Phone" type="text" placeholder="+7 777 77 77 777" defaultValue={loaderData.data.user.phone} required />
          <TextInput id="email" name="email" label="Email" type="text" placeholder="name@company.com" defaultValue={loaderData.data.user.email} required />
          <div className="relative">
            <label htmlFor="role" className="px-2 text-sm font-medium absolute -top-[0.55rem] left-5 bg-white">Role</label>
            <select name="role" id="role" defaultValue={loaderData.data.user.role} className="w-full px-3 py-3 bg-transparent border border-gray-300 outline-none focus:border-black placeholder:text-[#909090] appearance-none">
              <option value="USER" className="text-[#202020]">User</option>
              <option value="ADMIN" className="text-[#202020]">Admin</option>
            </select>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-7">
          <TextInput id="district" name="district" label="District" type="text" placeholder="Jambyl district" defaultValue={loaderData.data.address.district} required />
          <TextInput id="city" name="city" label="City" type="text" placeholder="Sortobe" defaultValue={loaderData.data.address.city} required />
        </div>
        <TextInput id="street" name="street" label="Street" type="text" placeholder="Dank #31" defaultValue={loaderData.data.address.street} required />
        <Button loading={navigation.state === 'submitting'} disabled={navigation.state === 'submitting'}>Update</Button>
      </div>
    </Form>
  );
};

export default UpdateUserForm;