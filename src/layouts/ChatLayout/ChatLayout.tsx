import { signOut, useSession } from 'next-auth/react';
import MainLayout from '../MainLayout/MainLayout';

const ChatLayout = () => {
  const { data: session, status } = useSession();

  if (status === 'authenticated') {
    return (
      <MainLayout>
        ChatLayout
        {session?.user?.name}
        <button type="button" onClick={() => signOut()}>
          Signout
        </button>
      </MainLayout>
    );
  }

  return <div>You are not login</div>;
};

export default ChatLayout;
