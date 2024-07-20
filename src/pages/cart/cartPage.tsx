import { FC } from 'react';
import { PageHeader } from '@/app/layouts/header/ui';
import { useCartStore } from '@/entities/cart/model';
import { Else, If, Then } from 'react-if';
import { Form, Link } from 'react-router-dom';

const CartPage: FC = () => {
  const { products, getTotalPrice } = useCartStore();

  return (
    <>
      <PageHeader title="Cart Page" />
      <section className="py-14">
        <div className="container-block container-block--normal">
          <ul>
            {products.map( product => (
              <li key={product.product._id} className="p-3 grid grid-cols-6 gap-4 items-center even:bg-[#363636]">
                <If condition={product.product.images.length}>
                  <Then><img src={product.product.images[0]} alt="" className="w-10 h-10 object-cover" /></Then>
                  <Else><div className="w-10 h-10 bg-[#363636]"></div></Else>
                </If>
                <span className="col-span-2 line-clamp-1">{product.product.name}</span>
                <span>{product.product.price} $</span>
                <span>{product.quantity}</span>
                <Form method="delete" action={`/cart/remove/${product.product._id}`} navigate={false} className="ml-auto">
                  <button type="submit" className="px-4 py-2 bg-white text-[#202020] text-sm leading-normal border-2 border-solid">Delete product</button>
                </Form>
              </li>
            ) )}
          </ul>
          <p className="mt-10 text-6xl font-bold text-right">Total: {getTotalPrice()} $</p>
          <Link to="/checkout" className="inline-block mt-10">Next</Link>
        </div>
      </section>
    </>
  );
};

export default CartPage;