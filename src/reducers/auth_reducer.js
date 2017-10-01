import {
  AUTH_CHANGE_INPUT_FORM,
  AUTH_SET_ERROR,
} from '../actions/types';

const INITIAL_STATE = {
  authForms: {
    email: '',
    password: '',
  },
  authError: {},
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case AUTH_CHANGE_INPUT_FORM:
      return {
        ...state,
        authForms: {
          email: action.payload.name === 'email' ? action.payload.value : state.authForms.email,
          password: action.payload.name === 'password' ? action.payload.value : state.authForms.password,
        }
      };

    case AUTH_SET_ERROR:
      return {
        ...state,
        authError: action.payload,
      };

    default:
      return state;
  }
}

