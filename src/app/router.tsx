import { createBrowserRouter } from 'react-router-dom';

import { homeRouter } from '@/pages/home';

import { MainLayout } from './layouts';

const router = createBrowserRouter( [
  {
    path: '/',
    element: <MainLayout />,
    children: [ homeRouter ]
  }

] );

export default router;