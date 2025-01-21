import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import * as ReactRouterDom from 'react-router-dom';
import { PodcastInterface } from '@/modules/core/models';
import { PodcastDescription } from '@/modules/details/components';
import { generateMockPodcasts } from '@/tests/utils';
import { Paths } from '@/modules/core/routes';

describe('<PodcastDescription />', () => {
  test('render podcast description with all its values', () => {
    const podcast: PodcastInterface = generateMockPodcasts(1)[0];

    render(<PodcastDescription podcast={podcast} />, {
      wrapper: ReactRouterDom.BrowserRouter,
    });

    expect(screen.getByRole('img')).toHaveAttribute('src', podcast.urlImage);
    expect(screen.getByRole('heading', { name: 'title' })).toHaveTextContent(podcast.title);
    expect(screen.getByRole('heading', { name: 'author' })).toHaveTextContent(podcast.author);
    expect(screen.getByRole('heading', { name: 'content description' })).toHaveTextContent(
      podcast.description!,
    );
  });

  test.only('clicking on title redirects to detail of podcast', async () => {
    const history = createMemoryHistory();
    const podcast: PodcastInterface = generateMockPodcasts(1)[0];

    render(
      <ReactRouterDom.Router location={history.location} navigator={history}>
        <PodcastDescription podcast={podcast} />
      </ReactRouterDom.Router>,
    );

    const title = screen.getByLabelText('title');
    await userEvent.click(title);

    expect(history.location.pathname).toBe(`${Paths.baseDetails}${podcast.id}`);
  });
});
