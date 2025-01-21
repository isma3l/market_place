import { formatPrice } from '@/modules/core/utils';
import * as styles from './payment.module.scss';

type Props = {
  amount: number;
};

export const Payment = ({ amount }: Props) => {
  return (
    <div className={styles.payment}>
      <span className={styles.payment__label}>Pago total</span>
      <span>{formatPrice(amount)}</span>
    </div>
  );
};
