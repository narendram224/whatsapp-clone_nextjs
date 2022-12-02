import { ChatBox, DefaultChatScreen } from 'src/components';
import { useAppSelector } from 'src/redux/store';
import styles from './RightSideChatComponent.module.scss';

const RightSideChatComponent = () => {
  const { selectedUser } = useAppSelector((state) => state.auth);

  return (
    <section className={styles.chatSection}>
      {selectedUser?.id ? <ChatBox /> : <DefaultChatScreen />}
    </section>
  );
};

export default RightSideChatComponent;
