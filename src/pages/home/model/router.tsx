import { RouteObject } from 'react-router-dom';
import loadable from '@loadable/component';

const HomePage = loadable( () => import( '../ui/page' ) );

export const homeRouter: RouteObject = {
  path: '/',
  element: <HomePage />
};