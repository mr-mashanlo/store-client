import { HomePage } from '@/pages/home';
import { EditProfilePage } from '@/pages/profile';
import MainLayout from '@/shared/layouts/mainLayout';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter( [
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/profile/edit',
        element: <EditProfilePage />
      }
    ]
  }
] );

export default router;