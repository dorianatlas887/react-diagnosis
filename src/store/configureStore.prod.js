import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import {
  middleware as idleMiddleware,
  actions as idleActions,
} from 'modules/idleMonitor';

import globalState from './globalState';

const history = createHistory();
const routerReduxMiddleware = routerMiddleware(history);

const middlewares = [
  thunk,
  idleMiddleware,
  routerReduxMiddleware,
];

const enhancer = compose(
  applyMiddleware(...middlewares),
);

export default function configureStore(initialState) {
  const store = createStore(globalState, initialState, enhancer);

  let currentIsAuthenticated = false;

  // Will start the idle monitoring when the user logs in, and stop it if the user is signed out.
  store.subscribe(() => {
    const previousIsAuthenticated = currentIsAuthenticated;
    const state = store.getState();

    currentIsAuthenticated = state.session.authenticated;

    if (currentIsAuthenticated !== previousIsAuthenticated) {
      store.dispatch((currentIsAuthenticated ? idleActions.start : idleActions.stop)());
    }
  });

  return store;
}
