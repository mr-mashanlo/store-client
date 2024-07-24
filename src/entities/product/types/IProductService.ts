import { IProductRequest } from './IProductRequest';
import { IProductResponse } from './IProductResponse';

export interface IProductService {
  getAll: () => Promise<Array<IProductResponse>>,
  getOne: ( id: string ) => Promise<IProductResponse>,
  create: ( product: IProductRequest ) => Promise<{ success: boolean, msg: string }>,
  update: ( id: string, updates: Partial<IProductRequest> ) => Promise<{ success: boolean, msg: string }>,
  delete: ( id: string ) => Promise<{ success: boolean, msg: string }>,
}