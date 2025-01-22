import { Link, useLocation, useNavigate } from 'react-router-dom';
import goBack from '@/assets/png/goback.png';
import iconCart from '@/assets/png/iconCart.png';
import favoriteHeader from '@/assets/png/favoriteHeader.png';
import { Paths } from '../../routes';
import * as styles from './header.module.scss';

export const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <header className={styles.content}>
      <div>
        <button
          onClick={() => navigate(-1)}
          className={`${styles.content__link} ${styles.content__hide} ${location.pathname === Paths.base ? styles.content__noVisible : ''}`}
        >
          <img src={goBack} className={styles.content__icon} alt='go back' />
        </button>
        <Link to={Paths.base} className={styles.content__home}>
          <span>Home</span>
        </Link>
      </div>

      <div>
        <Link to={Paths.favorites} className={styles.content__link}>
          <img src={favoriteHeader} className={styles.content__icon} alt='go favorites' />
        </Link>
        <Link to={Paths.cart} className={`${styles.content__link} ${styles.content__hide}`}>
          <img src={iconCart} className={styles.content__icon} alt='go cart' />
        </Link>
      </div>
    </header>
  );
};
