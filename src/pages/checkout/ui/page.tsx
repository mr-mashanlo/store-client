import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { CheckoutReceipt } from '@/widgets/checkout-receipt';
import { UpdateAddressForm } from '@/features/update-address-form';

const CheckoutPage: FC = () => {
  const navigate = useNavigate();
  return (
    <main aria-labelledby="heading" className="min-h-screen grid grid-cols-2">
      <h1 id="heading" className="sr-only">Cart</h1>
      <button onClick={() => navigate( -1 )} className="absolute top-6 left-10 cursor-pointer">Back</button>
      <div className="p-2 flex items-center justify-center"><UpdateAddressForm /></div>
      <div className="p-2 flex items-center justify-center bg-zinc-200/30"><CheckoutReceipt /></div>
    </main>
  );
};

export default CheckoutPage;