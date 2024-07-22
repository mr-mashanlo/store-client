import { createBrowserRouter } from 'react-router-dom';

import { MainLayout } from './layouts/main';
import { AuthLayout } from './layouts/auth';
import { DashboardLayout } from './layouts/dashboard';
import { AccountLayout } from './layouts/account';

import { RequestAuth } from '@/shared/hoc';
import { NotRequestAuth } from '@/shared/hoc';

import { HomePage } from '@/pages/home';
import { SigninPage, SignupPage } from '@/pages/auth';
import { CategoriesPage, MediaPage, OrdersPage, ProductsDashboardPage, SingleDashboardProductPage, UsersPage } from '@/pages/dashboard';
import { AddressPage, MyOrderPage, ProfilePage } from '@/pages/account';
import { SingleProductPage } from '@/pages/product';
import { CartPage } from '@/pages/cart';
import { CheckoutPage } from '@/pages/checkout';
import { OrderPage } from '@/pages/order';

import { addToCart, removeFromCart } from '@/features/cart/actions';
import { createAddress } from '@/features/address/actions';
import { createCategory, deleteCategory } from '@/features/category/actions';
import { createOrder, updateOrder } from '@/features/order/actions';
import { createProduct, deleteProduct, updateProduct } from '@/features/product/actions';
import { deleteImage, uploadImage } from '@/features/media/actions';
import { deleteUser, updateUser } from '@/features/user/actions';
import { logoutUser, signinAction, signupAction, updateMe } from '@/features/auth/actions';

import { fetchAddress } from '@/features/address/loadres';
import { fetchCategories } from '@/features/category/loaders';
import { fetchImages } from '@/features/media/loaders';
import { fetchMe } from '@/features/auth/loaders';
import { fetchProductDepends, fetchProductsDepends, fetchProducts, fetchProduct } from '@/features/product/loaders';
import { fetchOrders, fetchUserDepends } from '@/features/order/loaders';
import { fetchUsers } from '@/features/user/loaders';

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
        element: <CartPage />,
        children: [
          {
            path: 'remove/:id',
            action: removeFromCart
          }
        ]
      },
      {
        path: 'checkout',
        element: <CheckoutPage />,
        loader: fetchUserDepends,
        action: createOrder
      },
      {
        path: 'order/:id',
        element: <OrderPage />
      },
      {
        path: 'product/:id',
        element: <SingleProductPage />,
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
    element: <RequestAuth><DashboardLayout /></RequestAuth>,
    children: [
      {
        path: 'media',
        element: <MediaPage />,
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
        element: <UsersPage />,
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
        element: <ProductsDashboardPage />,
        loader: fetchProductsDepends,
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
        element: <SingleDashboardProductPage />,
        loader: fetchProductDepends,
        action: updateProduct
      },
      {
        path: 'categories',
        element: <CategoriesPage />,
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
        element: <OrdersPage />,
        loader: fetchOrders,
        children: [
          {
            path: 'update/:id',
            action: updateOrder
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
        element: <ProfilePage />,
        loader: fetchMe,
        action: updateMe
      },
      {
        path: 'address',
        element: <AddressPage />,
        loader: fetchAddress,
        action: createAddress
      },
      {
        path: 'orders',
        element: <MyOrderPage />,
        loader: fetchOrders
      },
      {
        path: 'logout',
        action: logoutUser
      }
    ]
  }
] );

export default router;