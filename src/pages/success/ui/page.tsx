import { FC } from 'react';

import { SucceessReceipt } from '@/widgets/success-receipt';

const SuccessPage: FC = () => {
  return (
    <main aria-labelledby="cart-heading">
      <h1 id="cart-heading" className="sr-only">Success</h1>
      <div className="min-h-screen p-5 flex items-center justify-center">
        <SucceessReceipt />
      </div>
    </main>
  );
};

export default SuccessPage;