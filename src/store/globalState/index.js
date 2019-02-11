import { combineReducers } from 'redux';
import Reducers from './reducers';

const appReducer = combineReducers({
  ...Reducers,
});

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;
