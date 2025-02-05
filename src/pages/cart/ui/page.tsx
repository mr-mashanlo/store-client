import { FC } from 'react';

import { CartReceipt } from '@/widgets/cart-receipt';

const CartPage: FC = () => {
  return (
    <main aria-labelledby="cart-heading">
      <h1 id="cart-heading" className="sr-only">Cart</h1>
      <div className="w-screen h-screen flex items-center justify-center">
        <CartReceipt />
      </div>
    </main>
  );
};

export default CartPage;