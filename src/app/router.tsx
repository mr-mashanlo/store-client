import { createBrowserRouter } from 'react-router-dom';

import MainLayout from '@/shared/layouts/mainLayout';

import { HomePage } from '@/pages/home';
import { SinglePostPage } from '@/pages/post';
import { EditProfilePage } from '@/pages/profile';
import { MediaPage } from '@/pages/media';

const router = createBrowserRouter( [
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/post/:id',
        element: <SinglePostPage />
      },
      {
        path: '/profile/edit',
        element: <EditProfilePage />
      },
      {
        path: '/media',
        element: <MediaPage />
      }
    ]
  }
] );

export default router;