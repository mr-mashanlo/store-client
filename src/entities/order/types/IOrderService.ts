import { IOrderRequest } from './IOrderRequest';
import { IOrderResponse } from './IOrderResponse';

export interface IOrderService {
  getAll: () => Promise<Array<IOrderResponse>>,
  getOwn: () => Promise<Array<IOrderResponse>>,
  getOne: ( id: string ) => Promise<IOrderResponse>,
  create: ( order: IOrderRequest ) => Promise<IOrderResponse>,
  update: ( updates: Partial<IOrderRequest>, id: string ) => Promise<{ success: boolean, msg: string }>,
  delete: ( id: string ) => Promise<{ success: boolean, msg: string }>,
}