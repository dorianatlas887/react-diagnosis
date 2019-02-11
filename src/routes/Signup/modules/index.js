import initialState from 'store/globalState/initialState';

import {
  FETCH_SIGNUP_INIT,
  FETCH_SIGNUP_SUCCESS,
  FETCH_SIGNUP_FAILURE,
} from './types';

export default function signupReducer(state = initialState.signup, action) {
  switch (action.type) {
    case FETCH_SIGNUP_INIT:
      return {
        error: '',
        success: '',
      };
    case FETCH_SIGNUP_SUCCESS:
      return {
        error: '',
        success: action.payload,
      };
    case FETCH_SIGNUP_FAILURE:
      return {
        error: action.payload,
        success: '',
      };
    default:
      return state;
  }
}
