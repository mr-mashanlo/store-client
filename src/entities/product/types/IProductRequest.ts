export interface IProductRequest {
  _id?: string,
  name: string,
  price: string,
  about: string,
  category: string,
  images: Array<string>,
}