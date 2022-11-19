import { getSession } from 'next-auth/react';
import React from 'react';
import { ChatLayout } from 'src/layouts';

const ChatPage = () => {
  return <ChatLayout />;
};

export default ChatPage;

export const getServerSideProps = async (context: any) => {
  const session = await getSession(context);
  // if (!session) {
  //   return {
  //     redirect: {
  //       destination: '/',
  //     },
  //   };
  // }

  return {
    props: { session },
  };
};
