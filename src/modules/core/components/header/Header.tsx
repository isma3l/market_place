import { Link, useLocation } from 'react-router-dom';
import goBack from '@/assets/png/goback.png';
import iconCart from '@/assets/png/iconCart.png';
import favorite from '@/assets/png/favoriteHeader.png';
import { Paths } from '../../routes';
import * as styles from './header.module.scss';

export const Header = () => {
  const location = useLocation();

  return (
    <header className={styles.content}>
      <Link
        to={Paths.base}
        className={`${styles.content__link} ${styles.content__hide} ${location.pathname === Paths.base ? styles.content__noVisible : ''}`}
      >
        <img src={goBack} className={styles.content__icon} alt='go back' />
      </Link>
      <div>
        <Link to={Paths.favorites} className={styles.content__link}>
          <img src={favorite} className={styles.content__icon} alt='go favorites' />
        </Link>
        <Link to={Paths.cart} className={`${styles.content__link} ${styles.content__hide}`}>
          <img src={iconCart} className={styles.content__icon} alt='go cart' />
        </Link>
      </div>
    </header>
  );
};
