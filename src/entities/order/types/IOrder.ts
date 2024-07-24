import { IAddress } from '@/entities/address/types';
import { IUser } from '@/entities/auth/types';
import { IProductResponse } from '@/entities/product/types';

export interface IOrder {
  _id?: string
  user?: IUser
  address?: IAddress
  status?: 'Processing' | 'Delivering' | 'Done'
  products: Array<{ product: IProductResponse, quantity: number }>
}