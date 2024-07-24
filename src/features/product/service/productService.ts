import { IProductRequest, IProductService } from '@/entities/product/types';

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

  create = ( product: IProductRequest ) => {
    return this.service.create( product );
  };

  update = ( id: string, updates: Partial<IProductRequest> ) => {
    return this.service.update( id, updates );
  };

  delete = ( id: string ) => {
    return this.service.delete( id );
  };

}