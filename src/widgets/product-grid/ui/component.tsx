import { FC } from 'react';

import { ProductList, ProductsResponseType } from '@/entities/product';

interface Props {
  products: ProductsResponseType
}

const Component: FC<Props> = ( { products } ) => {
  return <ProductList products={products} />;
};

export default Component;