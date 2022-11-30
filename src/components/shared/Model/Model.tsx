/* eslint-disable jsx-a11y/anchor-is-valid */
import useModel from 'src/hooks/useModel';
import styles from './Model.module.scss';

const Model = ({ children, onClose }: any) => {
  const { handleToggleModel } = useModel();
  const handleClose = () => {
    if (onClose) onClose();
    handleToggleModel();
  };
  return (
    <div id="demo-modal" className={styles.modal}>
      <div className={styles.modal__content} id="modelBody">
        {children}
        <a href="#" onClick={handleClose} className={styles.modal__close}>
          &times;
        </a>
      </div>
    </div>
  );
};

export default Model;
