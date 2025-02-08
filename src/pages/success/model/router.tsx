import { RouteObject } from 'react-router-dom';
import loadable from '@loadable/component';

const SuccessPage = loadable( () => import( '../ui/page' ) );

export const successRouter: RouteObject = {
  path: '/success/:id',
  element: <SuccessPage />
};