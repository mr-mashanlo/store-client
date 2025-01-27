import { RouteObject } from 'react-router-dom';

import SigninPage from '../ui/page';

export const signinRouter: RouteObject = {
  path: '/signin',
  element: <SigninPage />
};