import { IMedia } from './IMedia';

export interface IMediaService {
  getAll: () => Promise<Array<IMedia>>,
  create: ( image: FormData ) => Promise<IMedia>,
  delete: ( id: string ) => Promise<{ success: boolean, msg: string }>,
}