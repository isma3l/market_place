import { QuantityControl } from '@/modules/cart/components';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('<QuantityControl />', () => {
  const user = userEvent.setup();

  test('render a Component QuantityControl', () => {
    render(<QuantityControl total={3} onDec={jest.fn()} onInc={jest.fn()} />);

    expect(screen.getByLabelText('decrease')).toBeInTheDocument();
    expect(screen.getByLabelText('increase')).toBeInTheDocument();
    expect(screen.getByLabelText('product total')).toBeInTheDocument();
  });

  test('when the buttons to modify the quantity are pressed, the methods increment and decrement are called', async () => {
    const mockedIncrease = jest.fn();
    const mockedDecrease = jest.fn();

    render(<QuantityControl total={3} onDec={mockedDecrease} onInc={mockedIncrease} />);

    await user.click(screen.getByLabelText('decrease'));
    expect(mockedDecrease).toHaveBeenCalled();

    await user.click(screen.getByLabelText('increase'));
    expect(mockedIncrease).toHaveBeenCalled();
  });
});
