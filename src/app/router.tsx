import { createBrowserRouter } from 'react-router-dom';

import { MainLayout } from './layouts/main';
import { AuthLayout } from './layouts/auth';
import { DashboardLayout } from './layouts/dashboard';

import { RequestAuth } from '@/shared/hoc';
import { NotRequestAuth } from '@/shared/hoc';

import { HomePage } from '@/pages/home';
import { SigninPage, SignupPage } from '@/pages/auth';
import { CategoriesPage, MediaPage, OrdersPage, ProductsPage, UsersPage } from '@/pages/dashboard';
import { ProfilePage } from '@/pages/profile';

import { signinAction, signupAction } from '@/features/auth/actions';
import { deleteImage, uploadImage } from '@/features/media/actions';
import { deleteUser, updateUser } from '@/features/user/actions';

import { getImages } from '@/features/media/loaders';
import { getUsers } from '@/features/user/loaders';
import { getProducts } from '@/features/product/loaders';

const router = createBrowserRouter( [
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/profile',
        element: <RequestAuth><ProfilePage /></RequestAuth>
      }
    ]
  },

  {
    element: <AuthLayout />,
    children: [
      {
        path: '/signin',
        element: <NotRequestAuth><SigninPage /></NotRequestAuth>,
        action: signinAction
      },
      {
        path: '/signup',
        element: <NotRequestAuth><SignupPage /></NotRequestAuth>,
        action: signupAction
      }
    ]
  },

  {
    element: <DashboardLayout />,
    path: '/dashboard',
    children: [
      {
        path: 'media',
        element: <RequestAuth><MediaPage /></RequestAuth>,
        loader: getImages,
        children: [
          {
            path: 'upload/:name',
            action: uploadImage
          },
          {
            path: 'delete/:name',
            action: deleteImage
          }
        ]
      },
      {
        path: 'users',
        element: <RequestAuth><UsersPage /></RequestAuth>,
        loader: getUsers,
        children: [
          {
            path: 'update/:id',
            action: updateUser
          },
          {
            path: 'delete/:id',
            action: deleteUser
          }
        ]
      },
      {
        path: 'products',
        element: <RequestAuth><ProductsPage /></RequestAuth>,
        loader: getProducts
      },
      {
        path: 'categories',
        element: <RequestAuth><CategoriesPage /></RequestAuth>
      },
      {
        path: 'orders',
        element: <RequestAuth><OrdersPage /></RequestAuth>
      }
    ]
  }
] );

export default router;