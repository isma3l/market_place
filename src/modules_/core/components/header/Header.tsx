import { Link } from 'react-router-dom';
import { Paths } from '@/modules/core/routes';
import { usePodcastStore } from '@/modules/core/store';
import { Spinner } from '../spinner/Spinner';
import * as styles from './header.module.scss';

export const Header = () => {
  const { isLoading } = usePodcastStore();

  return (
    <Link to={Paths.base}>
      <header className={styles.header}>
        <span className={styles.header__logo} aria-label='logo'>
          Podcaster
        </span>
        {isLoading && <Spinner />}
      </header>
    </Link>
  );
};
