/* eslint-disable no-underscore-dangle */
import { UserContext } from 'pages/_app';
import { useContext, useEffect, useRef, useState } from 'react';
import { ArrowDownCircle, FileText } from 'react-feather';
import ReadMessageTick from 'src/components/shared/ReadMessageTick/ReadMessageTick';
import {
  saveActiveUsers,
  saveUserMessageSocket,
} from 'src/redux/reducers/authReducer';
import { useAppDispatch, useAppSelector } from 'src/redux/store';
import {
  docChecker,
  downloadMedia,
  getMinutesBetweenDates,
} from 'src/utils/helper';
import styles from './Chat.module.scss';

const MessageChat = ({ message, createdAt }: any) => {
  // const messageTimeInMints = getMinutesBetweenDates(
  //   new Date(createdAt),
  //   new Date(),
  // );
  return (
    <>
      <p>{message}</p>
      <ReadMessageTick isActive className={styles.tickContent} />
      {/* <small className={styles.timer}>{messageTimeInMints}</small> */}
    </>
  );
};

const ImageChat = ({ createdAt, message, imageText, extension }: any) => {
  // const messageTimeInMints = getMinutesBetweenDates(
  //   new Date(createdAt),
  //   new Date(),
  // );
  return (
    <div className={styles.imageMessgae}>
      {docChecker(extension) ? (
        <>
          <FileText size={20} />
          <p className={styles.fileName}>{message?.split('/')?.pop()}</p>
        </>
      ) : (
        <img
          src={message}
          width={200}
          height={200}
          className={styles.img}
          alt="upload_url"
        />
      )}
      <p>{imageText}</p>
      <ArrowDownCircle
        size={20}
        className={styles.downloadFile}
        onClick={(e) => downloadMedia(e, message)}
      />
      <ReadMessageTick isActive className={styles.tickContent} />
      {/* <small className={styles.timer}>{messageTimeInMints}</small> */}
    </div>
  );
};

const msgType = ({ type, ...props }: any) => {
  switch (type) {
    case 'message':
      return <MessageChat {...props} />;
    case 'image':
      return <ImageChat {...props} />;

    default:
      return <MessageChat {...props} />;
  }
};
const ReceiverMessage = ({ messageInfo }: any) => (
  <div className={styles.receiverMsg}>{msgType(messageInfo)}</div>
);
const SenderMessage = ({ messageInfo }: any) => (
  <div className={styles.senderMsg}>{msgType(messageInfo)}</div>
);

const Chat = () => {
  const { userConversionInfo, userInfo } = useAppSelector(
    (state) => state.auth,
  );
  const dispatch = useAppDispatch();
  const contextData = useContext(UserContext);
  const [currentMsg, setcurrentMsg] = useState([]);
  const socket = contextData?.current;

  const scrollDiv = useRef<any>();
  const img2 =
    'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png';

  const bgStyles = {
    backgroundImage: `url('${img2}')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100%',
    height: '84vh',
  };
  console.log('socket');

  useEffect(() => {
    scrollDiv.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'nearest',
    });
  }, [userConversionInfo?.messages]);

  useEffect(() => {
    console.log('user Info', userInfo);

    if (userInfo._id) {
      socket.emit('add-user', userInfo);
      socket.on('get-users', (users: any[]) => {
        console.log('[Online users]', users);
        dispatch(saveActiveUsers(users));
      });
    }
  }, [userInfo]);

  useEffect(() => {
    socket.on('receive_message', (msg: any) => {
      console.log('[Messgae receive message]', msg);
      setcurrentMsg((pre: any) => [...pre, msg]);

      // dispatch(saveUserMessageSocket(msg));
    });
  }, []);
  console.log('userConversionInfo', userConversionInfo);

  return (
    <div style={bgStyles} className={styles.chat}>
      {currentMsg?.map((msg: any) => {
        return (
          <div key={msg._id}>
            {msg?.senderId === userInfo?.id ? (
              <SenderMessage messageInfo={msg} />
            ) : (
              <ReceiverMessage messageInfo={msg} />
            )}
          </div>
        );
      })}
      <div style={{ float: 'left', clear: 'both' }} ref={scrollDiv} />
    </div>
  );
};

export default Chat;
