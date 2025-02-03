import { FC } from 'react';

import { CartList } from '@/features/cart-list';

const CartPage: FC = () => {
  return (
    <main aria-labelledby="cart-heading" className="font-[Sofia_Sans_Condensed] uppercase text-base">
      <h1 id="cart-heading" className="sr-only">Cart</h1>
      <div className="w-screen h-screen flex items-center justify-center">
        <CartList />
      </div>
    </main>
  );
};

export default CartPage;