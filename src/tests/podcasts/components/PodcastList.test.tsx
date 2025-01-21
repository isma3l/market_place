import { render, screen, within } from '@testing-library/react';
import * as ReactRouterDom from 'react-router-dom';
import { PodcastList } from '@/modules/podcasts/components';
import { PodcastInterface } from '@/modules/core/models';
import { generateMockPodcasts } from '../../utils';

describe('<Podcastlist />', () => {
  const podcasts: PodcastInterface[] = generateMockPodcasts(2);

  test('render a list that contains 2 podcasts', async () => {
    render(<PodcastList data={podcasts} />, {
      wrapper: ReactRouterDom.BrowserRouter,
    });

    const items = await screen.findAllByRole('listitem');
    expect(items.length).toBe(2);
  });

  test('podcasts are displayed correctly', async () => {
    render(<PodcastList data={podcasts} />, {
      wrapper: ReactRouterDom.BrowserRouter,
    });

    const items = await screen.findAllByRole('listitem');

    const firstPodcast = items[0];
    expect(within(firstPodcast).getByRole('img')).toHaveAttribute('src', podcasts[0].urlImage);
    expect(firstPodcast).toHaveTextContent(podcasts[0].title);
    expect(firstPodcast).toHaveTextContent(podcasts[0].author);

    const secondPodcast = items[1];
    expect(within(secondPodcast).getByRole('img')).toHaveAttribute('src', podcasts[1].urlImage);
    expect(secondPodcast).toHaveTextContent(podcasts[1].title);
    expect(secondPodcast).toHaveTextContent(podcasts[1].author);
  });
});
