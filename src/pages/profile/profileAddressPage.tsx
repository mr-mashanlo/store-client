import { FC } from 'react';
import { Link } from 'react-router-dom';
import { UpdateAddressForm } from '@/features/profile/address/ui';

const ProfileAddressPage: FC = () => {
  return (
    <div className="grid gap-10 sm:gap-14">
      <div className="flex items-center gap-5">
        <Link to="/" className="w-6 h-6 rounded-full bg-black"></Link>
        <h1 className="text-3xl font-bold uppercase text-black">Address page</h1>
      </div>
      <UpdateAddressForm />
    </div>
  );
};

export default ProfileAddressPage;