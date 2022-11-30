import { UserContext } from 'pages/_app';
import { useContext, useEffect, useState } from 'react';
import { Mic, Smile } from 'react-feather';
import PrimaryInput from 'src/components/shared/PrimaryInput/PrimaryInput';
import { saveUserMessageSocket } from 'src/redux/reducers/authReducer';
import { useAppDispatch, useAppSelector } from 'src/redux/store';
import { sendMsgToApi } from 'src/services/api';
import FileUploaded from '../FileUploaded/FileUploaded';
import styles from './ChatBoxFooter.module.scss';

const ChatBoxFooter = () => {
  const { selectedUser, userInfo, conversationInfo } = useAppSelector(
    (state) => state.auth,
  );
  const [message, setMessage] = useState('');
  const [incomingMsg, setIncomingMsg] = useState(null);
  const contextData = useContext(UserContext);
  const dispatch = useAppDispatch();
  const socket = contextData?.current;

  const sendMessage = async (e: any) => {
    const msgInfo = {
      senderId: userInfo.id,
      message,
      type: 'message',
      receiverId: selectedUser.id,
      // eslint-disable-next-line no-underscore-dangle
      conversationId: conversationInfo._id,
    };
    if (e.which === 13) {
      socket.emit('send_message', msgInfo);

      // await sendMsgToApi(msgInfo);
      setMessage('');
    }
  };
  const handleChangeMessage = (e: any) => {
    setMessage(e.target.value);
  };
  useEffect(() => {
    socket.on('receive_message', (data: any) => {
      setIncomingMsg(data);
    });
  }, []);
  console.log('incomingMsg', incomingMsg);

  // socket.on('receive_message', (msg: any) => {
  //   console.log('[Messgae receive message]');
  //   setIncomingMsg(msg);
  //   // dispatch(saveUserMessageSocket(msg));
  // });

  return (
    <footer id="chatbox-footer" className={styles.chatBoxFooterContainer}>
      <div className={styles.emoji}>
        <Smile />
        <FileUploaded />
      </div>
      <div className={styles.inputContainer}>
        <PrimaryInput
          placeholder="Type a messgae"
          onKeyDown={sendMessage}
          value={message}
          onChange={handleChangeMessage}
        />
        <Mic className={styles.micIcon} />
      </div>
    </footer>
  );
};

export default ChatBoxFooter;
