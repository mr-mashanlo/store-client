import { RouteObject } from 'react-router-dom';

import SignupPage from '../ui/page';

export const signupRouter: RouteObject = {
  path: '/signup',
  element: <SignupPage />
};