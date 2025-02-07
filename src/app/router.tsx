import { createBrowserRouter } from 'react-router-dom';

import { accountRouter } from '@/pages/account';
import { cartRouter } from '@/pages/cart';
import { checkoutRouter } from '@/pages/checkout';
import { homeRouter } from '@/pages/home';
import { productRouter } from '@/pages/product';
import { signinRouter } from '@/pages/sign-in';
import { signupRouter } from '@/pages/sign-up';
import { successRouter } from '@/pages/success';

import { AccountLayout, AuthLayout, CartLayout, MainLayout, ProtectedLayout } from './layouts';

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
        element: <ProtectedLayout />,
        children: [
          {
            element: <CartLayout />,
            children: [ cartRouter, checkoutRouter ]
          },
          {
            element: <AccountLayout />,
            children: [ accountRouter, successRouter ]
          }
        ]
      }
    ]
  }

] );

export default router;