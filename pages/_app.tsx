/* eslint-disable react/jsx-props-no-spreading */
import 'styles/globals.scss';
import { Provider } from 'react-redux';
import { FC } from 'react';
import { useStore } from 'src/redux/store';
import { SessionProvider } from 'next-auth/react';

const MyApp: FC<any> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const store = useStore(pageProps.initialReduxState);
  return (
    <Provider store={store}>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </Provider>
  );
};
export default MyApp;
