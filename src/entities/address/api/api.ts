import { GeneralController } from '@/shared/api';

import { AddressResponseType } from '../model/type';

class AddressController extends GeneralController<AddressResponseType, Array<AddressResponseType>> {}

const addressController = new AddressController( 'address' );

export default addressController;