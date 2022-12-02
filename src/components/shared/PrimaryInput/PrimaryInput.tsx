/* eslint-disable jsx-a11y/aria-role */
/* eslint-disable react/jsx-props-no-spreading */
import styles from './PrimaryInput.module.scss';

const PrimaryInput = ({ className, ...props }: any) => {
  return (
    <div className={styles.inputContainer}>
      <input className={`${className} ${styles.inputfield}`} {...props} />
    </div>
  );
};

export default PrimaryInput;
