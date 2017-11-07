import {
  REGISTER_ALL_GET,
  REGISTER_CONTACT_DATA_CHANGE,
} from './types';

export const registerContactDataChange = (payload) => {
  return ({
  type: REGISTER_CONTACT_DATA_CHANGE,
  payload: payload,
})};

