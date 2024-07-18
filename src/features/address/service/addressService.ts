import { IAddress, IAddressService } from '@/entities/address/types';

export class AddressService {

  private service;

  constructor( service: IAddressService ) {
    this.service = service;
  }

  getOne = ( id?: string ) => {
    return this.service.getOne( id );
  };

  create = ( district: string, city: string, street: string ) => {
    return this.service.create( district, city, street );
  };

  update = ( id: string, updates: Partial<IAddress> ) => {
    return this.service.update( id, updates );
  };

  delete = ( id: string ) => {
    return this.service.delete( id );
  };

}