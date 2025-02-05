import { GeneralController } from '@/entities/shared';
import { authInstance } from '@/shared/api';

import { CheckoutResponseType } from '../model/schema';

class CheckoutController extends GeneralController<CheckoutResponseType> {

  create = async (): Promise<CheckoutResponseType> => {
    const response = await authInstance( `${this.slug}/create` );
    return await response.json();
  };

}

const checkoutController = new CheckoutController( 'checkout' );

export default checkoutController;