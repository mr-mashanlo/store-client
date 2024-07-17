import { FC } from 'react';
import { Form } from 'react-router-dom';
import TextInput from '@/shared/ui/textInput';
import Button from '@/shared/ui/button';

const ProfilePage: FC = () => {
  return (
    <div className="grid gap-14">
      <h1 className="text-3xl font-bold uppercase text-[#FFCCCC]">Profile page</h1>
      <Form method="post" action="/account/me">
        <div className="flex flex-col gap-7">
          <div className="grid grid-cols-2 gap-7">
            <TextInput id="fullname" name="fullname" label="Full name" type="text" placeholder="John Doe" required />
            <TextInput id="phone" name="phone" label="Phone" type="text" placeholder="+7 777 77 77 777" required />
          </div>
          <Button>Save</Button>
        </div>
      </Form>
    </div>
  );
};

export default ProfilePage;