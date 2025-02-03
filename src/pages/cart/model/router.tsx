import pMinDelay from 'p-min-delay';
import { RouteObject } from 'react-router-dom';
import loadable from '@loadable/component';

import { Loader } from '@/shared/ui';

const CartPage = loadable( () => pMinDelay( import( '../ui/page' ), 200 ), { fallback: <Loader /> } );

export const cartRouter: RouteObject = {
  path: '/cart',
  element: <CartPage />
};