import { IProductResponse } from '@/entities/product/types';

export interface IOrder {
  _id?: string
  user?: string
  status?: 'Processing' | 'Delivering' | 'Done'
  products: Array<{ product: IProductResponse, quantity: number }>
}