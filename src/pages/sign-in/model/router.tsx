import { RouteObject } from 'react-router-dom';
import loadable from '@loadable/component';

import { Loader } from '@/shared/ui';

const SigninPage = loadable( () => import( '../ui/page' ), { fallback: <Loader /> } );

export const signinRouter: RouteObject = {
  path: '/signin',
  element: <SigninPage />
};