import { IMedia } from './IMedia';

export interface IMediaService {
  create: ( image: FormData ) => Promise<IMedia>
  delete: ( name: string ) => Promise<IMedia>
}