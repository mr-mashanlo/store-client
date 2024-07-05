import { createBrowserRouter } from 'react-router-dom';

import MainLayout from '@/shared/layouts/mainLayout';

import { PostPage, SinglePostPage } from '@/pages/post';
import { EditProfilePage } from '@/pages/profile';

const router = createBrowserRouter( [
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <PostPage />
      },
      {
        path: '/post/:id',
        element: <SinglePostPage />
      },
      {
        path: '/profile/edit',
        element: <EditProfilePage />
      }
    ]
  }
] );

export default router;