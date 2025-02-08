import { FC } from 'react';

import { CheckoutReceipt } from '@/widgets/checkout-receipt';
import { AddressForm } from '@/features/address-form';

const CheckoutPage: FC = () => {
  return (
    <main aria-labelledby="heading" className="min-h-screen grid grid-cols-2">
      <h1 id="heading" className="sr-only">Cart</h1>
      <div className="p-2 flex items-center justify-center"><AddressForm /></div>
      <div className="p-2 flex items-center justify-center bg-zinc-200/30"><CheckoutReceipt /></div>
    </main>
  );
};

export default CheckoutPage;