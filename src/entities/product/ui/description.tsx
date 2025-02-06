import { FC, ReactNode } from 'react';

interface Props {
  id: string,
  name: string,
  price: number,
  discount?: number,
  description: string,
  increase: ( id: string ) => ReactNode
}

const ProductDescription: FC<Props> = ( { id, name, price, discount = 0, description, increase } ) => {
  return (
    <div className="grid gap-5">
      <h1 itemProp="name" id="heading" className="font-bold">{name}</h1>
      <p itemProp="offers" itemScope itemType="https://schema.org/Offer">
        <span itemProp="priceCurrency" content="USD">$</span>
        <span itemProp="price" content="10.00">{price - price * discount / 100}</span>
      </p>
      {increase( id )}
      <p itemProp="description">{description}</p>
    </div>
  );
};

export default ProductDescription;