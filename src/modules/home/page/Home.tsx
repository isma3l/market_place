import Cart from '@/modules/cart';
import { ProductList } from '../components/productList/ProducList';
import * as styles from './home.module.scss';

export const Home = () => {
  return (
    <div className={styles.home}>
      <ProductList />
      <div className={styles.home__containerCart}>
        <Cart />
      </div>
    </div>
  );
};
