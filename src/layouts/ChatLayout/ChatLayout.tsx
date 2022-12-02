/* eslint-disable no-underscore-dangle */
import { useSession } from 'next-auth/react';
import { UserContext } from 'pages/_app';
import { useContext, useEffect } from 'react';
import { LeftSideChatComponent, RightSideChatComponent } from 'src/components';
import { saveActiveUsers } from 'src/redux/reducers/authReducer';
import { useAppDispatch, useAppSelector } from 'src/redux/store';
import MainLayout from '../MainLayout/MainLayout';
import styles from './ChatLayout.module.scss';

const ChatLayout = () => {
  const { status } = useSession();
  const { userInfo } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const socket = useContext(UserContext);
  // const socket = contextData?.current;

  useEffect(() => {
    if (userInfo._id && socket?.emit) {
      socket?.emit('add-user', userInfo);
      socket?.on('get-users', (users: any[]) => {
        console.log('[Online users]', users);
        dispatch(saveActiveUsers(users));
      });
    }
  }, [userInfo, socket]);

  if (status === 'authenticated') {
    return (
      <MainLayout>
        <div className={styles.chatLayoutContainer}>
          <LeftSideChatComponent />
          <RightSideChatComponent />
        </div>
        {/* {session?.user?.name}
        <button type="button" onClick={() => signOut()}>
          Signout
        </button> */}
      </MainLayout>
    );
  }

  return <div>You are not login</div>;
};

export default ChatLayout;
