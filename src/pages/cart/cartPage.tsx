import { FC } from 'react';
import { MainHeader } from '@/app/layouts/header/ui';

const CartPage: FC = () => {
  return (
    <>
      <MainHeader />
      <section className="py-14">
        <div className="container-block container-block--normal">
          Cart Page
        </div>
      </section>
    </>
  );
};

export default CartPage;