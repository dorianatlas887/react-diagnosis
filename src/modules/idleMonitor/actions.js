/* eslint no-unused-vars: 0 */
import {
  IDLESTATUS_AWAY,
  IDLESTATUS_AWAY_TIME,
  IDLESTATUS_EXPIRED,
  IDLESTATUS_EXPIRED_TIME,
} from './constants';

/**
 * @name idleStatusDelay
 *
 * Funtion executed everytime a idle status changes to get the waiting time for the new state.
 */
export const idleStatusDelay = idleStatus => (dispatch, getState) => {
  if (idleStatus === IDLESTATUS_AWAY) return IDLESTATUS_AWAY_TIME;

  if (idleStatus === IDLESTATUS_EXPIRED) return IDLESTATUS_EXPIRED_TIME;

  return IDLESTATUS_EXPIRED_TIME;
};

/**
 * @name activeStatusAction
 *
 * Funtion executed everytime the idle state changes from idle to active.
 */
export const activeStatusAction = (dispatch, getState) => {
  // console.log("I'M BACK!");
};

/**
 * @name idleStatusAction
 *
 * Funtion executed everytime a idle status changes.
 */
export const idleStatusAction = idleStatus => (dispatch, getState) => {
  switch (idleStatus) {
    case IDLESTATUS_AWAY:
      // console.log("SHOULD SAY SOMETHING?");
      break;

    case IDLESTATUS_EXPIRED:
      // console.log("SHOULD LOGOUT?");
      break;
    default:
      break;
  }
};
