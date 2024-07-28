import { FC } from 'react';
import { Form, Link, useFetcher, useLoaderData, useNavigation } from 'react-router-dom';
import TextInput from '@/shared/ui/textInput';
import Button from '@/shared/ui/button';
import { IUser } from '@/entities/auth/types';

const AccountProfilePage: FC = () => {
  const navigation = useNavigation();
  const logoutFetcher = useFetcher();
  const loaderData = useLoaderData() as { success: boolean, data: IUser };

  return (
    <div className="grid gap-10 sm:gap-14">
      <div className="flex items-center gap-5">
        <Link to="/" className="w-6 h-6 rounded-full bg-[#505050] sm:hidden"></Link>
        <h1 className="text-3xl font-bold uppercase text-[#FFCCCC]">Profile page</h1>
      </div>
      <Form method="post" action="/account/me">
        <div className="flex flex-col gap-7">
          <div className="grid sm:grid-cols-2 gap-7">
            <TextInput id="fullname" name="fullname" label="Full name" type="text" placeholder="John Doe" defaultValue={loaderData.data.fullname} required />
            <TextInput id="phone" name="phone" label="Phone" type="text" placeholder="+7 777 77 77 777" defaultValue={loaderData.data.phone} required />
            <TextInput id="email" name="email" label="Email" type="text" defaultValue={loaderData.data.email} readOnly />
            <TextInput id="role" name="role" label="Role" type="text" defaultValue={loaderData.data.role} readOnly />
          </div>
          <Button loading={navigation.state === 'submitting'} disabled={navigation.state === 'submitting'}>Update</Button>
        </div>
      </Form>
      <logoutFetcher.Form method="post" action="/account/logout">
        <Button className="w-full" loading={logoutFetcher.state === 'submitting'} disabled={logoutFetcher.state === 'submitting'}>Log out</Button>
      </logoutFetcher.Form>
    </div>
  );
};

export default AccountProfilePage;