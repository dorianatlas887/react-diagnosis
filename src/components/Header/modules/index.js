import initialState from 'store/globalState/initialState';

import {
  OPEN_LEFT_MENU,
  CLOSE_LEFT_MENU,
} from './types';

// reducer functions
export default function headerReducer(state = initialState.header, action) {
  switch (action.type) {
    case OPEN_LEFT_MENU:
      return {
        open: true,
      };
    case CLOSE_LEFT_MENU:
      return {
        open: false,
      };
    default:
      return state;
  }
}
