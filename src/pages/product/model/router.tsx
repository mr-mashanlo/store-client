import { RouteObject } from 'react-router-dom';

import ProductPage from '../ui/page';

export const productRouter: RouteObject = {
  path: '/:id',
  element: <ProductPage />
};