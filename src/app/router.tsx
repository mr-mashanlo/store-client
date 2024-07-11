import { createBrowserRouter } from 'react-router-dom';

import { MainLayout } from '@/shared/layouts';
import { AuthLayout } from '@/shared/layouts';

import { RequestAuth } from '@/shared/hoc';
import { NotRequestAuth } from '@/shared/hoc';

import { HomePage } from '@/pages/home';
import { PostPage, SinglePostPage } from '@/pages/post';
import { MediaPage } from '@/pages/media';
import { SigninPage, SignupPage } from '@/pages/auth';

import { signinAction, signupAction } from '@/features/auth/actions';

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
        element: <RequestAuth><MediaPage /></RequestAuth>
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