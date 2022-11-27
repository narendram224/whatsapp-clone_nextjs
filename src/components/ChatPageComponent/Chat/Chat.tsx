import styles from './Chat.module.scss';

const Chat = () => {
  const img2 =
    'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png';

  const bgStyles = {
    backgroundImage: `url('${img2}')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100%',
    height: '84vh',
  };

  return (
    <div style={bgStyles} className={styles.chat}>
      Chat
    </div>
  );
};

export default Chat;
