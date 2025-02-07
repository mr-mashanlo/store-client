import { RouteObject } from 'react-router-dom';
import loadable from '@loadable/component';

const SignupPage = loadable( () => import( '../ui/page' ) );

export const signupRouter: RouteObject = {
  path: '/signup',
  element: <SignupPage />
};