import {
  USER_REGISTER_AUTH_INFO,
  USER_SET_ERROR,
  USER_CONFIRM_AUTH_CODE,
} from '../actions/types';

const INITIAL_STATE = {
  userAuthForms: {
    email: '',
    password: '',
    authCode: '',
  },
  userError: {},
  isUserConfirmedAuthCode: false,
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case USER_CONFIRM_AUTH_CODE:
      return {
        ...state,
        isUserConfirmedAuthCode: action.payload,
      }

    case USER_REGISTER_AUTH_INFO:
      return {
        ...state,
        userAuthForms: {
          email: action.payload.name === 'email' ? action.payload.value : state.userAuthForms.email,
          password: action.payload.name === 'password' ? action.payload.value : state.userAuthForms.password,
          authCode: action.payload.name === 'authCode' ? action.payload.value : state.userAuthForms.authCode,
        }
      };

    case USER_SET_ERROR:
      return {
        ...state,
        userError: action.payload,
      };

    default:
      return state;
  }
}

