import { IProductResponse } from '@/entities/product/types';

export interface ICartStore {
  products: Array<{ product: IProductResponse, quantity: number }>
  from: string
  addToProducts: ( product: IProductResponse ) => void
  removeFromProducts: ( id: string ) => void
  setFrom: ( location: string ) => void
  resetCart: () => void
  getTotalQuantity: () => number
  getTotalPrice: () => number
}