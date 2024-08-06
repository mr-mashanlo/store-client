import { IMedia } from '@/entities/media/types';

export interface ICategoryResponse {
  _id?: string,
  image: IMedia,
  title: string,
  slug: string,
}