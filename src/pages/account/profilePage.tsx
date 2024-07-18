import { FC } from 'react';
import { Form, useLoaderData } from 'react-router-dom';
import TextInput from '@/shared/ui/textInput';
import Button from '@/shared/ui/button';
import { IUser } from '@/entities/auth/types';

const ProfilePage: FC = () => {
  const loaderData = useLoaderData() as { success: boolean, data: IUser };

  return (
    <div className="grid gap-14">
      <h1 className="text-3xl font-bold uppercase text-[#FFCCCC]">Profile page</h1>
      <Form method="post" action="/account/me">
        <div className="flex flex-col gap-7">
          <div className="grid grid-cols-2 gap-7">
            <TextInput id="fullname" name="fullname" label="Full name" type="text" placeholder="John Doe" defaultValue={loaderData.data.fullname} required />
            <TextInput id="phone" name="phone" label="Phone" type="text" placeholder="+7 777 77 77 777" defaultValue={loaderData.data.phone} required />
            <TextInput id="email" name="email" label="Email" type="text" defaultValue={loaderData.data.email} readOnly />
            <TextInput id="role" name="role" label="Role" type="text" defaultValue={loaderData.data.role} readOnly />
          </div>
          <Button>Save</Button>
        </div>
      </Form>
      <Form method="post" action="/account/logout">
        <Button className="w-full">Log out</Button>
      </Form>
    </div>
  );
};

export default ProfilePage;