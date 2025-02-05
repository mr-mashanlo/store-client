import { createBrowserRouter } from 'react-router-dom';

import { cartRouter } from '@/pages/cart';
import { checkoutRouter } from '@/pages/checkout';
import { homeRouter } from '@/pages/home';
import { productRouter } from '@/pages/product';
import { signinRouter } from '@/pages/sign-in';
import { signupRouter } from '@/pages/sign-up';

import { AuthLayout, CartLayout, MainLayout } from './layouts';

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
        children: [ homeRouter, productRouter ]
      },
      {
        element: <CartLayout />,
        children: [ cartRouter, checkoutRouter ]
      }
    ]
  }

] );

export default router;