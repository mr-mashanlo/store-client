import { FC } from 'react';

import { AddToCartButton } from '@/features/add-to-cart';
import { RemoveFromCartButton } from '@/features/remove-from-cart';
import { CartType } from '@/entities/cart';
import { calculatePrice } from '@/shared/helpers';

interface Props {
  product: CartType
}

const Card: FC<Props> = ( { product } ) => {
  const { product: { _id, name, price, discount }, quantity } = product;
  return (
    <article itemScope itemType="https://schema.org/Product" className="grid grid-cols-5 gap-2">
      <h3 itemProp="name" id="product-heading" className="col-span-3 line-clamp-1">{name}</h3>
      <p itemProp="offers" itemScope itemType="https://schema.org/Offer" className="ml-auto">
        <span itemProp="priceCurrency" content="USD">$</span>
        <span itemProp="price" content="10.00">{calculatePrice( price, discount )}</span>
      </p>
      <div className="ml-auto flex items-center justify-center gap-2">
        <RemoveFromCartButton id={_id} className="w-2 h-2 mb-px bg-zinc-300 flex items-center justify-center cursor-pointer"></RemoveFromCartButton>
        <p className="w-3 text-center">{quantity}</p>
        <AddToCartButton id={_id} className="w-2 h-2 mb-px bg-zinc-700 flex items-center justify-center cursor-pointer"></AddToCartButton>
      </div>
    </article>
  );
};

export default Card;