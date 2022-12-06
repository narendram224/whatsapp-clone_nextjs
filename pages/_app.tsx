/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-props-no-spreading */
import 'styles/globals.scss';
import { Provider } from 'react-redux';
import {  FC } from 'react';
import { useStore } from 'src/redux/store';
import { SessionProvider } from 'next-auth/react';

// import { SOCKET_URL } from 'src/utils/constant';
import { ContextProvider } from 'src/context/VideoCallContext'


const MyApp: FC<any> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const store = useStore(pageProps.initialReduxState);
  return (
    <Provider store={store}>
       <ContextProvider>
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
       </ContextProvider>
    </Provider>
  );
};
export default MyApp;
