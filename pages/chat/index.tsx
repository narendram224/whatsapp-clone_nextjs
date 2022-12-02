import { getSession } from 'next-auth/react';
import React from 'react';
import { IUser } from 'src/interface/userInfo.interface';
import { ChatLayout } from 'src/layouts';
import { saveDeviceInfo } from 'src/redux/reducers/appReducer';
import { saveAllUsers, saveUserInfo } from 'src/redux/reducers/authReducer';
import { initializeStore } from 'src/redux/store';
import { addUser, getAllUsers } from 'src/services/api';
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
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/',
      },
    };
  }
  try {
    const { data } = await getAllUsers();
    const { data: user } = await addUser(session?.user as IUser);
    dispatch(saveAllUsers(data?.users));
    dispatch(saveUserInfo(user?.user));
  } catch (e) {
    console.error(e);
    // return {
    //   redirect: {
    //     destination: '/',
    //   },
    // };
  }

  return {
    props: { session, initialReduxState: reduxStore.getState() },
  };
};
