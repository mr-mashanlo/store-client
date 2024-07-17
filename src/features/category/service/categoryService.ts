import { ICategoryService } from '@/entities/category/types';

export class CategoryService {

  private service;

  constructor( service: ICategoryService ) {
    this.service = service;
  }

  getAll = () => {
    return this.service.getAll();
  };

  create = ( title: string, slug: string ) => {
    return this.service.create( title, slug );
  };

  delete = ( id: string ) => {
    return this.service.delete( id );
  };

}