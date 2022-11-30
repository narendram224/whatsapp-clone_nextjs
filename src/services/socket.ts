import { io } from 'socket.io-client';
import { SOCKET_URL } from 'src/utils/constant';

// eslint-disable-next-line no-unused-vars
let socket: any;

export const initiateSocketConnection = () => {
  console.log('Socket', SOCKET_URL);

  socket = io(SOCKET_URL);
  console.log(`Connecting socket...`);
};

export const disconnectSocket = () => {
  console.log('Disconnecting socket...');
  if (socket) socket.disconnect();
};
