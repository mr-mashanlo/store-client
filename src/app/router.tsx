import { createBrowserRouter } from 'react-router-dom';

import { MainLayout } from './layouts/main';
import { AuthLayout } from './layouts/auth';

import { RequestAuth } from '@/shared/hoc';
import { NotRequestAuth } from '@/shared/hoc';

import { HomePage } from '@/pages/home';
import { SigninPage, SignupPage } from '@/pages/auth';
import { PostPage, SinglePostPage } from '@/pages/post';
import { MediaPage } from '@/pages/media';
import { ProfilePage } from '@/pages/profile';

import { signinAction, signupAction } from '@/features/auth/actions';
import { deleteAction, uploadAction } from '@/features/media/actions';
import { getLoader } from '@/features/media/loaders';

const router = createBrowserRouter( [
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/media',
        element: <RequestAuth><MediaPage /></RequestAuth>,
        loader: getLoader,
        action: uploadAction,
        children: [
          {
            path: 'delete/:name',
            action: deleteAction
          }
        ]
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
    element: <MainLayout />,
    children: [
      {
        path: '/posts',
        element: <PostPage />
      },
      {
        path: '/post/:id',
        element: <SinglePostPage />
      }
    ]
  }
] );

export default router;