import { IOrder, IOrderService } from '@/entities/order/types';

export class OrderService {

  private service;

  constructor( service: IOrderService ) {
    this.service = service;
  }

  getAll = () => {
    return this.service.getAll();
  };

  getOwn = () => {
    return this.service.getOwn();
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