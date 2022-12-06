/* eslint-disable jsx-a11y/media-has-caption */
import { useContext, useEffect, useState } from 'react';
import {
  MessageSquare,
  Mic,
  Phone,
  PhoneCall,
  PhoneIncoming,
  PhoneMissed,
  PhoneOff,
} from 'react-feather';
import { SocketContext } from 'src/context/VideoCallContext';
import { useAppSelector } from 'src/redux/store';
import styles from './VideoLayout.module.scss';

const VideoLayout = () => {
  const {
    name,
    callAccepted,
    myVideo,
    userVideo,
    callEnded,
    call,
    answerCall,
    leaveCall,
    callUser,
  } = useContext(SocketContext);
  console.log('[UserVideo]', userVideo, callAccepted, callEnded, call);
  const { selectedUser } = useAppSelector((state) => state.auth);
  const [isCalling, setisCalling] = useState(false);

  useEffect(() => {
    console.log('Caleed effect');
  }, [userVideo.current]);

  return (
    <div className={styles.header}>
      {/* <nav className={styles.nav}>
        <img
          src="https://i.postimg.cc/Sx0ZGtQJ/logo.png"
          className={styles.logo}
          alt="logo"
        />
        <ul>
          <li>
            <img
              src="https://i.postimg.cc/L8zxQBhv/live.png"
              className={styles.active}
              alt="Active"
            />
          </li>
          <li>
            <img
              src="https://i.postimg.cc/JnggC78Q/video.png"
              alt="videoPlayer"
            />
          </li>
          <li>
            <img
              src="https://i.postimg.cc/vmb3JgVy/message.png"
              alt="messgaePlayer"
            />
          </li>
          <li>
            <img
              src="https://i.postimg.cc/qR7Q7PwZ/notification.png"
              alt="notfi"
            />
          </li>
          <li>
            <img src="https://i.postimg.cc/k4DZH604/users.png" alt="users" />
          </li>
          <li>
            <img
              src="https://i.postimg.cc/v84Fqkyz/setting.png"
              alt="settings"
            />
          </li>
        </ul>
      </nav> */}
      <div className={styles.container}>
        <div className={styles.topIcons}>
          {/* <img src="https://i.postimg.cc/cCpcXrSV/search.png" alt="search" />
          <img src="https://i.postimg.cc/Pqy2TXWw/menu.png" alt="menu" /> */}
        </div>
        <div className={styles.row}>
          <div className={styles.col1}>
            {callAccepted && !callEnded ? (
              <video
                id="user-video"
                playsInline
                ref={userVideo}
                autoPlay
                className={styles.userVideo}
              />
            ) : (
              <img
                src="https://i.postimg.cc/521rVkhD/image.png"
                className={styles.hostImg}
                alt="hostName"
              />
            )}
            <div className={styles.contarols}>
              <MessageSquare size={40} className={styles.mic} />
              <PhoneOff size={40} className={styles.mic} />
              <Phone
                size={70}
                className={styles.phone}
                onClick={() => leaveCall()}
              />
              <Mic size={40} className={styles.mic} />
            </div>
          </div>
          <div className={styles.col2}>
            <div className={styles.joined}>
              <p>People Joined {name}</p>
              <video
                id="my-video"
                playsInline
                muted
                ref={myVideo}
                autoPlay
                className={styles.video}
              />
              {call.isReceivedCall && !callAccepted ? (
                <section className={styles.Info}>
                  <h1>{call.name} is calling</h1>
                  <section className={styles.callingInfo}>
                    <PhoneIncoming
                      size={20}
                      className={`${styles.pickPhon} ${styles.bounce2}`}
                      onClick={answerCall}
                    />
                    <PhoneMissed
                      size={20}
                      className={styles.rejectCall}
                      onClick={() => {
                        leaveCall();
                      }}
                    />
                  </section>
                </section>
              ) : null}

              <section className={styles.endButton}>
                {!call.isReceivedCall && (
                  <section className={styles.callUser}>
                    <h1>
                      Call <span>{selectedUser.name}</span>
                    </h1>
                    <PhoneCall
                      fontSize="large"
                      className={`${styles.pickPhon} ${styles.btnFull} `}
                      onClick={() => {
                        if (!isCalling) {
                          callUser();
                        }
                        setisCalling(true);
                      }}
                    />
                  </section>
                )}
              </section>

              {/* <div>
                <img
                  src="https://i.postimg.cc/WzFnG0QG/people-1.png"
                  alt="peppole"
                />
                <img
                  src="https://i.postimg.cc/fRhGbb92/people-2.png"
                  alt="perop2"
                />
                <img
                  src="https://i.postimg.cc/02mgxSbK/people-3.png"
                  alt="perop3"
                />
                <img
                  src="https://i.postimg.cc/K8rd3y7Z/people-4.png"
                  alt="perop4"
                />
                <img
                  src="https://i.postimg.cc/HWFGfzsC/people-5.png"
                  alt="perop25"
                />
              </div> */}
            </div>
            {/* <div className={styles.invite}>
              <p>Invite More People</p>
              <div>
                <img
                  src="https://i.postimg.cc/7LHjgQXS/user-1.png"
                  alt="user"
                />
                <img
                  src="https://i.postimg.cc/q71SQXZS/user-2.png"
                  alt="user1"
                />
                <img
                  src="https://i.postimg.cc/h4kwCGpD/user-3.png"
                  alt="user3"
                />
                <img
                  src="https://i.postimg.cc/GtyfL0hn/user-4.png"
                  alt="user4"
                />
                <img
                  src="https://i.postimg.cc/FFd8gSbC/user-5.png"
                  alt="user5"
                />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoLayout;
