import { FC } from 'react';
import { saveDeviceInfo } from 'src/redux/reducers/appReducer';
import { initializeStore } from 'src/redux/store';
import { getUserAgent } from 'src/utils/helper';

const HomePage: FC<any> = () => {
  return <h1>Home Page</h1>;
};

export default HomePage;

export const getServerSideProps = async (context: any) => {
  const reduxStore = initializeStore({});
  const { dispatch } = reduxStore;
  const uaString: any = context.req.headers['user-agent'];
  dispatch(saveDeviceInfo(getUserAgent(uaString)));

  try {
    // fetcj data here
  } catch (e) {
    console.log('Error fetching Data', e);

    // routeToNotFoundPage(context.res);
  }

  return {
    props: {
      initialReduxState: reduxStore.getState(),
    },
  };
};
