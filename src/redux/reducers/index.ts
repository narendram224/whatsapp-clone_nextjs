import { combineReducers } from 'redux';
import appReducer from './appReducer';
import authReducer from './authReducer';

export default combineReducers({
  app: appReducer,
  auth: authReducer,
});
