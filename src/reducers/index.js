import { combineReducers } from 'redux';
import authReducer from './auth_reducer';
import userReducer from './user_reducer';

export default combineReducers({
  authReducer,
  userReducer,
});
