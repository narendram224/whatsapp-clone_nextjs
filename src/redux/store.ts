import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import rootReducer from './reducers';

function makeStore(preloadedState: any) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
}

// eslint-disable-next-line import/no-mutable-exports
let store: any;
export const initializeStore = (preloadedState: {}) => {
  let reduxStore = store ?? makeStore(preloadedState);

  if (preloadedState && store) {
    reduxStore = makeStore({ ...store.getState(), ...preloadedState });
    store = undefined;
  }

  if (typeof window === 'undefined') return reduxStore;
  if (!store) store = reduxStore;

  return reduxStore;
};

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

export function useStore(initialState: any) {
  const reduxStore = useMemo(
    () => initializeStore(initialState),
    [initialState],
  );
  return reduxStore;
}

export default store;
