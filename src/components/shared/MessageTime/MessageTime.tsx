import { FC } from 'react';
import styles from './MessageTime.module.scss';

interface IMessageTime {
  className?: string;
}

const MessageTime: FC<IMessageTime> = ({ className }) => {
  return <div className={`${className} ${styles.msgTime}`}>12:00 am</div>;
};

MessageTime.defaultProps = {
  className: '',
};

export default MessageTime;
