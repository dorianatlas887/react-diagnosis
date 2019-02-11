import initialState from './initialState';

const LOADING = 'LOADING';
const RESET_STORE = 'RESET_STORE';


// ACTIONS
function loading(payload) {
  return {
    type: LOADING,
    payload,
  };
}

export function resetStore() {
  return {
    type: RESET_STORE,
  };
}

// ACTION CREATORS
export function loadingAction(action) {
  return (dispatch) => {
    dispatch(loading(action));
  };
}

export function resetStoreAction() {
  return (dispatch) => {
    dispatch(resetStore());
  };
}

// REDUCER
export default function globalReducer(state = initialState.global, action) {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case RESET_STORE:
      return initialState.global;
    default:
      return state;
  }
}
