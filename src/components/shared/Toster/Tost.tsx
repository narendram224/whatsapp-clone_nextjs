import { useContext } from 'react';
import { PhoneCall } from 'react-feather';
import { toast, Toaster, ToastBar } from 'react-hot-toast';
import { SocketContext } from 'src/context/VideoCallContext';
import styles from './Tost.module.scss';

const Tost = ({ handleAnswer }: any) => {
  const { leaveCall, call } = useContext(SocketContext);

  return (
    <Toaster
      toastOptions={{
        className: `${styles.tosterClass}`,
      }}
    >
      {(t) => (
        <ToastBar toast={t}>
          {({ icon }) => (
            <>
              {icon}
              <PhoneCall
                size={20}
                className={`${styles.pickPhon} ${styles.bounce2}`}
                onClick={() => {
                  toast.dismiss(t.id);
                  handleAnswer();
                }}
              />
              <p>{call?.name} is calling</p>

              {t.type !== 'loading' && (
                <PhoneCall
                  size={20}
                  className={styles.rejectCall}
                  onClick={() => {
                    toast.dismiss(t.id);
                    leaveCall();
                  }}
                />
                // <button type="button" onClick={() => toast.dismiss(t.id)}>
                //   X
                // </button>
              )}
            </>
          )}
        </ToastBar>
      )}
    </Toaster>
  );
};

export default Tost;
