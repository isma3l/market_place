import { ProductInterface } from './Product.interface';

export interface CartItemInterface {
  product: ProductInterface;
  amount: number;
}
