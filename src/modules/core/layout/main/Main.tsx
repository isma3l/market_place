import { Outlet } from 'react-router-dom';
import * as styles from './main.module.scss';
import { Header } from '@/modules/core/components';

export const MainLayout = () => {
  return (
    <main className={styles.main}>
      <Header />
      <Outlet />
    </main>
  );
};
