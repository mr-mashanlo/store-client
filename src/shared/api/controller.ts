import { authInstance } from '@/shared/api';

export class GeneralController<T, R> {

  protected  slug = '';

  constructor( slug: string ) {
    this.slug = slug;
  }

  create = async <A>( document: A ): Promise<T> => {
    const response = await authInstance( `${this.slug}/create`, { method: 'post', body: JSON.stringify( document ) } );
    return await response.json();
  };

  delete = async ( query: Record<string, string> ): Promise<{ ok: boolean }> => {
    const queryString = new URLSearchParams( query ).toString();
    const response = await authInstance( `${this.slug}/delete?${queryString}`, { method: 'delete' } );
    return await response.json();
  };

  getOne = async ( query: Record<string, string> ): Promise<T> => {
    const queryString = new URLSearchParams( query ).toString();
    const response = await authInstance( `${this.slug}/getone?${queryString}` );
    return await response.json();
  };

  getMany = async ( query: Record<string, string> ): Promise<R> => {
    const queryString = new URLSearchParams( query ).toString();
    const response = await authInstance( `${this.slug}/getmany?${queryString}` );
    return await response.json();
  };

  update = async ( { query, updates }: { query: object, updates: Partial<T> } ): Promise<T> => {
    const response = await authInstance( `${this.slug}/update`, { method: 'put', body: JSON.stringify( { query, updates } ) } );
    return await response.json();
  };

  upsert = async ( { query, updates }: { query: object, updates: Partial<T> } ): Promise<T> => {
    const response = await authInstance( `${this.slug}/upsert`, { method: 'put', body: JSON.stringify( { query, updates } ) } );
    return await response.json();
  };

}