import { FC } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  id: string,
  name: string,
  price: number,
  discount?: number,
  images?: Array<string>
}

const ProductCard: FC<Props> = ( { id, name, price, discount = 0, images } ) => {
  return (
    <article itemScope itemType="https://schema.org/Product" className="text-xs">
      <Link to={id}>
        <img itemProp="image" className="w-full aspect-[6/7] bg-zinc-200" src={images?.[0]} alt={name} />
      </Link>
      <meta itemProp="name" content={name} />
      <meta itemProp="priceCurrency" content="USD" />
      <meta itemProp="price" content={String( price - price * discount / 100 )} />
      <meta itemProp="availability" content="https://schema.org/InStock" />
    </article>
  );
};

export default ProductCard;