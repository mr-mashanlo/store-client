import { FC } from 'react';

import { ProductsResponseType } from '../model/schema';
import ProductCard from './card';

interface Props {
  products: ProductsResponseType
}

const ProductList: FC<Props> = ( { products } ) => {
  return (
    <div role="list" className="grid sm:grid-cols-3 gap-2">
      {products.map( product => <ProductCard key={product._id} id={product._id} name={product.name} price={product.price} discount={product.discount} images={product.images} /> )}
    </div>
  );
};

export default ProductList;