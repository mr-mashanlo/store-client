import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { OrderGrid } from '@/widgets/order-grid';
import { UpdateAddressForm } from '@/features/update-address-form';
import { UpdateUserForm } from '@/features/update-user-form';

const AccountPage: FC = () => {
  const navigate = useNavigate();
  return (
    <main aria-labelledby="heading">
      <h1 id="heading" className="sr-only">Account</h1>
      <button onClick={() => navigate( -1 )} className="absolute top-6 left-10 cursor-pointer">Back</button>
      <section className="min-h-screen grid grid-cols-2">
        <div className="h-full flex items-center justify-center"><UpdateUserForm /></div>
        <div className="h-full flex items-center justify-center"><UpdateAddressForm /></div>
      </section>
      <OrderGrid />
    </main>
  );
};

export default AccountPage;