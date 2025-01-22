import { formatPrice } from '@/modules/core/utils';
import { QuantityControl } from '../quantityControl/QuantityControl';
import * as styles from './itemCart.module.scss';
import { CartItemInterface } from '@/modules/core/models';

type Props = {
  item: CartItemInterface;
  onInc: (productId: string) => void;
  onDec: (productId: string) => void;
};

export const ItemCart = ({ onInc, onDec, item }: Props) => {
  return (
    <article className={styles.item} role='listitem'>
      <figure className={styles.item__wrapperImage}>
        <img className={styles.item__image} src={item.product.image_url} alt='item cart' />
      </figure>
      <div className={styles.item__contentName}>
        <span className={styles.item__name}>{item.product.productName}</span>
        <QuantityControl
          total={item.amount}
          onInc={() => onInc(item.product.id)}
          onDec={() => onDec(item.product.id)}
        />
      </div>
      <span className={styles.item__price}>{formatPrice(item.product.price)}</span>
    </article>
  );
};
