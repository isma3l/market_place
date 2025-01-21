import { useStore } from '@/modules/core/store';
import { ItemCart } from '../components';
import { Payment } from '../components/payment/Payment';
import * as styles from './cart.module.scss';

export const Cart = () => {
  const cart = useStore.use.cart();
  const increase = useStore.use.increase();
  const decrease = useStore.use.decrease();

  const total = cart.reduce((acc, next) => acc + next.product.price * next.amount, 0);

  return (
    <section className={styles.container}>
      <Payment amount={total} />
      <div className={styles.container__list}>
        {cart.map((item) => (
          <ItemCart
            item={item}
            onInc={(productId) => increase(productId)}
            onDec={(productId) => decrease(productId)}
          />
        ))}
      </div>
    </section>
  );
};
