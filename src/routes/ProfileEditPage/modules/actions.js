
import { sessionService } from 'redux-react-session';
import {
  loadingAction,
} from 'store/globalState/global';

// action types
import {
  UPDATE_PROFILE_EDITED,
  UPDATE_PROFILE_INIT,
} from './types';

// action
function updateProfileEdited() {
  return {
    type: UPDATE_PROFILE_EDITED,
  };
}

// action
function updateProfileInit() {
  return {
    type: UPDATE_PROFILE_INIT,
  };
}

export function updateProfileAction(userInfo) {
  return (dispatch) => {
    dispatch(updateProfileInit());
    dispatch(loadingAction(true));

    sessionService.saveUser(userInfo).then(() => {
      dispatch(loadingAction(false));
    });
  };
}

export function syncUpdateProfileAction() {
  return (dispatch) => {
    dispatch(updateProfileEdited());
  };
}
