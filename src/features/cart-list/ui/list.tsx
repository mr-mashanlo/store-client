import { FC } from 'react';

import { CartType } from '@/entities/cart';
import { calculatePrice } from '@/shared/helpers';

import Card from './card';

interface Props {
  products: Array<CartType>
}

const List: FC<Props> = ( { products } ) => {


  function calculateTotalPrice() {
    return products.reduce( ( acc, product ) => { acc += calculatePrice( product.product.price, product.product.discount ) * product.quantity; return acc; }, 0 );
  }

  function calculateTotalQuantity() {
    return products.reduce( ( acc, product ) => { acc += product.quantity; return acc; }, 0 );
  }

  return (
    <div className="w-100 bg-white shadow-xl shadow-zinc-300 relative">
      <div className="h-3 absolute bottom-full left-0 right-0 ticket-t"></div>

      <div role="list" className="p-6">
        <h2 className="text-center font-bold">Store name</h2>
        <p className="text-center text-zinc-500">Address, street location</p>
        <div className="h-1 my-4 ticket-d"></div>

        {products.map( product => <Card key={product.product._id} product={product} /> )}

        <div className="grid grid-cols-5 gap-2 font-bold">
          <p className="col-span-3 line-clamp-1">Total</p>
          <p className="ml-auto">{calculateTotalPrice()}</p>
          <p className="ml-auto">{calculateTotalQuantity()}</p>
        </div>
        <div className="h-1 my-4 ticket-d"></div>
      </div>

      <button className="w-full pt-4 pb-3 bg-zinc-100 uppercase font-bold cursor-pointer">Checkout</button>
      <div className="h-3 absolute top-full left-0 right-0 ticket-b"></div>
    </div>
  );
};

export default List;