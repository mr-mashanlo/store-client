import { authInstance } from './ky';

export class GeneralController<T> {

  private slug = '';

  constructor( slug: string ) {
    this.slug = slug;
  }

  create = async ( document: T ) => {
    const response = await authInstance( `${this.slug}/create`, { method: 'post', body: JSON.stringify( document ) } );
    return await response.json();
  };

  delete = async( id: string ) => {
    const response = await authInstance( `${this.slug}/delete/${id}`, { method: 'delete' } );
    return await response.json();
  };

  getOne = async ( id: string ) => {
    const response = await authInstance( `${this.slug}/getone/${id}` );
    return await response.json();
  };

  getMany = async ( query: object ) => {
    const response = await authInstance( `${this.slug}/getmany`, { method: 'post', body: JSON.stringify( query ) } );
    return await response.json();
  };

  update = async ( query: object, updates: Partial<T> ) => {
    const response = await authInstance( `${this.slug}/update`, { method: 'put', body: JSON.stringify( { query, updates } ) } );
    return await response.json();
  };

}