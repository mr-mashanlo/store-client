import { FC } from 'react';
import { Form } from 'react-router-dom';
import TextInput from '@/shared/ui/textInput';
import Button from '@/shared/ui/button';

const AddressPage: FC = () => {
  return (
    <div className="grid gap-14">
      <h1 className="text-3xl font-bold uppercase text-[#FFCCCC]">Address page</h1>
      <Form method="post" action="/account/address">
        <div className="flex flex-col gap-7">
          <div className="grid grid-cols-2 gap-7">
            <TextInput id="district" name="district" label="District" type="text" placeholder="Jambyl district" required />
            <TextInput id="city" name="city" label="City" type="text" placeholder="Sortobe" required />
          </div>
          <TextInput id="street" name="street" label="Street" type="text" placeholder="Dank #31" required />
          <Button>Save</Button>
        </div>
      </Form>
    </div>
  );
};

export default AddressPage;