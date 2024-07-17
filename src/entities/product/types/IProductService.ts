import { IProduct } from './IProduct';

export interface IProductService {
  getAll: () => Promise<Array<IProduct>>,
  getOne: ( id: string ) => Promise<IProduct>,
  create: ( product: IProduct ) => Promise<{ success: boolean, msg: string }>,
  update: ( id: string, updates: Partial<IProduct> ) => Promise<{ success: boolean, msg: string }>,
  delete: ( id: string ) => Promise<{ success: boolean, msg: string }>,
}