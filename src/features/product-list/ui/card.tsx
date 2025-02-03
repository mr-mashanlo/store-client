import { FC } from 'react';
import { Link } from 'react-router-dom';

import { ProductResponseType } from '@/entities/product';
import { calculatePrice } from '@/shared/helpers';

interface Props {
  product: ProductResponseType
}

const Card: FC<Props> = ( { product } ) => {
  const { _id, name, price, discount, images } = product;
  return (
    <article itemScope itemType="https://schema.org/Product" className="text-xs">
      <Link to={_id}>
        <img itemProp="image" className="w-full aspect-[6/7] bg-zinc-200" src={images?.[0]} alt={name} />
      </Link>
      <meta itemProp="name" content={name} />
      <meta itemProp="priceCurrency" content="USD" />
      <meta itemProp="price" content={String( calculatePrice( price, discount ) )} />
      <meta itemProp="availability" content="https://schema.org/InStock" />
    </article>
  );
};

export default Card;