import { AddressService } from './addressService';
import { MongoAddressService } from './mongoAddressService';

const mongoAuthService = new MongoAddressService();
const addressService = new AddressService( mongoAuthService );

export { addressService };