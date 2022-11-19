import DefaultChatScreen from '../DefaultChatScreen/DefaultChatScreen';
import styles from './RightSideChatComponent.module.scss';

const RightSideChatComponent = () => {
  return (
    <section className={styles.chatSection}>
      <DefaultChatScreen />
    </section>
  );
};

export default RightSideChatComponent;
