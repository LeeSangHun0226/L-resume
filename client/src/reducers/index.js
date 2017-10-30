import { combineReducers } from 'redux';
import authReducer from './auth_reducer';
import userReducer from './user_reducer';
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  authReducer,
  userReducer,
  form: formReducer,
});
