import { FC, useState } from 'react';
import { Else, If, Then } from 'react-if';
import { useQuery } from 'react-query';

import { cartController, CartResponseType, validateCartResponseData } from '@/entities/cart';

import List from './list';
import Skeleton from './skeleton';

const CartList: FC = () => {
  const [ cart, setCart ] = useState<CartResponseType>( {
    _id: '',
    products: []
  } );

  useQuery( {
    queryKey: [ 'cart' ],
    queryFn: () => cartController.getOne(),
    onSuccess: data => validateResponseData( data )
  } );

  function validateResponseData( data: unknown ) {
    try {
      const result = validateCartResponseData( data );
      setCart( result );
    } catch ( error ) {
      console.log( error );
    }
  }

  return (
    <If condition={cart._id}>
      <Then><List products={cart.products} /></Then>
      <Else><Skeleton /></Else>
    </If>
  );
};

export default CartList;