import { ICategory, ICategoryService } from '@/entities/category/types';

export class CategoryService {

  private service;

  constructor( service: ICategoryService ) {
    this.service = service;
  }

  getAll = () => {
    return this.service.getAll();
  };

  getOne = ( id: string ) => {
    return this.service.getOne( id );
  };

  create = ( title: string, slug: string ) => {
    return this.service.create( title, slug );
  };

  update = ( updates: Partial<ICategory>, id: string ) => {
    return this.service.update( updates, id );
  };

  delete = ( id: string ) => {
    return this.service.delete( id );
  };

}