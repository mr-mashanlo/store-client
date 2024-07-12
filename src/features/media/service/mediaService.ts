import { IMediaService } from '@/entities/media/types';

export class MediaService {

  private service;

  constructor( service: IMediaService ) {
    this.service = service;
  }

  get = () => {
    return this.service.get();
  };

  create = ( image: FormData ) => {
    return this.service.create( image );
  };

  delete = ( name: string ) => {
    return this.service.delete( name );
  };

}