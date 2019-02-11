import {
  OPEN_LEFT_MENU,
  CLOSE_LEFT_MENU,
} from './types';

// action
export function openLeftMenu() {
  return {
    type: OPEN_LEFT_MENU,
  };
}

// action
export function closeLeftMenu() {
  return {
    type: CLOSE_LEFT_MENU,
  };
}
