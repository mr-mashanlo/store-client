import { FC } from 'react';

import { AddToCartButton } from '@/features/add-to-cart';
import { ProductResponseType } from '@/entities/product';

interface Props {
  product: ProductResponseType
}

const Item: FC<Props> = ( { product } ) => {
  const { _id, name, price, discount, description, images } = product;
  return (
    <article itemScope itemType="https://schema.org/Product" className="grid grid-cols-3 gap-8">
      <div className="grid grid-cols-2 gap-2 col-span-2">
        {images?.map( ( image, index ) => <img itemProp="image" key={image} src={image} alt={`${name} - view ${index}`} className="w-full aspect-[6/7] bg-zinc-200" /> )}
      </div>
      <div className="py-30 pr-8 relative">
        <div className="sticky top-30">
          <h1 itemProp="name" id="product-heading" className="font-bold">{name}</h1>
          <p itemProp="offers" itemScope itemType="https://schema.org/Offer" className="mt-5">
            <span itemProp="priceCurrency" content="USD">$</span>
            <span itemProp="price" content="10.00">{discount ? price * discount / 100 : price}</span>
          </p>
          <AddToCartButton id={_id} className="mt-5">Add to cart</AddToCartButton>
          <p itemProp="description" className="mt-5">{description}</p>
        </div>
      </div>
    </article>
  );
};

export default Item;