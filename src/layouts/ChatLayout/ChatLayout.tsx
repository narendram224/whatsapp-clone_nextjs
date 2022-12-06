/* eslint-disable no-underscore-dangle */
import { useSession } from 'next-auth/react';
import { useContext, useEffect } from 'react';
import { LeftSideChatComponent, RightSideChatComponent } from 'src/components';
import VideoCall from 'src/components/ChatPageComponent/VideoCall/VideoCall';
import { SocketContext } from 'src/context/VideoCallContext';
// import useVideoCallModel from 'src/hooks/useVideoCallModel';
import { saveActiveUsers } from 'src/redux/reducers/authReducer';
import { useAppDispatch, useAppSelector } from 'src/redux/store';
import MainLayout from '../MainLayout/MainLayout';
import styles from './ChatLayout.module.scss';

const ChatLayout = () => {
  const { status } = useSession();
  const { call } = useContext(SocketContext);

  const { userInfo } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const { socket } = useContext(SocketContext);
  // const notify = () => toast('Narendra', { duration: '10000' });

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

  // need to working on this part
  // useEffect(() => {
  //   console.log('[Online users]', call.isReceivedCall, !callAccepted);
  //   if (call.isReceivedCall && !callAccepted) {
  //     // toast(name, { duration: 1000000 });
  //     setTimeout(() => {
  //       console.log('Called Accepted');
  //       getMediaPermissions();
  //       answerCall();
  //     }, 1000);
  //   }
  // }, [call.isReceivedCall, callAccepted]);

  // const handleAnswerCall = () => {
  //   getMediaPermissions();
  //   answerCall();
  //   // handleToggleModel();
  // };
  console.log('[Caller info]', call);

  if (status === 'authenticated') {
    return (
      <MainLayout>
        <div className={styles.chatLayoutContainer}>
          <LeftSideChatComponent />
          <RightSideChatComponent />
        </div>
        <VideoCall />

        {/* <Tost handleAnswer={handleAnswerCall} /> */}
      </MainLayout>
    );
  }

  return <div>You are not login</div>;
};

export default ChatLayout;
