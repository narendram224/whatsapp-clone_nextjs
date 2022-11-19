import { UserListItem } from 'src/components';
import styles from './UserListComponent.module.scss';

const UserListComponent = () => {
  return (
    <section id="user_list" className={styles.userListContainer}>
      <UserListItem />
      <UserListItem />
      <UserListItem />
      <UserListItem />
      <UserListItem /> <UserListItem />
      <UserListItem /> <UserListItem />
    </section>
  );
};

export default UserListComponent;
