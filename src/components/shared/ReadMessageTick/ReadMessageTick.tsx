import { FC } from 'react';
import { Check } from 'react-feather';
import styles from './ReadMessageTick.module.scss';

interface IReadTick {
  isActive: boolean;
  className?: string;
}

const ReadMessageTick: FC<IReadTick> = ({ isActive, className }) => {
  return (
    <div className={`${className}`}>
      <section className={styles.tickActive}>
        <Check
          size={24}
          color={isActive ? '#03a9f4' : 'gray'}
          className={styles.tickicon}
        />
        <Check
          size={20}
          color={isActive ? '#03a9f4' : 'gray'}
          className={styles.tickicon2}
        />
      </section>
    </div>
  );
};
ReadMessageTick.defaultProps = {
  className: '',
};

export default ReadMessageTick;
