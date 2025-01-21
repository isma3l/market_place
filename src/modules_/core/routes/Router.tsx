import { createBrowserRouter } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Paths } from './paths';
import { RootLayout } from '@/modules/core/layout/Root.layout';

const LazyPodcasts = lazy(
  () => import(/*webpackChunkName: "LazyPodcasts"  */ '@/modules/podcasts'),
);

const LazyDetailsLayout = lazy(
  () => import(/*webpackChunkName: "LazyDetailsLayout"  */ '@/modules/details'),
);

const LazyListEpisodes = lazy(() =>
  import(/*webpackChunkName: "LazyEpisodePodcasts"  */ '@/modules/details/').then((module) => ({
    default: module.ListEpisodes,
  })),
);

const LazyEpisodeDetails = lazy(() =>
  import(/*webpackChunkName: "LazyEpisodePodcasts"  */ '@/modules/details/').then((module) => ({
    default: module.EpisodeDetails,
  })),
);

export const Router = createBrowserRouter([
  {
    path: Paths.base,
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense>
            <LazyPodcasts />
          </Suspense>
        ),
      },
      {
        path: Paths.podcastDetails,
        element: (
          <Suspense>
            <LazyDetailsLayout />
          </Suspense>
        ),
        children: [
          {
            index: true,
            element: (
              <Suspense>
                <LazyListEpisodes />
              </Suspense>
            ),
          },
          {
            path: Paths.episodeDetails,
            element: (
              <Suspense>
                <LazyEpisodeDetails />
              </Suspense>
            ),
          },
        ],
      },
    ],
  },
]);
