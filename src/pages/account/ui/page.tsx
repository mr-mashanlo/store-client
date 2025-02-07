import { FC } from 'react';

import { OrderGrid } from '@/widgets/order-grid';
import { AddressForm } from '@/features/address-form';
import { UpdateUserForm } from '@/features/update-user-form';

const AccountPage: FC = () => {
  return (
    <main aria-labelledby="heading">
      <h1 id="heading" className="sr-only">Account</h1>
      <section className="min-h-screen grid grid-cols-2">
        <div className="h-full flex items-center justify-center"><UpdateUserForm /></div>
        <div className="h-full flex items-center justify-center"><AddressForm /></div>
      </section>
      <OrderGrid />
    </main>
  );
};

export default AccountPage;