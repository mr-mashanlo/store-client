import { ICategory } from './ICategory';

export interface ICategoryService {
  getAll: () => Promise<Array<ICategory>>,
  getOne: ( id: string ) => Promise<ICategory>,
  create: ( title: string, slug: string ) => Promise<ICategory>,
  update: ( updates: Partial<ICategory>, id: string ) => Promise<ICategory>,
  delete: ( id: string ) => Promise<{ success: boolean, msg: string }>,
}