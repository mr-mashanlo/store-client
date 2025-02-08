// import pMinDelay from 'p-min-delay';
import { RouteObject } from 'react-router-dom';
import loadable from '@loadable/component';

// import { Loader } from '@/shared/ui';

const ProductPage = loadable( () => import( '../ui/page' ) );

export const productRouter: RouteObject = {
  path: '/:id',
  element: <ProductPage />
};