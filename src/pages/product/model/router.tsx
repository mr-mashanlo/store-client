import { RouteObject } from 'react-router-dom';
import loadable from '@loadable/component';

const ProductPage = loadable( () => import( '../ui/page' ) );

export const productRouter: RouteObject = {
  path: '/:id',
  element: <ProductPage />
};