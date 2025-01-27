import { createBrowserRouter } from 'react-router-dom';

import { homeRouter } from '@/pages/home';
import { productRouter } from '@/pages/product';
import { signinRouter } from '@/pages/sign-in';
import { signupRouter } from '@/pages/sign-up';

import { AuthLayout, MainLayout } from './layouts';

const router = createBrowserRouter( [
  {
    path: '/',
    children: [
      {
        element: <MainLayout />,
        children: [ homeRouter, productRouter ]
      },
      {
        element: <AuthLayout />,
        children: [ signinRouter, signupRouter ]
      }
    ]
  }

] );

export default router;