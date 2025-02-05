import { FC, ReactNode } from 'react';

import { CartType } from '@/entities/cart';

interface RowProps {
  id: string,
  name: string,
  price: number,
  discount: number,
  quantity: number,
  increase?: ( id: string ) => ReactNode,
  decrease?: ( id: string ) => ReactNode
}

const ReceiptRow: FC<RowProps> = ( { id, name, price, discount, quantity, increase, decrease } ) => {
  return (
    <article itemScope itemType="https://schema.org/Product" className="grid grid-cols-5 gap-2">
      <h3 itemProp="name" id="product-heading" className="col-span-3 line-clamp-1">{name}</h3>
      <p itemProp="offers" itemScope itemType="https://schema.org/Offer" className="ml-auto">
        <span itemProp="priceCurrency" content="USD">$</span>
        <span itemProp="price" content="10.00">{price - price * discount / 100}</span>
      </p>
      {
        increase && decrease
          ?
          <div className="ml-auto flex items-center justify-center gap-2">
            {decrease( id )}
            <p className="w-3 text-center">{quantity}</p>
            {increase( id )}
          </div>
          :
          <p className="ml-auto">{quantity}</p>
      }
    </article>
  );
};

interface ListProps {
  products: Array<CartType>,
  increase?: ( id: string ) => ReactNode,
  decrease?: ( id: string ) => ReactNode
}

const ReceiptList: FC<ListProps> = ( { products, increase, decrease } ) => {
  return products.map( product => {
    const { _id, name, price, discount } = product.product;
    const { quantity } = product;
    return <ReceiptRow key={_id} id={_id} name={name} price={price} discount={discount || 0} quantity={quantity} increase={increase} decrease={decrease} />;
  } );
};

export default ReceiptList;