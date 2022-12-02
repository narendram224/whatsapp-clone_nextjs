/* eslint-disable no-underscore-dangle */
import { useEffect } from 'react';
import { ChatBoxFooter, ChatBoxHeader, Chat } from 'src/components';
import {
  actionFetchMessages,
  actionFetchUserConversion,
} from 'src/redux/actions/authActions';
import { useAppDispatch, useAppSelector } from 'src/redux/store';
// import { useAppSelector } from 'src/redux/store';
import styles from './ChatBox.module.scss';

const ChatBox = () => {
  const { selectedUser, userInfo, conversationInfo } = useAppSelector(
    (state) => state.auth,
  );
  const dispatch = useAppDispatch();
  // const { socket } = useContext(UserContext);

  useEffect(() => {
    if (selectedUser.id) {
      dispatch(
        actionFetchUserConversion({
          senderId: userInfo?.id,
          receiverId: selectedUser?.id,
        }),
      );
    }
  }, [selectedUser.id]);
  useEffect(() => {
    if (conversationInfo._id) {
      dispatch(actionFetchMessages(conversationInfo._id));
    }
  }, [conversationInfo._id]);

  return (
    <div id="chatbox" className={styles.chatBoxContainer}>
      <ChatBoxHeader />
      <Chat />
      <ChatBoxFooter />
    </div>
  );
};

export default ChatBox;
