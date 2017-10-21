import {
  USER_REGISTER_AUTH_INFO,
  USER_SET_ERROR,
  USER_CONFIRM_AUTH_CODE,
  USER_LOGGED_IN,
} from './types';

export const userLogIn = (flag) => ({
  type: USER_LOGGED_IN,
  payload: flag,
})

export const userConfirmAuthCode = (flag) => ({
  type: USER_CONFIRM_AUTH_CODE,
  payload: flag,
})


export const userRegisterAuthInfo = (name, value) => {
  const form = { name, value };
  return ({
  type: USER_REGISTER_AUTH_INFO,
  payload: form,
})};

export const userSetError = error => ({
  type: USER_SET_ERROR,
  payload: error,
});
