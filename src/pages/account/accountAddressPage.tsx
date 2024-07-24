import { FC } from 'react';
import { Form, useLoaderData, useNavigation } from 'react-router-dom';
import TextInput from '@/shared/ui/textInput';
import Button from '@/shared/ui/button';
import { IAddress } from '@/entities/address/types';

const AccountAddressPage: FC = () => {
  const navigation = useNavigation();
  const loaderData = useLoaderData() as { success: boolean, data: IAddress};

  return (
    <div className="grid gap-14">
      <h1 className="text-3xl font-bold uppercase text-[#FFCCCC]">Address page</h1>
      <Form method="post" action="/account/address">
        <div className="flex flex-col gap-7">
          <div className="grid grid-cols-2 gap-7">
            <TextInput id="district" name="district" label="District" type="text" placeholder="Jambyl district" defaultValue={loaderData.data?.district} required />
            <TextInput id="city" name="city" label="City" type="text" placeholder="Sortobe" defaultValue={loaderData.data?.city} required />
          </div>
          <TextInput id="street" name="street" label="Street" type="text" placeholder="Dank #31" defaultValue={loaderData.data?.street} required />
          <Button loading={navigation.state === 'submitting'} disabled={navigation.state === 'submitting'}>Save</Button>
        </div>
      </Form>
    </div>
  );
};

export default AccountAddressPage;