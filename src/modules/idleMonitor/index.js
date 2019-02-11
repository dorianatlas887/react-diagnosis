import configure from 'redux-idle-monitor';
import { IDLE_STATUSES } from './constants';
import { idleStatusDelay, activeStatusAction, idleStatusAction } from './actions';

// These are the default events that will trigger user active status but can be customized if provided.
const activeEvents = [
  'mousemove',
  'keydown',
  'wheel',
  'DOMMouseScroll',
  'mouseWheel',
  'mousedown',
  'touchstart',
  'touchmove',
  'MSPointerDown',
  'MSPointerMove',
];

const opts = {
  appName: 'EEFF',
  IDLE_STATUSES,
  idleStatusDelay,
  activeStatusAction,
  idleStatusAction,
  activeEvents,
};

const { middleware, reducer, actions } = configure(opts);
export { middleware, reducer, actions };
