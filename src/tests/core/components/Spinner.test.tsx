import { render, screen } from '@testing-library/react';
import { Spinner } from '@/modules/core/components/spinner/Spinner';

describe('<Spinner />', () => {
  test('render a spinner', () => {
    render(<Spinner />);

    expect(screen.getByLabelText('loading')).toBeInTheDocument();
  });
});
