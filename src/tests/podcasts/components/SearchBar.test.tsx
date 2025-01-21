import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SearchBar } from '@/modules/podcasts/components';

describe('<SearchBar />', () => {
  const user = userEvent.setup();

  test('render a SearchBar', () => {
    const total = 30;
    const textSearched = 'Michael';

    render(<SearchBar podcastTotal={total} value={textSearched} onChange={jest.fn()} />);

    expect(screen.getByText(total)).toBeInTheDocument();
    expect(screen.getByLabelText('text-searched')).toBeInTheDocument();
  });

  test('when typing text in the search field, the value is passed to the onChange function.', async () => {
    const mockOnChange = jest.fn();
    const newSearch = 'Michael Jackson';

    render(<SearchBar podcastTotal={100} value={''} onChange={mockOnChange} />);

    const input = screen.getByLabelText('text-searched');
    await user.type(input, newSearch);

    expect(mockOnChange).toHaveBeenCalled();
  });
});
