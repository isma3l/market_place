import { Outlet } from 'react-router-dom';
import { Header } from '../components';
import { layout } from './rootLayout.module.scss';

export const RootLayout = () => {
  return (
    <div className={layout}>
      <Header />
      <Outlet />
    </div>
  );
};
