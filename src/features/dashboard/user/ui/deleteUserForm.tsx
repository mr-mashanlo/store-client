import { FC } from 'react';
import { Form, useLoaderData } from 'react-router-dom';
import { Button } from '@/shared/widgets';
import { IUser } from '@/entities/auth/types';
import { IAddress } from '@/entities/address/types';

const DeleteUserForm: FC = () => {
  const loaderData = useLoaderData() as { success: boolean, data: { user: IUser, address: IAddress } };

  return (
    <Form method="delete" action={`/dashboard/users/${loaderData.data.user._id}/delete`}>
      <Button className="w-full">Delete</Button>
    </Form>
  );
};

export default DeleteUserForm;