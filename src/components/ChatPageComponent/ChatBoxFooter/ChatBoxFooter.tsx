/* eslint-disable no-underscore-dangle */
import { UserContext } from 'pages/_app';
import { useContext, useEffect, useState } from 'react';
import { Mic, Smile } from 'react-feather';
import { useDispatch } from 'react-redux';
import PrimaryInput from 'src/components/shared/PrimaryInput/PrimaryInput';
import { actionAddEmitMsg } from 'src/redux/actions/authActions';
import { useAppSelector } from 'src/redux/store';
import FileUploaded from '../FileUploaded/FileUploaded';
import styles from './ChatBoxFooter.module.scss';

const ChatBoxFooter = () => {
  const { selectedUser, userInfo, conversationInfo } = useAppSelector(
    (state) => state.auth,
  );
  const [message, setMessage] = useState('');
  const socket = useContext(UserContext);
  const dispatch = useDispatch();

  const sendMessage = async (e: any) => {
    const msgInfo = {
      senderId: userInfo.id,
      message,
      type: 'message',
      receiverId: selectedUser.id,
      // eslint-disable-next-line no-underscore-dangle
      conversationId: conversationInfo._id,
      createdAt: Date.now(),
    };
    if (e.which === 13 && message.length > 0) {
      socket.emit('sendMessage', msgInfo);
      // await sendMsgToApi(msgInfo);
      dispatch(actionAddEmitMsg(msgInfo));
      socket.emit('typing', { removeTyping: true, id: userInfo.id });
      setMessage('');
    }
  };
  const handleChangeMessage = (e: any) => {
    if (e.target.value.length > 0)
      socket.emit('typing', { removeTyping: false, id: userInfo.id });
    else {
      socket.emit('typing', { removeTyping: true, id: userInfo.id });
    }
    setMessage(e.target.value);
  };
  useEffect(() => {
    if (conversationInfo._id) {
      setMessage('');
    }
  }, [conversationInfo._id]);

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
