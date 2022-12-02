import { useState } from 'react';
import {
  SearchComponent,
  SideMenuHeader,
  UserListComponent,
} from 'src/components';

import styles from './LeftSideChatComponent.module.scss';

const LeftSideChatComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <aside id="side_menu" className={styles.sideMenuContainer}>
      <SideMenuHeader />
      <SearchComponent searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <UserListComponent searchTerm={searchTerm} />
    </aside>
  );
};

export default LeftSideChatComponent;
