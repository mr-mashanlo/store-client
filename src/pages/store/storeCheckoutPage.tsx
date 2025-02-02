import { FC, useEffect } from 'react';
import { When } from 'react-if';
import { useActionData, useNavigate } from 'react-router-dom';

import { IOrderResponse } from '@/entities/order/types';
import { UpdateUserData } from '@/features/store/order/ui';
import { useCartStore } from '@/features/store/store';
import { PageHeader, ProductListWithQuantity } from '@/shared/widgets';

const StoreCheckoutPage: FC = () => {
  const navigate = useNavigate();
  const actionData = useActionData() as { success: boolean, data: IOrderResponse };
  const { setFrom, getTotalQuantity } = useCartStore();
  const { products, getTotalPrice } = useCartStore();

  useEffect( () => { setFrom( '' ); }, [ setFrom ] );

  useEffect( () => {
    if( !actionData ) {
      return;
    }
    if ( actionData.success ) {
      navigate( `/success/${actionData.data._id}` );
    }
  }, [ actionData, navigate ] );

  return (
    <>
      <PageHeader title="Checkout Page" />
      <section className="py-5 sm:py-14">
        <div className="container-block px-9">
          <div className="grid gap-20">
            <div>
              <h2 className="text-2xl font-bold uppercase">Products</h2>
              <ProductListWithQuantity products={products} className="mt-5" />
              <div className="mt-5 text-right">
                <p className="text-5xl sm:text-6xl font-bold">Total: {getTotalPrice()}$</p>
              </div>
            </div>
            <When condition={getTotalQuantity()}>
              <div>
                <h2 className="text-2xl font-bold uppercase">Address</h2>
                <UpdateUserData />
              </div>
            </When>
          </div>
        </div>
      </section>
    </>
  );
};

export default StoreCheckoutPage;