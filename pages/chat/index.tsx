import { getSession } from 'next-auth/react';
import React from 'react';
import { IUser } from 'src/interface/userInfo.interface';
import { ChatLayout } from 'src/layouts';
import { actionAddUser, actionGetAllUser } from 'src/redux/actions/authActions';
import { saveDeviceInfo } from 'src/redux/reducers/appReducer';
import { initializeStore } from 'src/redux/store';
import { getUserAgent } from 'src/utils/helper';

const ChatPage = () => {
  return <ChatLayout />;
};

export default ChatPage;

export const getServerSideProps = async (context: any) => {
  const reduxStore = initializeStore({});
  const { dispatch } = reduxStore;
  const uaString: any = context.req.headers['user-agent'];
  dispatch(saveDeviceInfo(getUserAgent(uaString)));
  console.log('info', getUserAgent(uaString));
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: '/',
      },
    };
  }
  try {
    dispatch(actionGetAllUser());
    // dispatch(actionGetAllUser());
    dispatch(actionAddUser(session?.user as IUser));
  } catch (e) {
    return {
      redirect: {
        destination: '/',
      },
    };
  }

  return {
    props: { session },
  };
};
