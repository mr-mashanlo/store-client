import { ActionFunctionArgs } from 'react-router-dom';
import { addressService, orderService, userService } from '@/shared/services';
import { IProductResponse } from '@/entities/product/types';

const createOrder = async ( { request }: ActionFunctionArgs ) => {
  const formData = await request.formData();
  const products = formData.get( 'products' ) as string;

  const district = formData.get( 'district' ) as string;
  const city = formData.get( 'city' ) as string;
  const street = formData.get( 'street' ) as string;

  const fullname = formData.get( 'fullname' ) as string;
  const phone = formData.get( 'phone' ) as string;

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