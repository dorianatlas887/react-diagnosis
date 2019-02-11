import initialState from 'store/globalState/initialState';

// action type
import {
  UPDATE_PROFILE_EDITED,
  UPDATE_PROFILE_INIT,
} from './types';


// reducer functions
export default function updateProfileReducer(state = initialState.updateProfile, action) {
  switch (action.type) {
    case UPDATE_PROFILE_EDITED:
      return {
        edited: true,
        message: '',
      };
    case UPDATE_PROFILE_INIT:
      return {
        edited: false,
        message: '',
      };
    default:
      return state;
  }
}
