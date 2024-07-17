import { IMedia } from './IMedia';

export interface IMediaService {
  getAll: () => Promise<Array<IMedia>>,
  create: ( image: FormData ) => Promise<IMedia>,
  delete: ( name: string ) => Promise<IMedia>,
}