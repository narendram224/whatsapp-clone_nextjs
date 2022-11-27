import { useSession } from 'next-auth/react';
import { LeftSideChatComponent, RightSideChatComponent } from 'src/components';
import MainLayout from '../MainLayout/MainLayout';
import styles from './ChatLayout.module.scss';

const ChatLayout = () => {
  const { status } = useSession();

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
