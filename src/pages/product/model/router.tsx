import pMinDelay from 'p-min-delay';
import { RouteObject } from 'react-router-dom';
import loadable from '@loadable/component';

import { Loader } from '@/shared/ui';

const ProductPage = loadable( () => pMinDelay( import( '../ui/page' ), 200 ), { fallback: <Loader /> } );

export const productRouter: RouteObject = {
  path: '/:id',
  element: <ProductPage />
};