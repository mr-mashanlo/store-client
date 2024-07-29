import { IMediaService } from '@/entities/media/types';

export class MediaService {

  private service;

  constructor( service: IMediaService ) {
    this.service = service;
  }

  getAll = () => {
    return this.service.getAll();
  };

  create = ( image: FormData ) => {
    return this.service.create( image );
  };

  delete = ( id: string ) => {
    return this.service.delete( id );
  };

}