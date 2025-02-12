import productController from './api/product';
import { useProductQuery } from './model/productHook';
import { useProductsQuery } from './model/productsHook';
import { ProductResponseSchema, ProductResponseType, ProductsResponseType } from './model/schema';
import { validateProductResponseData, validateProductsResponseData } from './model/validator';
import ProductDescription from './ui/description';
import ProductGallery from './ui/gallery';
import ProductList from './ui/list';

export {
  productController
};

export {
  useProductQuery,
  useProductsQuery
};

export {
  ProductDescription,
  ProductGallery,
  ProductList
};

export {
  validateProductResponseData,
  validateProductsResponseData
};

export {
  ProductResponseSchema
};

export type {
  ProductResponseType,
  ProductsResponseType
};