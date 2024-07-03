import { HomePage } from '@/pages/home';
import MainLayout from '@/shared/layouts/mainLayout';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter( [
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />
      }
    ]
  }
] );

export default router;