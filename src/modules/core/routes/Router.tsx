import { createBrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Paths } from './paths';
import { MainLayout } from '@/modules/core/layout';

const LazyHome = lazy(() => import(/*webpackChunkName: "LazyHome"  */ '@/modules/home'));
const LazyCart = lazy(() => import(/*webpackChunkName: "LazyCart"  */ '@/modules/cart'));
const LaztFavorite = lazy(
  () => import(/*webpackChunkName: "LazyFavorite"  */ '@/modules/favorites'),
);

export const Router = createBrowserRouter([
  {
    path: Paths.base,
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense>
            <LazyHome />
          </Suspense>
        ),
      },
      {
        path: Paths.cart,
        element: (
          <Suspense>
            <LazyCart />
          </Suspense>
        ),
      },
      {
        path: Paths.favorites,
        element: (
          <Suspense>
            <LaztFavorite />
          </Suspense>
        ),
      },
    ],
  },
]);
