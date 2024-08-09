import { createBrowserRouter } from 'react-router-dom';

import { logoutUser, signinAction, signupAction } from '@/features/auth/actions';
import { createCategory, deleteCategory, updateCategory } from '@/features/dashboard/category/actions';
import { fetchCategories, fetchCategory } from '@/features/dashboard/category/loaders';
import { deleteImage, uploadImage } from '@/features/dashboard/media/actions';
import { fetchImages } from '@/features/dashboard/media/loaders';
import { deleteOrder, updateOrder } from '@/features/dashboard/order/actions';
import { fetchAllOrders } from '@/features/dashboard/order/loaders';
import { createProduct, deleteProduct, updateProduct } from '@/features/dashboard/product/actions';
import { fetchProductWithMetadata, fetchProductsWithMetadata } from '@/features/dashboard/product/loaders';
import { deleteUser, updateUser } from '@/features/dashboard/user/actions';
import { fetchUserWithMetadata, fetchUsers } from '@/features/dashboard/user/loader';
import { createAddress } from '@/features/profile/address/actions';
import { fetchAddress } from '@/features/profile/address/loadres';
import { updateMe } from '@/features/profile/user/actions';
import { fetchMe } from '@/features/profile/user/loaders';
import { addToCart, removeFromCart } from '@/features/store/cart/actions';
import { createOrder } from '@/features/store/order/actions';
import { fetchMyOrders, fetchOrder } from '@/features/store/order/loaders';
import { fetchProduct, fetchProducts } from '@/features/store/product/loaders';

import { SigninPage, SignupPage } from '@/pages/auth';
import { DashboardCategoriesPage, DashboardMediaPage, DashboardOrdersPage, DashboardProductsPage, DashboardOrderPage, DashboardProductPage, DashboardUsersPage, DashboardUserPage, DashboardCategoryPage } from '@/pages/dashboard';
import { HomePage } from '@/pages/home';
import { ProfileAboutPage, ProfileAddressPage, ProfileOrderPage, ProfileOrdersPage } from '@/pages/profile';
import { StoreCartPage, StoreCheckoutPage, StoreProductPage, StoreSuccessPage } from '@/pages/store';

import { RequestAuth } from '@/shared/hoc';
import { RequestAdmin } from '@/shared/hoc';
import { NotRequestAuth } from '@/shared/hoc';

import { AccountLayout } from '@/shared/layouts/account';
import { AuthLayout } from '@/shared/layouts/auth';
import { DashboardLayout } from '@/shared/layouts/dashboard';
import { MainLayout } from '@/shared/layouts/main';

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
            path: 'delete/:id',
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
        element: <ProfileAboutPage />,
        loader: fetchMe,
        action: updateMe
      },
      {
        path: 'address',
        element: <ProfileAddressPage />,
        loader: fetchAddress,
        action: createAddress
      },
      {
        path: 'orders',
        element: <ProfileOrdersPage />,
        loader: fetchMyOrders
      },
      {
        path: 'orders/:id',
        element: <ProfileOrderPage />,
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