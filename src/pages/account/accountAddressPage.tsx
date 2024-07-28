import { FC } from 'react';
import { Form, Link, useLoaderData, useNavigation } from 'react-router-dom';
import TextInput from '@/shared/ui/textInput';
import Button from '@/shared/ui/button';
import { IAddress } from '@/entities/address/types';

const AccountAddressPage: FC = () => {
  const navigation = useNavigation();
  const loaderData = useLoaderData() as { success: boolean, data: IAddress};

  return (
    <div className="grid gap-10 sm:gap-14">
      <div className="flex items-center gap-5">
        <Link to="/" className="w-6 h-6 rounded-full bg-[#505050] sm:hidden"></Link>
        <h1 className="text-3xl font-bold uppercase text-[#FFCCCC]">Address page</h1>
      </div>
      <Form method="post" action="/account/address">
        <div className="flex flex-col gap-7">
          <div className="grid sm:grid-cols-2 gap-7">
            <TextInput id="district" name="district" label="District" type="text" placeholder="Jambyl district" defaultValue={loaderData.data?.district} required />
            <TextInput id="city" name="city" label="City" type="text" placeholder="Sortobe" defaultValue={loaderData.data?.city} required />
          </div>
          <TextInput id="street" name="street" label="Street" type="text" placeholder="Dank #31" defaultValue={loaderData.data?.street} required />
          <Button loading={navigation.state === 'submitting'} disabled={navigation.state === 'submitting'}>Update</Button>
        </div>
      </Form>
    </div>
  );
};

export default AccountAddressPage;