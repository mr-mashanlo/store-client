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
import { createProduct, deleteProduct } from '@/features/product/actions';
import { createCategory, deleteCategory } from '@/features/category/actions';

import { fetchImages } from '@/features/media/loaders';
import { fetchUsers } from '@/features/user/loaders';
import { fetchProducts } from '@/features/product/loaders';
import { fetchCategories } from '@/features/category/loaders';

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
  }
] );

export default router;