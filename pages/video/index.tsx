/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/media-has-caption */
import { getSession } from 'next-auth/react';
import { useContext, useEffect, useRef, useState } from 'react';
import { Phone } from 'react-feather';
import { SocketContext } from 'src/context/VideoCallContext';
import { IUser } from 'src/interface/userInfo.interface';
import { saveDeviceInfo } from 'src/redux/reducers/appReducer';
import {
  saveActiveUsers,
  saveAllUsers,
  saveUserInfo,
} from 'src/redux/reducers/authReducer';
import {
  initializeStore,
  useAppDispatch,
  useAppSelector,
} from 'src/redux/store';
import { addUser, getAllUsers } from 'src/services/api';
import { getUserAgent } from 'src/utils/helper';

// import styles from './video.module.scss';

const Peer = require('simple-peer');

const VideoPage = () => {
  // const [me, setme] = useState('');
  const [stream, setStream] = useState('');
  const [receivingCall, setReceivingCall] = useState(false);
  const [callerSignal, setCallerSignal] = useState(null);
  const [callAccepted, setCallAccepted] = useState(false);
  const [callEnded, setCallEnded] = useState(false);
  const [idToCall, setIdToCall] = useState('');
  const [name, setName] = useState('');
  const myVideo = useRef<any>(null);
  const userVideo = useRef<any>();
  const connectionRef = useRef<any>();
  const { socket } = useContext(SocketContext);
  const dispatch = useAppDispatch();

  const { userInfo } = useAppSelector((state) => state.auth);
  const getMediaStream = async () => {
    try {
      const steamData: any = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
      setStream(steamData);
      myVideo.current.srcObject = steamData;
    } catch (error) {
      console.log('Permission defined', error);
    }
  };

  const callUser = (id: any) => {
    console.log('Call user', id);
    const peer = new Peer({
      initiator: true,
      trickle: false,
      stream,
    });
    peer.on('signal', (data: any) => {
      socket.emit('callUser', {
        userToCall: id,
        signalData: data,
        from: 'samar',
        name,
      });
    });
    peer.on('stream', (streamData: any) => {
      console.log('[user] Connected', userVideo);

      userVideo.current.srcObject = streamData;
    });
    socket.on('callAccepted', (signal: any) => {
      console.log('Accept call');

      setCallAccepted(true);
      peer.signal(signal);
    });

    connectionRef.current = peer;
  };
  const answerCall = () => {
    setCallAccepted(true);
    const peer = new Peer({
      initiator: false,
      trickle: false,
      stream,
    });
    peer.on('signal', (data: any) => {
      socket.emit('answerCall', { signal: data, to: 'J1H1rEytKnG73_1sAAAF' });
    });
    peer.on('stream', (streamD: any) => {
      userVideo.current.srcObject = streamD;
    });

    peer.signal(callerSignal);
    connectionRef.current = peer;
  };

  const leaveCall = () => {
    setCallEnded(true);
    connectionRef.current.destroy();
  };

  useEffect(() => {
    getMediaStream();
  }, []);
  useEffect(() => {
    if (socket.on) {
      socket.on('callUser', (data: any) => {
        setReceivingCall(true);
        setName('ram');
        setCallerSignal(data.signal);
      });
    }
  }, [socket]);
  useEffect(() => {
    console.log('[Socket]', socket, userInfo);
    if (userInfo._id && socket?.emit) {
      socket?.emit('add-user', userInfo);
      socket?.on('get-users', (users: any[]) => {
        console.log('[Online users]', users);
        dispatch(saveActiveUsers(users));
      });
    }
  }, [userInfo, socket]);

  return (
    <>
      <h1 style={{ textAlign: 'center', color: '#fff' }}>Zoomish</h1>
      <div className="container">
        <div className="video-container">
          <div className="video">
            {stream && (
              <video
                playsInline
                muted
                ref={myVideo}
                autoPlay
                style={{ width: '300px' }}
              />
            )}
          </div>
          <div className="video">
            {callAccepted && !callEnded ? (
              <video
                playsInline
                ref={userVideo}
                autoPlay
                style={{ width: '300px' }}
              />
            ) : null}
          </div>
        </div>
        <div className="myId">
          <input
            type="text"
            id="filled-basic"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ marginBottom: '20px' }}
          />
          <button
            type="button"
            // variant="contained"
            // color="primary"
            // startIcon={<AssignmentIcon fontSize="large" />}
          >
            Copy ID
          </button>

          <input
            id="filled-basic"
            type="text"
            value={idToCall}
            onChange={(e) => setIdToCall(e.target.value)}
          />
          <div className="call-button">
            {callAccepted && !callEnded ? (
              <button type="button" onClick={leaveCall}>
                End Call
              </button>
            ) : (
              <button
                type="button"
                color="primary"
                aria-label="call"
                onClick={() => callUser(idToCall)}
              >
                call A user
                <Phone size={30} />
              </button>
            )}
            {idToCall}
          </div>
        </div>
        <div>
          {receivingCall && !callAccepted ? (
            <div className="caller">
              <h1>{name} is calling...</h1>
              <button type="button" onClick={answerCall}>
                Answer
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default VideoPage;

export const getServerSideProps = async (context: any) => {
  const reduxStore = initializeStore({});
  const { dispatch } = reduxStore;
  const uaString: any = context.req.headers['user-agent'];
  dispatch(saveDeviceInfo(getUserAgent(uaString)));
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/',
      },
    };
  }
  try {
    const { data } = await getAllUsers();
    const { data: user } = await addUser(session?.user as IUser);
    dispatch(saveAllUsers(data?.users));
    dispatch(saveUserInfo(user?.user));
  } catch (e) {
    console.error(e);
    // return {
    //   redirect: {
    //     destination: '/',
    //   },
    // };
  }

  return {
    props: { session, initialReduxState: reduxStore.getState() },
  };
};
