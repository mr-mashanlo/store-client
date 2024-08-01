import { FC } from 'react';
import { Link } from 'react-router-dom';
import { When } from 'react-if';
import { PageHeader } from '@/shared/layouts/header';
import { useCartStore } from '@/features/store/store';
import { useAuthStore } from '@/features/auth/store';
import { ProductListWithQuantity } from '@/shared/widgets';

const StoreCartPage: FC = () => {
  const { products, getTotalPrice } = useCartStore();
  const { auth } = useAuthStore();
  const { setFrom } = useCartStore();

  return (
    <>
      <PageHeader title="Cart Page" />
      <section className="py-5 sm:py-14">
        <div className="container-block container-block--normal">
          <When condition={products.length}>
            <ProductListWithQuantity products={products} />
            <div className="mt-10 sm:mt-20 text-right">
              <p className="text-5xl sm:text-6xl font-bold">Total: {getTotalPrice()}$</p>
              <Link to={auth ? '/checkout' : '/signin'} onClick={auth ? () => setFrom( '/cart' ) : () => {}} className="inline-block min-w-48 mt-5 sm:mt-10 px-5 py-2 bg-white text-[#202020] text-center font-bold uppercase rounded-lg border-2 border-white">Next</Link>
            </div>
          </When>
        </div>
      </section>
    </>
  );
};

export default StoreCartPage;