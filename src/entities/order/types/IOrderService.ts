import { IOrder } from './IOrderResponse';

export interface IOrderService {
  getAll: () => Promise<Array<IOrder>>,
  getOwn: () => Promise<Array<IOrder>>,
  getOne: ( id: string ) => Promise<IOrder>,
  create: ( order: IOrder ) => Promise<IOrder>,
  update: ( updates: Partial<IOrder>, id: string ) => Promise<{ success: boolean, msg: string }>,
  delete: ( id: string ) => Promise<{ success: boolean, msg: string }>,
}