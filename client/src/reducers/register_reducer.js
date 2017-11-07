import {
  REGISTER_ALL_GET,
  REGISTER_CONTACT_DATA_CHANGE,
} from '../actions/types';

const INITIAL_STATE = {
  contact: {
    firstName: {},
    lastName: {},
    address: {},
    phone: {},
    email: {},
  },
  education: {
    body: [],
    photo: [],
    link: [],
  }
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case REGISTER_CONTACT_DATA_CHANGE:
      return {
        ...state,
        contact: action.payload,
      };

    default:
      return state;
  }
}

