import initialState from 'store/globalState/initialState';

// action type
import {
  FETCH_PATIENTS,
  INIT_PATIENTS,
} from './types';


// reducer functions
export default function patientsReducer(state = initialState.login, action) {
  switch (action.type) {
    case FETCH_PATIENTS:
      return {
        patientsList: action.payload || [],
      };
    case INIT_PATIENTS:
      return {
        patientsList: [],
      };
    default:
      return state;
  }
}
