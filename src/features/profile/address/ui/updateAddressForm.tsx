import { FC } from 'react';
import { Form, useLoaderData, useNavigation } from 'react-router-dom';

import { IAddress } from '@/entities/address/types';
import { Button, TextInput } from '@/shared/widgets';

const UpdateAddressForm: FC = () => {
  const navigation = useNavigation();
  const loaderData = useLoaderData() as { success: boolean, data: IAddress};

  return (
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
  );
};

export default UpdateAddressForm;