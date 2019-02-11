// import apiFetch from 'utils/apiFetch';
import { sessionService } from 'redux-react-session';
import {
  loadingAction,
} from 'store/globalState/global';

import {
  FETCH_SIGNUP_INIT,
  FETCH_SIGNUP_SUCCESS,
  FETCH_SIGNUP_FAILURE,
} from './types';

export function fetchSignupInit() {
  return {
    type: FETCH_SIGNUP_INIT,
  };
}

export function fetchSignupSuccess(success) {
  return {
    type: FETCH_SIGNUP_SUCCESS,
    payload: success,
  };
}

export function fetchSignupFailure(error) {
  return {
    type: FETCH_SIGNUP_FAILURE,
    payload: error,
  };
}

export default function fetchSignupAction(event, {
  firstname, lastname, email, lang,
}) {
  event.preventDefault();

  const signupForm = {
    firstname,
    lastname,
    email,
    lang,
  };

  return (dispatch) => {
    dispatch(loadingAction(true));
    dispatch(fetchSignupInit());
    return new Promise((resolve) => {
      sessionService.saveSession({ token: '123456789' })
        .then(() => {
          sessionService.saveUser(signupForm)
            .then(() => {
              dispatch(fetchSignupSuccess(signupForm));
              dispatch(loadingAction(false));
              resolve(true);
            });
        });
    });
    /* return apiFetch(
        'POST',
        {endPoint:'signup'},
        signupForm
      )
      .then((res) => {

        if (typeof res === 'string') {
          dispatch(fetchSignupFailure('error'));
          dispatch(loadingAction(false));
          return;
        }

        const { success } = res;

        if (success) {
          dispatch(fetchSignupSuccess(res.info));
          dispatch(loadingAction(false));
        } else {
          dispatch(fetchSignupFailure(res.info));
          dispatch(loadingAction(false));
        }
      })
      .catch((err) => {
        dispatch(fetchSignupFailure(err));
        dispatch(loadingAction(false));
      }); */
  };
}
