import { IOrder } from './IOrder';

export interface IOrderService {
  getAll: ( query?: string ) => Promise<Array<IOrder>>,
  getOne: ( id: string ) => Promise<IOrder>,
  create: ( order: IOrder ) => Promise<IOrder>,
  update: ( updates: Partial<IOrder>, id: string ) => Promise<{ success: boolean, msg: string }>,
  delete: ( id: string ) => Promise<{ success: boolean, msg: string }>,
}