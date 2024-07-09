import { IMediaService } from '@/entities/media/types';

export class MediaService {

  private service;

  constructor( service: IMediaService ) {
    this.service = service;
  }

  create = ( name: string, alt: string ) => {
    return this.service.create( name, alt );
  };

  delete = ( name: string ) => {
    return this.service.delete( name );
  };

}