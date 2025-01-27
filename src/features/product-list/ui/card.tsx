import { FC } from 'react';
import { Link } from 'react-router-dom';

import { ProductResponseType } from '@/entities/product';

interface Props {
  product: ProductResponseType
}

const Card: FC<Props> = ( { product } ) => {
  const { _id, name, price, discount, images } = product;
  return (
    <article itemScope itemType="https://schema.org/Product" className="text-xs col-span-3 nth-[7n+1]:col-span-4 nth-[7n+2]:col-span-4 nth-[7n+3]:col-span-4">
      <meta itemProp="availability" content="https://schema.org/InStock" />
      <img itemProp="image" className="w-full aspect-[6/7] bg-zinc-200" src={images[0]} alt={name} />
      <h2 itemProp="name" className="mt-1 font-medium"><Link to={_id}>{name}</Link></h2>
      <p itemProp="offers" itemScope itemType="https://schema.org/Offer" className="mt-1 font-medium">
        <span itemProp="priceCurrency" content="USD">$</span>
        <span itemProp="price">{discount ? price * discount / 100 : price}</span>
      </p>
    </article>
  );
};

export default Card;