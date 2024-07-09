import { IMedia } from './IMedia';

export interface IMediaService {
  create: ( name: string, alt: string ) => Promise<IMedia>
  delete: ( name: string ) => Promise<IMedia>
}