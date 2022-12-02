/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-props-no-spreading */
import 'styles/globals.scss';
import { Provider } from 'react-redux';
import { createContext, FC, useCallback, useEffect, useRef, useState } from 'react';
import { useStore } from 'src/redux/store';
import { SessionProvider } from 'next-auth/react';
import io from 'socket.io-client';

import { SOCKET_URL } from 'src/utils/constant';

export const UserContext = createContext<any>('');

const MyApp: FC<any> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {

   const [state, setState] = useState({page: {}})
  const setPageContext = useCallback(
    newState => {
      setState(newState)
    },
    [state, setState],
  )
  const getContextValue = useCallback(
    () => state,
    [state],
  )

  const socket = useRef<any>(null);
  const socketInitializer = async () => {
    socket.current = io(SOCKET_URL);

    socket.current.on('connect', () => {
      setPageContext(socket.current)
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
      <UserContext.Provider value={getContextValue()}>
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
      </UserContext.Provider>
    </Provider>
  );
};
export default MyApp;
