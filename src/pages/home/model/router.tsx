import pMinDelay from 'p-min-delay';
import { RouteObject } from 'react-router-dom';
import loadable from '@loadable/component';

import { Loader } from '@/shared/ui';

const HomePage = loadable( () => pMinDelay( import( '../ui/page' ), 200 ), { fallback: <Loader /> } );

export const homeRouter: RouteObject = {
  path: '/',
  element: <HomePage />
};