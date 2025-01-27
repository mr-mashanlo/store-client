import productController from './api/controller';
import { addProductToCart, getProductsFromCart } from './models/mediator';
import { ProductResponseSchema, ProductResponseType, ProductsResponseType } from './models/schema';
import useCartStore from './models/store';
import { validateProductResponseData, validateProductsResponseData } from './models/validator';

export {
  addProductToCart,
  getProductsFromCart,
  productController,
  ProductResponseSchema,
  useCartStore,
  validateProductResponseData,
  validateProductsResponseData
};

export type {
  ProductResponseType,
  ProductsResponseType
};