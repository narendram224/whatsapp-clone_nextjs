/* eslint-disable no-underscore-dangle */
import { UserContext } from 'pages/_app';
import { useContext, useEffect, useRef } from 'react';
import { ArrowDownCircle, FileText } from 'react-feather';
import ReadMessageTick from 'src/components/shared/ReadMessageTick/ReadMessageTick';
import { saveUserMessageSocket } from 'src/redux/reducers/authReducer';
import { useAppDispatch, useAppSelector } from 'src/redux/store';
import {
  docChecker,
  downloadMedia,
  getMinutesBetweenDates,
} from 'src/utils/helper';
import styles from './Chat.module.scss';

const MessageChat = ({ message, createdAt }: any) => {
  const messageTimeInMints = getMinutesBetweenDates(
    new Date(createdAt),
    new Date(),
  );
  return (
    <>
      <p>{message}</p>
      <ReadMessageTick isActive className={styles.tickContent} />
      <small className={styles.timer}>{messageTimeInMints}</small>
    </>
  );
};

const ImageChat = ({
  createdAt,
  message,
  imageText,
  extension,
  ...props
}: any) => {
  const messageTimeInMints = getMinutesBetweenDates(
    new Date(createdAt),
    new Date(),
  );
  console.log('Extenstion: ', props);

  return (
    <div className={styles.imageMessgae}>
      {docChecker(extension, message?.split('/')?.pop()) ? (
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
      <small className={styles.timer}>{messageTimeInMints}</small>
    </div>
  );
};

const msgType = ({ type, ...props }: any) => {
  console.log('[props]', props);

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
  const socket = useContext(UserContext);

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
  useEffect(() => {
    scrollDiv.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'nearest',
    });
  }, [userConversionInfo?.messages]);
  useEffect(() => {
    socket.on('receivedMessage', (msg: any) => {
      dispatch(saveUserMessageSocket(msg));
    });
  }, []);
  return (
    <div style={bgStyles} className={styles.chat}>
      {userConversionInfo?.messages?.map((msg: any) => {
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
