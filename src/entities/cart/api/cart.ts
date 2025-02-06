import { GeneralController } from '@/entities/shared';
import { authInstance } from '@/shared/api';

import { CartRequestType, CartResponseType } from '../model/schema';

class CartController extends GeneralController<CartResponseType> {

  getOne = async (): Promise<CartResponseType> => {
    const response = await authInstance( `${this.slug}/getone` );
    return await response.json();
  };

  pull = async ( id: string ): Promise<CartResponseType> => {
    const response = await authInstance( `${this.slug}/pull/${id}` );
    return await response.json();
  };

  push = async ( document: CartRequestType ): Promise<CartResponseType> => {
    const response = await authInstance( `${this.slug}/push`, { method: 'put', body: JSON.stringify( document ) } );
    return await response.json();
  };

}

const cartController = new CartController( 'cart' );

export default cartController;