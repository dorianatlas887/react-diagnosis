import apiFetch from 'utils/apiFetch';
import { sessionService } from 'redux-react-session';
import {
  loadingAction,
} from 'store/globalState/global';

// action types
import {
  FETCH_LOGIN_INIT,
  FETCH_LOGIN_SUCCESS,
  FETCH_LOGIN_FAILURE,
} from './types';

// action
export function fetchLoginInit() {
  return {
    type: FETCH_LOGIN_INIT,
  };
}


// action
export function fetchLoginSuccess() {
  return {
    type: FETCH_LOGIN_SUCCESS,
  };
}

// action
export function fetchLoginFailure(error) {
  return {
    type: FETCH_LOGIN_FAILURE,
    payload: error,
  };
}

export default function fetchloginAction(event, { email }) {
  event.preventDefault();

  /* const loginForm = {
    email,
    password,
  }; */

  return (dispatch) => {
    dispatch(loadingAction(true));
    dispatch(fetchLoginInit());

    return new Promise((resolve) => {
      sessionService.saveSession({ token: '123456789' })
        .then(() => {
          sessionService.saveUser({
            email,
          }).then(() => {
            dispatch(fetchLoginSuccess());
            dispatch(loadingAction(false));
            resolve(true);
          });
        });
    });
    /* return apiFetch(
        'POST',
        {endPoint:'login'},
        loginForm
      )
      .then((res) => {

        if (typeof res === 'string') {
          dispatch(fetchLoginFailure('error'));
          dispatch(loadingAction(false));
          return;
        }

        const { success } = res;

        if (success) {
          const { info : { session_code: token } } = res;

          sessionService.saveSession({ token })
            .then(() => {
              sessionService.saveUser(res.info)
                .then(() => {
                  dispatch(fetchLoginSuccess());
                  dispatch(loadingAction(false));
                })
            })
        } else {
          dispatch(fetchLoginFailure(res.info));
          dispatch(loadingAction(false));
        }
      })
      .catch((err) => {
        dispatch(fetchLoginFailure(err));
        dispatch(loadingAction(false));
      }); */
  };
}

/**
 * @name recoverPassword
 * Function to recover password
 *
 * @param {String}  email
 *
 * @returns {Promise}
 */
export function recoverPassword({ email, lang }) {
  const url = 'request_password';

  return apiFetch('GET', { endPoint: url }, { email, lang });
}
