/* eslint-disable react/jsx-props-no-spreading */
import 'styles/globals.scss';
import { Provider } from 'react-redux';
import { createContext, FC, useEffect, useRef } from 'react';
import { useStore } from 'src/redux/store';
import { SessionProvider } from 'next-auth/react';
import io from 'socket.io-client';

import { SOCKET_URL } from 'src/utils/constant';

export const UserContext = createContext<any>('');

const MyApp: FC<any> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const socket = useRef<any>(null);
  const socketInitializer = async () => {
    socket.current = io(SOCKET_URL);

    socket.current.on('connect', () => {
      // console.log('connected');
    });
  };
  const disconnectSocket = () => {
    console.log('Disconnecting socket...');
    if (socket.current) socket.current.disconnect();
  };
  useEffect(() => {
    socketInitializer();

    return () => {
      disconnectSocket();
    };
  }, []);

  const store = useStore(pageProps.initialReduxState);
  return (
    <Provider store={store}>
      <UserContext.Provider value={socket}>
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
      </UserContext.Provider>
    </Provider>
  );
};
export default MyApp;
