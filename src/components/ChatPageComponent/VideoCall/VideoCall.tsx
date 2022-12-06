/* eslint-disable jsx-a11y/anchor-is-valid */
import { useRouter } from 'next/router';
import useVideoCallModel from 'src/hooks/useVideoCallModel';
import VideoLayout from 'src/layouts/VideoCallLayout/videoLayout';
import styles from './VideoCall.module.scss';

const VideoCall = () => {
  const { handleToggleModel } = useVideoCallModel();
  const router = useRouter();
  const handleClose = () => {
    // if (onClose) onClose();
    handleToggleModel();
    router.reload();
  };
  // console.log('hanle caled');

  return (
    <div id="videoCallModel" className={styles.modal}>
      <div className={styles.modal__content} id="modelBody">
        <VideoLayout />
        <a href="#" onClick={handleClose} className={styles.modal__close}>
          &times;
        </a>
      </div>
    </div>
  );
};

export default VideoCall;
