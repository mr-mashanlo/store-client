import { createBrowserRouter } from 'react-router-dom';

import { homeRouter } from '@/pages/home';
import { productRouter } from '@/pages/product';
import { signinRouter } from '@/pages/sign-in';
import { signupRouter } from '@/pages/sign-up';

import { AuthLayout, MainLayout, ProductLayout } from './layouts';

const router = createBrowserRouter( [
  {
    path: '/',
    children: [
      {
        element: <AuthLayout />,
        children: [ signinRouter, signupRouter ]
      },
      {
        element: <MainLayout />,
        children: [ homeRouter ]
      },
      {
        element: <ProductLayout />,
        children: [ productRouter ]
      }
    ]
  }

] );

export default router;