import { RouteObject } from 'react-router-dom';
import loadable from '@loadable/component';

const SigninPage = loadable( () => import( '../ui/page' ) );

export const signinRouter: RouteObject = {
  path: '/signin',
  element: <SigninPage />
};