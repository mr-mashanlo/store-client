import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartReceipt } from '@/widgets/cart-receipt';

const CartPage: FC = () => {
  const navigate = useNavigate();
  return (
    <main aria-labelledby="heading">
      <h1 id="heading" className="sr-only">Cart</h1>
      <button onClick={() => navigate( -1 )} className="absolute top-6 left-10 cursor-pointer">Back</button>
      <div className="w-screen h-screen flex items-center justify-center">
        <CartReceipt />
      </div>
    </main>
  );
};

export default CartPage;