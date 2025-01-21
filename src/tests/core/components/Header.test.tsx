import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import * as ReactRouterDom from 'react-router-dom';
import * as Store from '@/modules/core/store/usePodcastStore';
import { Header } from '@/modules/core/components';
import { Paths } from '@/modules/core/routes';

describe('<Header />', () => {
  test('render a header', () => {
    render(<Header />, {
      wrapper: ReactRouterDom.BrowserRouter,
    });

    expect(screen.getByLabelText('logo')).toBeTruthy();
    expect(screen.queryByLabelText('loading')).toBeNull();
  });

  test('when the isLoading value is true then the spinner is displayed', () => {
    jest.spyOn(Store, 'usePodcastStore').mockImplementation(() => ({
      isLoading: true,
    }));

    render(<Header />, {
      wrapper: ReactRouterDom.BrowserRouter,
    });

    expect(screen.getByLabelText('loading')).toBeInTheDocument();
  });

  test('clicking on logo redirects to list of podcasts', async () => {
    const history = createMemoryHistory();

    render(
      <ReactRouterDom.Router location={history.location} navigator={history}>
        <Header />
      </ReactRouterDom.Router>,
    );

    const logo = screen.getByLabelText('logo');
    await userEvent.click(logo);

    expect(history.location.pathname).toBe(Paths.base);
  });
});
