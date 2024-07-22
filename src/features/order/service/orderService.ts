import { IOrder, IOrderService } from '@/entities/order/types';

export class OrderService {

  private service;

  constructor( service: IOrderService ) {
    this.service = service;
  }

  getAll = ( query?: string ) => {
    return this.service.getAll( query );
  };

  getOne = ( id: string ) => {
    return this.service.getOne( id );
  };

  create = ( order: IOrder ) => {
    return this.service.create( order );
  };

  update = ( updates: Partial<IOrder>, id: string ) => {
    return this.service.update( updates, id );
  };

  delete = ( id: string ) => {
    return this.service.delete( id );
  };

}