// import apiFetch from 'utils/apiFetch';
import { sessionService } from 'redux-react-session';
import {
  loadingAction,
  resetStore,
} from 'store/globalState/global';

import { getFactoriesAction } from 'components/FactorySelect/modules/actions';

// action types
import {
  FETCH_LOGIN_INIT,
  FETCH_LOGIN_SUCCESS,
  // FETCH_LOGIN_FAILURE,
} from './types';

// action
function fetchLoginInit() {
  return {
    type: FETCH_LOGIN_INIT,
  };
}

// action
function fetchLoginSuccess() {
  return {
    type: FETCH_LOGIN_SUCCESS,
  };
}

// // action
// function fetchLoginFailure(error) {
//   return {
//     type: FETCH_LOGIN_FAILURE,
//     payload: error,
//   };
// }

export function fetchLogoutAction() {
  return (dispatch) => {
    dispatch(fetchLoginInit());
    sessionService.deleteSession();
    sessionService.deleteUser();
    dispatch(resetStore());
  };
}

export function fetchloginAction() {
  return (dispatch) => {
    dispatch(loadingAction(true));
    dispatch(fetchLoginInit());

    const res = {
      success: 'true',
      info: {
        imageurl: 'string',
        first_name: 'Aarusha',
        last_name: 'Badour',
        full_name: 'Aarusha Badour',
        national_id: '123456789', // missing
        user_id: '1',
        email: 'aarusha2email.com', // missing
        tel: '798645132985', // missing
        address: 'Tejgoan Industrial Area', // missing
        number: '1208', // missing
        country: 'Bangladesh', // missing
        region: 'Dhaka', // missing
        pc: '123455', // missing
        worker_id: '192837', // missing
        position: 'Nurse', // missing
        factory: 'Factory A', // missing
        start_date: '12/11/2000', // missing
        tree_version: 'string',
      },
    };

    sessionService.saveSession({ token: '123456789' })
      .then(() => {
        sessionService.saveUser(res.info).then(() => {
          dispatch(fetchLoginSuccess());
          dispatch(loadingAction(false));

          // Loading Data
          dispatch(getFactoriesAction());
        });
      });
  };
}
