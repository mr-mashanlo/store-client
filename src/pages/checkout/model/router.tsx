import { RouteObject } from 'react-router-dom';
import loadable from '@loadable/component';

const CheckoutPage = loadable( () => import( '../ui/page' ) );

export const checkoutRouter: RouteObject = {
  path: '/checkout',
  element: <CheckoutPage />
};