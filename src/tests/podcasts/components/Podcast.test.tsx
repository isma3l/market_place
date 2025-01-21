import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';
import * as ReactRouterDom from 'react-router-dom';
import { Podcast } from '@/modules/podcasts/components';
import { PodcastInterface } from '@/modules/core/models';
import { generateMockPodcasts } from '../../utils';
import { Paths } from '@/modules/core/routes';

describe('<Podcast />', () => {
  const podcast: PodcastInterface = generateMockPodcasts(1)[0];

  test('render a podcast from list', () => {
    render(<Podcast podcast={podcast} />, {
      wrapper: ReactRouterDom.BrowserRouter,
    });

    expect(screen.getByRole('img')).toHaveAttribute('src', podcast.urlImage);
    expect(screen.getByText(podcast.title)).toBeInTheDocument();
    expect(screen.getByText(/Author:/i)).toHaveTextContent(`Author: ${podcast.author}`);
  });

  test('clicking on podcast redirects to its details', async () => {
    const history = createMemoryHistory();

    render(
      <ReactRouterDom.Router location={history.location} navigator={history}>
        <Podcast podcast={podcast} />
      </ReactRouterDom.Router>,
    );

    const image = screen.getByRole('img');
    await userEvent.click(image);

    expect(history.location.pathname).toBe(`${Paths.baseDetails}${podcast.id}`);
  });
});
