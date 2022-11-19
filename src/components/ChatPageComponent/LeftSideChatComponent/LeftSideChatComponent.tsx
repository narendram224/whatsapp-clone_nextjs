import {
  SearchComponent,
  SideMenuHeader,
  UserListComponent,
} from 'src/components';
import styles from './LeftSideChatComponent.module.scss';

const LeftSideChatComponent = () => {
  return (
    <aside id="side_menu" className={styles.sideMenuContainer}>
      <SideMenuHeader />
      <SearchComponent />
      <UserListComponent />
    </aside>
  );
};

export default LeftSideChatComponent;
