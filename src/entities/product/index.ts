import productController from './api/product';
import { ProductResponseSchema, ProductResponseType, ProductsResponseType } from './model/schema';
import { validateProductResponseData, validateProductsResponseData } from './model/validator';
import cartController from '../cart/api/cart';

export {
  cartController,
  productController,
  ProductResponseSchema,
  validateProductResponseData,
  validateProductsResponseData
};

export type {
  ProductResponseType,
  ProductsResponseType
};