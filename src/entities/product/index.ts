import productController from './api/api';
import { useProductQuery, useProductsQuery } from './model/hook';
import { ProductResponseSchema } from './model/schema';
import useFilterStore from './model/store';
import { ProductResponseType, ProductsResponseType, SearchRequestType } from './model/type';
import { validateProductResponseData, validateProductsResponseData, validateSearchRequestData } from './model/validator';
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
  useFilterStore
};

export {
  ProductDescription,
  ProductGallery,
  ProductList
};

export {
  validateProductResponseData,
  validateProductsResponseData,
  validateSearchRequestData
};

export {
  ProductResponseSchema
};

export type {
  ProductResponseType,
  ProductsResponseType,
  SearchRequestType
};