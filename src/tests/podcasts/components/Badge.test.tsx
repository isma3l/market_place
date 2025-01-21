import { render, screen } from '@testing-library/react';
import { Badge } from '@/modules/podcasts/components';

describe('<Badge />', () => {
  test('render a Badge', () => {
    const value = 80;

    render(<Badge value={value} />);

    expect(screen.getByText(value)).toBeInTheDocument();
  });
});
