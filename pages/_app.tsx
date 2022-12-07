/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-props-no-spreading */
import 'styles/globals.scss';
import { Provider } from 'react-redux';
import {  FC } from 'react';
import { useStore } from 'src/redux/store';
import { SessionProvider } from 'next-auth/react';

// import { SOCKET_URL } from 'src/utils/constant';
import { ContextProvider } from 'src/context/VideoCallContext'
import Head from 'next/head'


const MyApp: FC<any> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const store = useStore(pageProps.initialReduxState);
  return (
    <Provider store={store}>
       <ContextProvider>
        <SessionProvider session={session}>
                <Head>
        <title>Whatsapp clone</title>
        <meta name='description' content='Simple whatsapp clone developed by me just for fun'/>
        <link rel="icon" href="https://cdn.icon-icons.com/icons2/373/PNG/256/Whatsapp_37229.png" />
        <meta property="og:title" content="Social Title for Cool Page" />
        <meta
          property="og:description"
          content="Whatsapp clone only for testing in prod"
        />
        <meta
          property="og:image"
          content="https://cdn.icon-icons.com/icons2/373/PNG/256/Whatsapp_37229.png"
        />

      </Head>

          <Component {...pageProps} />
        </SessionProvider>
       </ContextProvider>
    </Provider>
  );
};
export default MyApp;
