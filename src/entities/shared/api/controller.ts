import { authInstance } from '@/shared/api';

export class GeneralController<T> {

  protected  slug = '';

  constructor( slug: string ) {
    this.slug = slug;
  }

  create = async <A>( document: A ): Promise<T> => {
    const response = await authInstance( `${this.slug}/create`, { method: 'post', body: JSON.stringify( document ) } );
    return await response.json();
  };

  delete = async( id: string ): Promise<{ ok: boolean}> => {
    const response = await authInstance( `${this.slug}/delete/${id}`, { method: 'delete' } );
    return await response.json();
  };

  getOne = async ( id: string ): Promise<T> => {
    const response = await authInstance( `${this.slug}/getone/${id}` );
    return await response.json();
  };

  getMany = async ( query: object ): Promise<Array<T>> => {
    const response = await authInstance( `${this.slug}/getmany`, { method: 'post', body: JSON.stringify( query ) } );
    return await response.json();
  };

  update = async ( query: object, updates: Partial<T> ): Promise<T> => {
    const response = await authInstance( `${this.slug}/update`, { method: 'put', body: JSON.stringify( { query, updates } ) } );
    return await response.json();
  };

}