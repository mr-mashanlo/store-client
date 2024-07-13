import { IMedia } from './IMedia';

export interface IMediaService {
  get: () => Promise<Array<IMedia>>,
  create: ( image: FormData ) => Promise<IMedia>,
  delete: ( name: string ) => Promise<IMedia>,
}