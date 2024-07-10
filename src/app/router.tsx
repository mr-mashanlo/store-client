import { createBrowserRouter } from 'react-router-dom';

import MainLayout from '@/shared/layouts/mainLayout';
import AuthLayout from '@/shared/layouts/authLayout';

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
        element: <MediaPage />
      }
    ]
  },

  {
    element: <AuthLayout />,
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