import initialState from 'store/globalState/initialState';

// action type
import {
  INIT_DIAGNOSIS,
  NEXT_STEP,
  PREV_STEP,
  CREATE_PRESCRIPTION,
  ADD_PRESCRIPTION,
  DELETE_PRESCRIPTION,
  SET_INTENSITY,
  GET_TREES,
  GET_NODES,
  INIT_STATUS,
  ADD_INTENSITY,
  UPLOAD_PHOTO,
  ADD_COMMENT,
  ADD_CONDITION,
  NEXT_QUESTION,
} from './types';

// reducer functions
export default function diagnosisReducer(state = initialState.diagnosis, action) {
  switch (action.type) {
    case INIT_DIAGNOSIS:
      return {
        ...initialState.diagnosis,
      };
    case NEXT_STEP:
      return {
        ...state,
        diagnosis: {},
      };
    case PREV_STEP: {
      const {
        prescription,
        currentStep,
        currentType,
      } = state.diagnosis;

      let prevType;
      let prevStep = currentStep;

      if (currentType === 'question') {
        if (currentStep === 0) {
          prevType = 'condition';
        } else {
          prevStep -= 1;
          prevType = 'question';
        }
      } else if (currentType === 'condition') {
        prevType = 'comment';
      } else if (currentType === 'comment') {
        prevType = 'upload';
        prevStep = prescription.length - 1;
      } else if (currentType === 'upload') {
        prevType = 'leaf';
      } else if (currentStep === 0) {
        prevType = 'tree';
      } else if (prescription[currentStep - 1].leaf) {
        prevType = 'upload';
        prevStep -= 1;
      } else {
        prevType = 'node';
        prevStep -= 1;
      }

      return {
        ...state,
        diagnosis: {
          ...state.diagnosis,
          currentStep: prevStep,
          currentType: prevType,
        },
      };
    }
    case CREATE_PRESCRIPTION:
      return {
        ...state,
        diagnosis: {
          ...state.diagnosis,
          currentStep: 0,
          currentType: 'node',
          steps: [
            ...action.payload.step,
          ],
          prescription: action.payload.prescription,
        },
      };
    case ADD_PRESCRIPTION:
      return {
        ...state,
        diagnosis: {
          ...state.diagnosis,
          currentStep: action.payload.currentStep,
          currentType: action.payload.currentType,
          steps: action.payload.steps,
          prescription: action.payload.prescription,
        },
      };
    case DELETE_PRESCRIPTION:
      return {
        ...state,
        diagnosis: {},
      };
    case SET_INTENSITY:
      return {
        ...state,
        diagnosis: {},
      };
    case GET_NODES:
      return {
        ...state,
        nodes: action.payload,
      };
    case GET_TREES:
      return {
        ...state,
        loadedTree: true,
        trees: action.payload,
      };
    case INIT_STATUS:
      return {
        ...state,
        loadedTree: false,
      };
    case ADD_INTENSITY:
      return {
        ...state,
        diagnosis: {
          ...state.diagnosis,
          prescription: action.payload.prescription,
          currentType: action.payload.currentType,
        },
      };
    case UPLOAD_PHOTO:
      return {
        ...state,
        diagnosis: {
          ...state.diagnosis,
          currentStep: action.payload.currentStep,
          currentType: action.payload.currentType,
        },
      };
    case ADD_COMMENT:
      return {
        ...state,
        diagnosis: {
          ...state.diagnosis,
          currentType: action.payload.currentType,
        },
      };
    case ADD_CONDITION:
      return {
        ...state,
        diagnosis: {
          ...state.diagnosis,
          currentType: action.payload.currentType,
          currentStep: action.payload.currentStep,
        },
      };
    case NEXT_QUESTION:
      return {
        ...state,
        diagnosis: {
          ...state.diagnosis,
          currentType: action.payload.currentType,
          currentStep: action.payload.currentStep,
        },
      };
    default:
      return state;
  }
}
