import { FC } from 'react';
import { Form, Link } from 'react-router-dom';
import { Else, If, Then } from 'react-if';
import { PageHeader } from '@/app/layouts/header';
import { useCartStore } from '@/entities/cart/model';
import { useAuthStore } from '@/entities/auth/model';

const StoreCartPage: FC = () => {
  const { products, getTotalPrice } = useCartStore();
  const { auth } = useAuthStore();
  const { setFrom } = useCartStore();

  return (
    <>
      <PageHeader title="Cart Page" />
      <section className="py-5 sm:py-14">
        <div className="container-block container-block--normal">
          <If condition={products.length}>
            <Then>
              <ul>
                {products.map( product => (
                  <li key={product.product._id} className="p-3 flex gap-4 items-center justify-between odd:bg-[#363636]">
                    <span className="flex gap-3 items-center relative">
                      <If condition={product.product.images.length}>
                        <Then><img src={product.product.images[0] ? product.product.images[0].url : ''} alt="" className="w-10 h-10 object-cover" /></Then>
                        <Else><div className="w-10 h-10 bg-[#363636]"></div></Else>
                      </If>
                      <span className="line-clamp-1">{product.product.name}</span>
                      <Form method="delete" action={`/cart/remove/${product.product._id}`} navigate={false} className="ml-auto">
                        <button className="w-8 h-8 bg-red-400 text-white font-bold flex items-center justify-center rounded-full absolute top-0 left-0 -translate-x-4 -translate-y-4">×</button>
                      </Form>
                    </span>
                    <span>{product.quantity}</span>
                  </li>
                ) )}
              </ul>
              <div className="mt-10 sm:mt-20 text-right">
                <p className="text-5xl sm:text-6xl font-bold">Total: {getTotalPrice()}$</p>
                <If condition={auth}>
                  <Then>
                    <Link to="/checkout" className="inline-block min-w-48 mt-5 sm:mt-10 px-5 py-2 bg-white text-[#202020] text-center font-bold uppercase rounded-lg border-2 border-white">Next</Link>
                  </Then>
                  <Else>
                    <Link to="/signin" onClick={() => setFrom( '/cart' )} className="inline-block min-w-48 mt-5 sm:mt-10 px-5 py-2 bg-white text-[#202020] text-center font-bold uppercase rounded-lg border-2 border-white">Next</Link>
                  </Else>
                </If>
              </div>
            </Then>
          </If>
        </div>
      </section>
    </>
  );
};

export default StoreCartPage;