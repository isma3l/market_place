import { Product } from '@/modules/core/components';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMockProduct } from '../../utils';
import { ProductInterface } from '@/modules/core/models';

describe('<Product />', () => {
  const user = userEvent.setup();
  const mockedProduct = createMockProduct(1)[0];

  test('render a Product', () => {
    render(<Product product={mockedProduct} updateFavorite={jest.fn()} addProduct={jest.fn()} />);

    expect(screen.getByAltText('product image')).toHaveAttribute('src', mockedProduct.image_url);
    expect(screen.getByText(mockedProduct.productName)).toBeInTheDocument();
    expect(screen.getByText(/Stock:/i)).toHaveTextContent(`Stock: ${mockedProduct.stock}`);
  });

  test('when the add button and favorite icon are pressed, the add product method and update favorite are called', async () => {
    const mockedUpdateFavorite = jest.fn();
    const mockedAddProduct = jest.fn();

    render(
      <Product
        product={mockedProduct}
        updateFavorite={mockedUpdateFavorite}
        addProduct={mockedAddProduct}
      />,
    );

    await user.click(screen.getByRole('button'));
    expect(mockedAddProduct).toHaveBeenCalled();

    await user.click(screen.getByAltText('no favorite image'));
    expect(mockedUpdateFavorite).toHaveBeenCalled();
  });

  test('when the stock is zero then the add button is shown disabled', () => {
    const product: ProductInterface = { ...mockedProduct, stock: 0 };

    render(<Product product={product} updateFavorite={jest.fn()} addProduct={jest.fn()} />);

    expect(screen.getByRole('button')).toBeDisabled();
  });
});
