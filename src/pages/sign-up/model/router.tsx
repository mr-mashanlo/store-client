import { RouteObject } from 'react-router-dom';
import loadable from '@loadable/component';

import { Loader } from '@/shared/ui';

const SignupPage = loadable( () => import( '../ui/page' ), { fallback: <Loader /> } );

export const signupRouter: RouteObject = {
  path: '/signup',
  element: <SignupPage />
};