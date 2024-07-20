import { IProduct } from '@/entities/product/types';

export interface ICartStore {
  products: Array<{ product: IProduct, quantity: number }>
  addToProducts: ( product: IProduct ) => void
  removeFromProducts: ( id: string ) => void
  getTotalQuantity: () => number
  getTotalPrice: () => number
}