export interface IOrder {
  _id?: string
  user?: string
  status?: 'Processing' | 'Delivering' | 'Done'
  products: Array<{ product: string, quantity: number }>
}