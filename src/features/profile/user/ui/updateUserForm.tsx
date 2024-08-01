import { FC } from 'react';
import { Form, useLoaderData, useNavigation } from 'react-router-dom';
import { Button, TextInput } from '@/shared/widgets';
import { IUser } from '@/entities/auth/types';

const UpdateUserForm: FC = () => {
  const navigation = useNavigation();
  const loaderData = useLoaderData() as { success: boolean, data: IUser };

  return (
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
  );
};

export default UpdateUserForm;