export interface ICartStore {
  products: Array<{ productID: string, quantity: number }>
  setProducts: ( product: string ) => void
  getTotalQuantity: () => number
}