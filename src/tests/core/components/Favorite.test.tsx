import { Favorite } from '@/modules/core/components';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('<Favorite />', () => {
  const user = userEvent.setup();

  test('render a Component Favorite', () => {
    render(<Favorite isFavorite={true} addFavorite={jest.fn()} removeFavorite={jest.fn()} />);

    expect(screen.getByAltText('favorite image')).toBeInTheDocument();
  });

  test('when the favorite icon is displayed and the icon is pressed, removeFavorite method is called', async () => {
    const mockRemoveFavorite = jest.fn();
    render(
      <Favorite isFavorite={true} addFavorite={jest.fn()} removeFavorite={mockRemoveFavorite} />,
    );

    const icon = screen.getByAltText('favorite image');
    await user.click(icon);
    expect(mockRemoveFavorite).toHaveBeenCalled();
  });

  test('when the No favorite icon is displayed and the icon is pressed, addFavorite method is called', async () => {
    const mockAddFavorite = jest.fn();
    render(
      <Favorite isFavorite={false} addFavorite={mockAddFavorite} removeFavorite={jest.fn()} />,
    );

    const icon = screen.getByAltText('no favorite image');
    await user.click(icon);
    expect(mockAddFavorite).toHaveBeenCalled();
  });
});
