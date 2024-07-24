import { IAddress } from '@/entities/address/types';
import { IUser } from '@/entities/auth/types';

export interface IOrderRequest {
  _id?: string
  user?: IUser
  address?: IAddress
  status?: 'Processing' | 'Delivering' | 'Done'
  products: Array<{ product: string, quantity: number }>
}