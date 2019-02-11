import initialState from 'store/globalState/initialState';

import {
  GET_FACTORIES,
} from './types';

// reducer functions
export default function headerReducer(state = initialState.factory, action) {
  switch (action.type) {
    case GET_FACTORIES:
      return {
        factories: action.payload,
        loaded: true,
      };
    default:
      return state;
  }
}
