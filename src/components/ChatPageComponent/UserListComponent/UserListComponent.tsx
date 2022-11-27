import { useEffect } from 'react';
import { UserListItem } from 'src/components';
import { actionGetAllUser } from 'src/redux/actions/authActions';
import { useAppDispatch, useAppSelector } from 'src/redux/store';
import styles from './UserListComponent.module.scss';

const UserListComponent = ({ searchTerm }: any) => {
  const { userList } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const handleSelectedUser = (e: any) => {
    // dispatch();
    console.log('Event received', e);
  };
  useEffect(() => {
    if (userList) dispatch(actionGetAllUser(searchTerm));
  }, [searchTerm]);

  return (
    <section
      id="user_list"
      className={styles.userListContainer}
      onClick={handleSelectedUser}
      role="button"
      onKeyDown={handleSelectedUser}
      tabIndex={0}
    >
      {userList?.map((user: any) => (
        <UserListItem key={user.id} user={user} />
      ))}
      {/* <UserListItem /> */}
    </section>
  );
};

export default UserListComponent;
