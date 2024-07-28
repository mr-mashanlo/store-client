import { createBrowserRouter } from 'react-router-dom';

import { MainLayout } from './layouts/main';
import { AuthLayout } from './layouts/auth';
import { DashboardLayout } from './layouts/dashboard';
import { AccountLayout } from './layouts/account';

import { NotRequestAuth } from '@/shared/hoc';
import { RequestAdmin } from '@/shared/hoc';
import { RequestAuth } from '@/shared/hoc';

import { HomePage } from '@/pages/home';
import { SigninPage, SignupPage } from '@/pages/auth';
import { DashboardCategoriesPage, DashboardMediaPage, DashboardOrdersPage, DashboardProductsPage, DashboardOrderPage, DashboardProductPage, DashboardUsersPage, DashboardUserPage, DashboardCategoryPage } from '@/pages/dashboard';
import { AccountAddressPage, AccountOrderPage, AccountOrdersPage, AccountProfilePage } from '@/pages/account';
import { StoreCartPage, StoreCheckoutPage, StoreProductPage, StoreSuccessPage } from '@/pages/store';

import { addToCart, removeFromCart } from '@/features/cart/actions';
import { createAddress } from '@/features/address/actions';
import { createCategory, deleteCategory, updateCategory } from '@/features/category/actions';
import { createOrder, deleteOrder, updateOrder } from '@/features/order/actions';
import { createProduct, deleteProduct, updateProduct } from '@/features/product/actions';
import { deleteImage, uploadImage } from '@/features/media/actions';
import { deleteUser, updateUser } from '@/features/user/actions';
import { logoutUser, signinAction, signupAction, updateMe } from '@/features/auth/actions';

import { fetchAddress } from '@/features/address/loadres';
import { fetchCategories, fetchCategory } from '@/features/category/loaders';
import { fetchImages } from '@/features/media/loaders';
import { fetchMe } from '@/features/auth/loaders';
import { fetchProductWithMetadata, fetchProductsWithMetadata, fetchProducts, fetchProduct } from '@/features/product/loaders';
import { fetchAllOrders, fetchMyOrders, fetchOrder } from '@/features/order/loaders';
import { fetchUsers, fetchUserWithMetadata } from '@/features/user/loaders';

const router = createBrowserRouter( [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: fetchProducts
      },
      {
        path: 'cart',
        element: <StoreCartPage />,
        children: [
          {
            path: 'remove/:id',
            action: removeFromCart
          }
        ]
      },
      {
        path: 'checkout',
        element: <StoreCheckoutPage />,
        loader: fetchUserWithMetadata,
        action: createOrder
      },
      {
        path: 'success/:id',
        element: <StoreSuccessPage />,
        loader: fetchOrder
      },
      {
        path: 'product/:id',
        element: <StoreProductPage />,
        loader: fetchProduct,
        action: addToCart
      }
    ]
  },

  {
    element: <NotRequestAuth><AuthLayout /></NotRequestAuth>,
    children: [
      {
        path: '/signin',
        element: <SigninPage />,
        action: signinAction
      },
      {
        path: '/signup',
        element: <SignupPage />,
        action: signupAction
      }
    ]
  },

  {
    path: '/dashboard',
    element: <RequestAuth><RequestAdmin><DashboardLayout /></RequestAdmin></RequestAuth>,
    children: [
      {
        path: 'media',
        element: <DashboardMediaPage />,
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
        element: <DashboardUsersPage />,
        loader: fetchUsers
      },
      {
        path: 'users/:id',
        element: <DashboardUserPage />,
        loader: fetchUserWithMetadata,
        action: updateUser,
        children: [
          {
            path: 'delete',
            action: deleteUser
          }
        ]
      },
      {
        path: 'products',
        element: <DashboardProductsPage />,
        loader: fetchProductsWithMetadata,
        action: createProduct
      },
      {
        path: 'products/:id',
        element: <DashboardProductPage />,
        loader: fetchProductWithMetadata,
        action: updateProduct,
        children: [
          {
            path: 'delete',
            action: deleteProduct
          }
        ]
      },
      {
        path: 'categories',
        element: <DashboardCategoriesPage />,
        loader: fetchCategories,
        action: createCategory
      },
      {
        path: 'categories/:id',
        element: <DashboardCategoryPage />,
        loader: fetchCategory,
        action: updateCategory,
        children: [
          {
            path: 'delete',
            action: deleteCategory
          }
        ]
      },
      {
        path: 'orders',
        element: <DashboardOrdersPage />,
        loader: fetchAllOrders
      },
      {
        path: 'orders/:id',
        element: <DashboardOrderPage />,
        loader: fetchOrder,
        action: updateOrder,
        children: [
          {
            path: 'delete',
            action: deleteOrder
          }
        ]
      }
    ]
  },

  {
    path: '/account',
    element: <RequestAuth><AccountLayout /></RequestAuth>,
    children: [
      {
        path: 'me',
        element: <AccountProfilePage />,
        loader: fetchMe,
        action: updateMe
      },
      {
        path: 'address',
        element: <AccountAddressPage />,
        loader: fetchAddress,
        action: createAddress
      },
      {
        path: 'orders',
        element: <AccountOrdersPage />,
        loader: fetchMyOrders
      },
      {
        path: 'orders/:id',
        element: <AccountOrderPage />,
        loader: fetchOrder
      },
      {
        path: 'logout',
        action: logoutUser
      }
    ]
  }
] );

export default router;