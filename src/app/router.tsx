import { createBrowserRouter } from 'react-router-dom';

import { accountRouter } from '@/pages/account';
import { cartRouter } from '@/pages/cart';
import { checkoutRouter } from '@/pages/checkout';
import { homeRouter } from '@/pages/home';
import { productRouter } from '@/pages/product';
import { signinRouter } from '@/pages/sign-in';
import { signupRouter } from '@/pages/sign-up';
import { successRouter } from '@/pages/success';

import { ClearLayout, GuestLayout, MainLayout, ProtectedLayout } from './layouts';

const router = createBrowserRouter( [
  {
    path: '/',
    children: [
      {
        element: <MainLayout />,
        children: [ homeRouter, productRouter ]
      },
      {
        element: <GuestLayout />,
        children: [
          {
            element: <ClearLayout />,
            children: [ signinRouter, signupRouter ]
          }
        ]
      },
      {
        element: <ProtectedLayout />,
        children: [
          {
            element: <ClearLayout />,
            children: [ cartRouter, checkoutRouter ]
          },
          {
            element: <ClearLayout />,
            children: [ accountRouter, successRouter ]
          }
        ]
      }
    ]
  }

] );

export default router;