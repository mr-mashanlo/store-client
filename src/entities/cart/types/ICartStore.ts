import { IProductResponse } from '@/entities/product/types';

export interface ICartStore {
  products: Array<{ product: IProductResponse, quantity: number }>
  addToProducts: ( product: IProductResponse ) => void
  removeFromProducts: ( id: string ) => void
  resetCart: () => void
  getTotalQuantity: () => number
  getTotalPrice: () => number
}