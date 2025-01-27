import { FC } from 'react';

import { ProductsResponseType } from '@/entities/product';

import Card from './card';

interface Props {
  products: ProductsResponseType
}

const List: FC<Props> = ( { products } ) => {
  return (
    <div role="list" className="grid sm:grid-cols-12 gap-8">
      {products.map( product => <Card key={product._id} product={product} /> )}
    </div>
  );
};

export default List;