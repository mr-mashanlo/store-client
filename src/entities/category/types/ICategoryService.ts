import { ICategoryResponse } from './ICategoryResponse';

export interface ICategoryService {
  getAll: () => Promise<Array<ICategoryResponse>>,
  getOne: ( id: string ) => Promise<ICategoryResponse>,
  create: ( image: string, title: string, slug: string ) => Promise<ICategoryResponse>,
  update: ( updates: Partial<ICategoryResponse>, id: string ) => Promise<ICategoryResponse>,
  delete: ( id: string ) => Promise<{ success: boolean, msg: string }>,
}