import { ChatBoxFooter, ChatBoxHeader, Chat } from 'src/components';
// import { useAppSelector } from 'src/redux/store';
import styles from './ChatBox.module.scss';

const ChatBox = () => {
  // const { selectedUser } = useAppSelector((state) => state.auth);

  return (
    <div id="chatbox" className={styles.chatBoxContainer}>
      <ChatBoxHeader />
      <Chat />
      <ChatBoxFooter />
    </div>
  );
};

export default ChatBox;
