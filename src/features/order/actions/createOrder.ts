import { ActionFunctionArgs, redirect } from 'react-router-dom';
import { IProduct } from '@/entities/product/types';
import { addressService } from '@/features/address/service';
import { userService } from '@/features/user/service';
import { orderService } from '../service';
import { useCartStore } from '@/entities/cart/model';

const createOrder = async ( { request }: ActionFunctionArgs ) => {
  const formData = await request.formData();
  const products = formData.get( 'products' );

  const district = formData.get( 'district' );
  const city = formData.get( 'city' );
  const street = formData.get( 'street' );

  const fullname = formData.get( 'fullname' );
  const phone = formData.get( 'phone' );

  if ( typeof products !== 'string' || typeof district !== 'string' || typeof city !== 'string' || typeof street !== 'string' || typeof fullname !== 'string' || typeof phone !== 'string' ) {
    return { success: false };
  }

  try {
    const product: Array<{ product: IProduct, quantity: number }> = JSON.parse( products );
    const updatedProducts = product.map( item => ( { product: item.product._id || '', quantity: item.quantity } ) );
    const order = { products: updatedProducts };

    const promises = Promise.allSettled( [
      addressService.create( district, city, street ),
      userService.update( { fullname, phone } ),
      orderService.create( order )
    ] );
    const responses = await promises;
    const isFulfilledResponses = responses.every( item => item.status === 'fulfilled' );

    if ( !isFulfilledResponses ) {
      return { success: false };
    }

    useCartStore.getState().resetCart();

    // @ts-expect-error value
    return redirect( `/order/${responses[2].value._id}` );
  } catch ( error ) {
    return { success: false, error };
  }
};

export default createOrder;