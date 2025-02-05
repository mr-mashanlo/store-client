import { GeneralController } from '@/entities/shared';

import { AddressResponseType } from '../model/schema';

class AddressController extends GeneralController<AddressResponseType> {}

const addressController = new AddressController( 'address' );

export default addressController;