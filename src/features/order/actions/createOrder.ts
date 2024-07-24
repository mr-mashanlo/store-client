import { ActionFunctionArgs } from 'react-router-dom';
import { IProductResponse } from '@/entities/product/types';
import { addressService } from '@/features/address/service';
import { userService } from '@/features/user/service';
import { orderService } from '../service';

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
    const product: Array<{ product: IProductResponse, quantity: number }> = JSON.parse( products );
    const updatedProducts = product.map( item => ( { product: item.product._id || '', quantity: Number( item.quantity ) } ) );
    const order = { products: updatedProducts };

    const promises = Promise.allSettled( [ addressService.create( district, city, street ), userService.update( { fullname, phone } ), orderService.create( order ) ] );
    const responses = await promises;
    const isFulfilledResponses = responses.every( item => item.status === 'fulfilled' );

    if ( !isFulfilledResponses ) {
      return { success: false };
    }

    // @ts-expect-error value
    return { success: true, data: responses[2].value };
  } catch ( error ) {
    return { success: false, error };
  }
};

export default createOrder;