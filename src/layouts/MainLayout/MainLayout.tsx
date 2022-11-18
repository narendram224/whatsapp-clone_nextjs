import { FC, ReactNode } from 'react';
import styles from './MainLayout.module.scss';

interface IMainLayout {
  children: ReactNode;
}

const MainLayout: FC<IMainLayout> = ({ children }) => {
  return (
    <main id="main_layout" className={styles.mainLayoutContainer}>
      {children}
    </main>
  );
};

export default MainLayout;
