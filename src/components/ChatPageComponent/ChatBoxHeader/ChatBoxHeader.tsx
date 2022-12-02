/* eslint-disable no-underscore-dangle */
import { UserContext } from 'pages/_app';
import { useContext, useEffect, useState } from 'react';
import { MoreVertical, Search } from 'react-feather';
import Typography from 'src/components/shared/Typography/Typography';
import { useAppSelector } from 'src/redux/store';
import { ASSETS_OBJ } from 'src/utils/assetsObject';
import styles from './ChatBoxHeader.module.scss';

const ChatBoxHeader = () => {
  const { selectedUser, activeUsers } = useAppSelector((state) => state.auth);
  const [isTyping, setIsTyping] = useState(false);
  const socket = useContext(UserContext);

  useEffect(() => {
    socket.on('typingResponse', (data: string) => {
      setIsTyping(selectedUser.id === data);
    });
    socket.on('typingRemove', () => {
      setIsTyping(false);
    });
  }, [socket]);
  return (
    <header id="chatbox-header" className={styles.chatBoxHeaderContainer}>
      <div className={styles.statusContainer}>
        <div className={styles.profile}>
          <img
            src={selectedUser?.image || ASSETS_OBJ.user}
            width={30}
            height={30}
            className={styles.profilePicture}
            alt="user profile"
          />
        </div>
        <Typography type="h6">{selectedUser?.name}</Typography>
        <Typography type="p" className={styles.online}>
          {activeUsers.find((user: any) => user._id === selectedUser._id)
            ? 'online'
            : 'offline'}
          {isTyping ? <div className={styles.border} /> : ''}
          <span>{isTyping ? 'typing ....' : ''}</span>
        </Typography>
      </div>
      <div className={styles.moreOption}>
        <Search size={20} />
        <MoreVertical size={20} />
      </div>
    </header>
  );
};

export default ChatBoxHeader;
