import { Mic, Paperclip, Smile } from 'react-feather';
import PrimaryInput from 'src/components/shared/PrimaryInput/PrimaryInput';
import styles from './ChatBoxFooter.module.scss';

const ChatBoxFooter = () => {
  return (
    <footer id="chatbox-footer" className={styles.chatBoxFooterContainer}>
      <div className={styles.emoji}>
        <Smile />
        <Paperclip />
      </div>
      <div className={styles.inputContainer}>
        <PrimaryInput placeholder="Type a messgae" />
        <Mic className={styles.micIcon} />
      </div>
    </footer>
  );
};

export default ChatBoxFooter;
