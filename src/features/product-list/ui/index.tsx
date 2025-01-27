import { FC, useState } from 'react';
import { Else, If, Then } from 'react-if';
import { useQuery } from 'react-query';

import { productController, ProductsResponseType, validateProductsResponseData } from '@/entities/product';

import List from './list';
import Skeleton from './skeleton';

const ProductList: FC = () => {
  const [ products, setProducts ] = useState<ProductsResponseType>( [] );

  useQuery( {
    queryKey: [ 'products' ],
    queryFn: () => productController.getMany( {} ),
    onSuccess: data => validateResponseData( data )
  } );

  function validateResponseData( data: unknown ) {
    try {
      const result = validateProductsResponseData( data );
      setProducts( result );
    } catch ( error ) {
      console.log( error );
    }
  }

  return (
    <If condition={products.length}>
      <Then><List products={products} /></Then>
      <Else><Skeleton /></Else>
    </If>
  );
};

export default ProductList;