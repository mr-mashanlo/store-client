import { RouteObject } from 'react-router-dom';
import loadable from '@loadable/component';

const CartPage = loadable( () => import( '../ui/page' ) );

export const cartRouter: RouteObject = {
  path: '/cart',
  element: <CartPage />
};