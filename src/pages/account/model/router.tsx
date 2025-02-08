import { RouteObject } from 'react-router-dom';
import loadable from '@loadable/component';

const AccountPage = loadable( () => import( '../ui/page' ) );

export const accountRouter: RouteObject = {
  path: '/account',
  element: <AccountPage />
};