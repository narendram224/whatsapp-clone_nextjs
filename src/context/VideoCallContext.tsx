import { createContext, useEffect, useRef, useState } from 'react';
import Peer from 'simple-peer';
import { io } from 'socket.io-client';
import useVideoCallModel from 'src/hooks/useVideoCallModel';
import { useAppSelector } from 'src/redux/store';
import { SOCKET_URL } from 'src/utils/constant';
// import * as io from 'socket.io-client';

const Socket = io(SOCKET_URL);
const SocketContext = createContext<any>('');

const ContextProvider = ({ children }: any) => {
  const [stream, setStream] = useState<any>(null);
  const [call, setCall] = useState<any>({});
  const [callAccepted, setCallAccepted] = useState<any>(false);
  const [callEnded, setCallEnded] = useState<any>(false);
  const [name, setName] = useState<any>('');
  const { selectedUser, userInfo } = useAppSelector((state) => state.auth);
  const { handleToggleModel } = useVideoCallModel();

  const myVideo = useRef<any>();
  const userVideo = useRef<any>();
  const connectionRef = useRef<any>();

  const getMediaPermissions = async () => {
    try {
      const streamInfo = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
      setStream(streamInfo);
      myVideo.current.srcObject = streamInfo;
      handleToggleModel();
    } catch (error) {
      console.error('Permission denied', error);
    }
  };
  useEffect(() => {
    Socket.on('callUser', ({ from, name: callerName, signal }: any) => {
      setCall({ isReceivedCall: true, from, name: callerName, signal });
    });
    return () => {
      Socket.disconnect();
    };
  }, []);

  const answerCall = () => {
    setCallAccepted(true);
    const peer = new Peer({
      initiator: false,
      trickle: false,
      stream,
    });
    peer.on('signal', (data) => {
      console.log('[Answer Call]');
      Socket.emit('answerCall', { signal: data, to: call.from });
    });
    peer.on('stream', (streamInfo: any) => {
      console.log('[Streaming Message answered call]');

      userVideo.current.srcObject = streamInfo;
    });

    peer.signal(call.signal);
    connectionRef.current = peer;
  };
  const callUser = () => {
    const peer = new Peer({
      initiator: true,
      trickle: false,
      stream,
    });
    peer.on('signal', (data) => {
      Socket.emit('callUser', {
        userToCall: selectedUser.id,
        signalData: data,
        from: userInfo.id,
        name: userInfo.name,
      });
      console.log('[calling user Call]', selectedUser);
    });
    peer.on('stream', (streaming: any) => {
      console.log('[Streaming Message called call]');

      userVideo.current.srcObject = streaming;
    });
    Socket.on('callAccepted', (signal: any) => {
      console.log('[Answer accepted]');

      setCallAccepted(true);
      peer.signal(signal);
    });

    connectionRef.current = peer;
  };
  const leaveCall = () => {
    setCallEnded(true);
    connectionRef.current.destroy();
    window.location.reload();
  };
  return (
    <SocketContext.Provider
      value={{
        call,
        callAccepted,
        callEnded,
        myVideo,
        userVideo,
        stream,
        name,
        setName,
        callUser,
        leaveCall,
        answerCall,
        getMediaPermissions,
        socket: Socket,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export { ContextProvider, SocketContext };
