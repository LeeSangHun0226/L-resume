import {
  AUTH_CHANGE_INPUT_FORM,
  AUTH_SET_ERROR,
} from './types';

export const authChangeInputForm = (name, value) => {
  const form = { name, value };
  return ({
  type: AUTH_CHANGE_INPUT_FORM,
  payload: form,
})};

export const authSetError = error => ({
  type: AUTH_SET_ERROR,
  payload: error,
});
