import { UserContext } from 'pages/_app';
import { useContext, useEffect, useState } from 'react';
import { UserListItem } from 'src/components';
import { actionGetAllUser } from 'src/redux/actions/authActions';
import { useAppDispatch, useAppSelector } from 'src/redux/store';
import styles from './UserListComponent.module.scss';

const UserListComponent = ({ searchTerm }: any) => {
  const { userList, activeUsers } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const [isTyping, setIsTyping] = useState<any>({});
  const [lastMessage, setLastMessage] = useState<any>({});

  const socket = useContext(UserContext);

  useEffect(() => {
    if (searchTerm) dispatch(actionGetAllUser(searchTerm));
  }, [searchTerm]);
  useEffect(() => {
    if (socket.on) {
      socket.on('typingResponse', (data: string) => {
        setIsTyping((preState: any) => ({ ...preState, [data]: true }));
      });
      socket.on('typingRemove', (data: any) => {
        setIsTyping((preState: any) => ({ ...preState, [data]: false }));
      });
      socket.on('receivedMessage', (msg: any) => {
        setLastMessage((preState: any) => ({
          ...preState,
          [msg.senderId]: msg.message,
        }));
      });
    }
  }, [socket]);
  return (
    <section id="user_list" className={styles.userListContainer}>
      {userList?.map((user: any) => (
        <UserListItem
          isOnline={activeUsers.some((active: any) => active.id === user.id)}
          isTyping={isTyping[user.id]}
          lastMessage={lastMessage[user.id] || user.lastMessage}
          key={user.id}
          user={user}
        />
      ))}
      {/* <UserListItem /> */}
    </section>
  );
};

export default UserListComponent;
