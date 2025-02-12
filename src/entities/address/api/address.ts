import { GeneralController } from '@/shared/api';

import { AddressResponseType } from '../model/schema';

class AddressController extends GeneralController<AddressResponseType> {}

const addressController = new AddressController( 'address' );

export default addressController;