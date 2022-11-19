import { FC } from 'react';
import styles from './MessageCount.module.scss';

interface IMessageTime {
  className?: string;
}
const MessageCount: FC<IMessageTime> = ({ className }) => {
  return <div className={`${className} ${styles.msgCount}`}>13</div>;
};
MessageCount.defaultProps = {
  className: '',
};

export default MessageCount;
