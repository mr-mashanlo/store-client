import { FC } from 'react';
import { Form, useLoaderData, useNavigation } from 'react-router-dom';
import { Button, TextInput } from '@/shared/widgets';
import { IUser } from '@/entities/auth/types';
import { IAddress } from '@/entities/address/types';
import { useCartStore } from '../../store';

const UpdateUserData: FC = () => {
  const navigation = useNavigation();
  const loaderData = useLoaderData() as { success: boolean, data: { user: IUser, address: IAddress } };
  const { products } = useCartStore();

  return (
    <Form method="post" action="/checkout" className="mt-5 sm:mt-10">
      <div className="flex flex-col gap-7">
        <div className="grid sm:grid-cols-2 gap-7">
          <TextInput id="fullname" name="fullname" label="Full name" type="text" placeholder="John Doe" defaultValue={loaderData.data.user.fullname} required />
          <TextInput id="phone" name="phone" label="Phone" type="text" placeholder="+7 777 77 77 777" defaultValue={loaderData.data.user.phone} required />
        </div>
        <div className="grid sm:grid-cols-2 gap-7">
          <TextInput id="district" name="district" label="District" type="text" placeholder="Jambyl district" defaultValue={loaderData.data.address.district} required />
          <TextInput id="city" name="city" label="City" type="text" placeholder="Sortobe" defaultValue={loaderData.data.address.city} required />
        </div>
        <TextInput id="street" name="street" label="Street" type="text" placeholder="Dank #31" defaultValue={loaderData.data.address.street} required />
        <input id="products" name="products" type="text" value={JSON.stringify( products )} required readOnly hidden />
        <Button loading={navigation.state === 'submitting'} disabled={navigation.state === 'submitting'}>Buy</Button>
      </div>
    </Form>
  );
};

export default UpdateUserData;