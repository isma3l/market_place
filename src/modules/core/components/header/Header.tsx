import { Link } from 'react-router-dom';
import goBack from '@/assets/png/goback.png';
import iconCart from '@/assets/png/iconCart.png';
import favoriteFull from '@/assets/png/favoriteFull.png';
import { Paths } from '../../routes';
import * as styles from './header.module.scss';

export const Header = () => {
  return (
    <header className={styles.content}>
      <Link to={Paths.base} className={`${styles.content__link} ${styles.content__hide}`}>
        <img src={goBack} className={styles.content__icon} alt='go back' />
      </Link>
      <div>
        <button className={styles.content__link}>
          <img src={favoriteFull} className={styles.content__icon} alt='go favorites' />
        </button>
        <Link to={Paths.cart} className={`${styles.content__link} ${styles.content__hide}`}>
          <img src={iconCart} className={styles.content__icon} alt='go cart' />
        </Link>
      </div>
    </header>
  );
};
