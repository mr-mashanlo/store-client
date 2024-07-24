import { ICategory } from '@/entities/category/types';
import { IMedia } from '@/entities/media/types';

export interface IProductResponse {
  _id?: string,
  name: string,
  price: string,
  about: string,
  category: ICategory,
  images: Array<IMedia>,
}