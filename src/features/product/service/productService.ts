import { IProduct, IProductService } from '@/entities/product/types';

export class ProductService {

  private service;

  constructor( service: IProductService ) {
    this.service = service;
  }

  getAll = () => {
    return this.service.getAll();
  };

  getOne = ( id: string ) => {
    return this.service.getOne( id );
  };

  create = ( product: IProduct ) => {
    return this.service.create( product );
  };

  update = ( id: string, updates: Partial<IProduct> ) => {
    return this.service.update( id, updates );
  };

  delete = ( id: string ) => {
    return this.service.delete( id );
  };

}