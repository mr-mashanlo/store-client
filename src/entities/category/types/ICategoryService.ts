import { ICategory } from './ICategory';

export interface ICategoryService {
  getAll: () => Promise<Array<ICategory>>,
  create: ( title: string, slug: string ) => Promise<{ success: boolean, msg: string }>,
  delete: ( id: string ) => Promise<{ success: boolean, msg: string }>,
}