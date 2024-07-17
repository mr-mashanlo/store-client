import { createBrowserRouter } from 'react-router-dom';

import { MainLayout } from './layouts/main';
import { AuthLayout } from './layouts/auth';
import { DashboardLayout } from './layouts/dashboard';
import { AccountLayout } from './layouts/account';

import { RequestAuth } from '@/shared/hoc';
import { NotRequestAuth } from '@/shared/hoc';

import { HomePage } from '@/pages/home';
import { SigninPage, SignupPage } from '@/pages/auth';
import { CategoriesPage, MediaPage, OrdersPage, ProductsPage, SingleProductPage, UsersPage } from '@/pages/dashboard';
import { AddressPage, MyOrderPage, ProfilePage } from '@/pages/account';

import { signinAction, signupAction } from '@/features/auth/actions';
import { deleteImage, uploadImage } from '@/features/media/actions';
import { deleteUser, updateUser } from '@/features/user/actions';
import { createProduct, deleteProduct, updateProduct } from '@/features/product/actions';
import { createCategory, deleteCategory } from '@/features/category/actions';

import { fetchImages } from '@/features/media/loaders';
import { fetchUsers } from '@/features/user/loaders';
import { fetchProduct, fetchProducts } from '@/features/product/loaders';
import { fetchCategories } from '@/features/category/loaders';

const router = createBrowserRouter( [
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />
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
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      {
        path: 'media',
        element: <RequestAuth><MediaPage /></RequestAuth>,
        loader: fetchImages,
        action: uploadImage,
        children: [
          {
            path: 'delete/:name',
            action: deleteImage
          }
        ]
      },
      {
        path: 'users',
        element: <RequestAuth><UsersPage /></RequestAuth>,
        loader: fetchUsers,
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
        loader: fetchProducts,
        action: createProduct,
        children: [
          {
            path: 'delete/:id',
            action: deleteProduct
          }
        ]
      },
      {
        path: 'products/:id',
        element: <RequestAuth><SingleProductPage /></RequestAuth>,
        loader: fetchProduct,
        action: updateProduct
      },
      {
        path: 'categories',
        element: <RequestAuth><CategoriesPage /></RequestAuth>,
        loader: fetchCategories,
        action: createCategory,
        children: [
          {
            path: 'delete/:slug',
            action: deleteCategory
          }
        ]
      },
      {
        path: 'orders',
        element: <RequestAuth><OrdersPage /></RequestAuth>
      }
    ]
  },

  {
    path: '/account',
    element: <AccountLayout />,
    children: [
      {
        path: 'me',
        element: <ProfilePage />
      },
      {
        path: 'address',
        element: <AddressPage />
      },
      {
        path: 'orders',
        element: <MyOrderPage />
      }
    ]
  }
] );

export default router;