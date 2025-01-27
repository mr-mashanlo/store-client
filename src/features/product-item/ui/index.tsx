import { FC, useState } from 'react';
import { Else, If, Then } from 'react-if';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

import { productController, ProductResponseType, validateProductResponseData } from '@/entities/product';

import Item from './item';
import Skeleton from './skeleton';

const ProductItem: FC = () => {
  const { id } = useParams();
  const [ product, setProduct ] = useState<ProductResponseType>( {
    _id: '',
    images: [],
    name: '',
    price: 0,
    discount: 0,
    description: '',
    categories: []
  } );

  useQuery( {
    queryKey: [ 'product' ],
    queryFn: () => productController.getOne( id || '' ),
    onSuccess: data => validateResponseData( data )
  } );

  function validateResponseData( data: unknown ) {
    try {
      const result = validateProductResponseData( data );
      setProduct( result );
    } catch ( error ) {
      console.log( error );
    }
  }

  return (
    <If condition={product._id.length}>
      <Then><Item product={product} /></Then>
      <Else><Skeleton /></Else>
    </If>
  );
};

export default ProductItem;