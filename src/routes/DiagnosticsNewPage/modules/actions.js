// import apiFetch from 'utils/apiFetch';
import {
  loadingAction,
} from 'store/globalState/global';

// action types
import {
  INIT_DIAGNOSIS,
  // NEXT_STEP,
  PREV_STEP,
  CREATE_PRESCRIPTION,
  ADD_PRESCRIPTION,
  // DELETE_PRESCRIPTION,
  ADD_INTENSITY,
  UPLOAD_PHOTO,
  ADD_COMMENT,
  ADD_CONDITION,
  NEXT_QUESTION,
  GET_TREES,
  GET_NODES,
  INIT_STATUS,
} from './types';

// middleware
export const GET_DIAGNOSIS = () => async (dispatch) => {
  dispatch({ type: INIT_DIAGNOSIS });
};

// middleware
export const moveNextStep = () => async (dispatch) => {
  dispatch(loadingAction(true));
  dispatch(loadingAction(false));
};

// action
export const movePrevStep = () => ({
  type: PREV_STEP,
});

// action
export const createPrescription = data => ({
  type: CREATE_PRESCRIPTION,
  payload: data,
});

// action
export const addPrescription = data => ({
  type: ADD_PRESCRIPTION,
  payload: data,
});

export const addIntensity = data => ({
  type: ADD_INTENSITY,
  payload: data,
});

export const uploadPhoto = data => ({
  type: UPLOAD_PHOTO,
  payload: data,
});

export const addComment = data => ({
  type: ADD_COMMENT,
  payload: data,
});

export const addCondition = data => ({
  type: ADD_CONDITION,
  payload: data,
});

export const nextQuestion = data => ({
  type: NEXT_QUESTION,
  payload: data,
});

// action
export const initStatus = () => ({
  type: INIT_STATUS,
});

// middleware
export const getNodesAction = nodeId => async (dispatch, getState) => {
  // const url = '/nodes/{nodeId}';
  // dispatch(loadingAction(true));
  // const res = await apiFetch('GET', { endPoint: url });
  // dispatch({ type: GET_NODES, payload: res.data });
  // dispatch(loadingAction(false));
  const store = getState();
  const diagnosis = store.diagnosis.diagnosis;

  let nodeIndex = 6 + (nodeId - 1) * 4;

  let leaf = true;

  if (nodeId < 31) {
    leaf = false;
  }

  function createData() {
    nodeIndex += 1;

    let name = `Leaf ${nodeIndex}`;
    if (nodeId < 31) {
      name = `Node ${nodeIndex}`;
    }

    return {
      id: nodeIndex,
      name,
      root: false,
      leaf,
      parentIds: [
        ...diagnosis.prescription[diagnosis.currentStep].parentIds,
        nodeId,
      ],
      childIds: [
        6 + (nodeIndex - 1) * 4 + 1,
        6 + (nodeIndex - 1) * 4 + 2,
        6 + (nodeIndex - 1) * 4 + 3,
        6 + (nodeIndex - 1) * 4 + 4,
      ],
      maxScore: 12,
      minScore: 0,
      intensity: '',
    };
  }

  const res = [
    createData(),
    createData(),
    createData(),
    createData(),
  ];

  dispatch({ type: GET_NODES, payload: res });
};

// middleware
export const getTreesAction = () => async (dispatch) => {
  // const url = '/trees';
  // dispatch(loadingAction(true));
  // const res = await apiFetch('GET', { endPoint: url });
  // dispatch({ type: GET_NODES, payload: res.data });
  // dispatch(loadingAction(false));

  let nodeIndex = 0;

  function createData(childIds) {
    nodeIndex += 1;
    return {
      id: nodeIndex,
      name: `Tree${nodeIndex}`,
      root: true,
      leaf: false,
      parentIds: [
      ],
      childIds: [...childIds],
    };
  }

  const res = [
    createData([7, 8, 9, 10]),
    createData([11, 12, 13, 14]),
    createData([15, 16, 17, 18]),
    createData([19, 20, 21, 22]),
    createData([23, 24, 25, 26]),
    createData([27, 28, 29, 30]),
  ];

  dispatch({ type: GET_TREES, payload: res });
};

// middleware
export const execDiagnosis = data => async (dispatch, getState) => {
  const store = getState();
  const diagnosis = store.diagnosis.diagnosis;

  if (diagnosis.currentType === 'tree') {
    const nodes = store.diagnosis.trees;
    const selected = nodes.filter((obj, index) => {
      return data.indexOf(index + 1) !== -1;
    });

    const addedInfo = {
      step: data,
      prescription: selected,
    };

    dispatch(createPrescription(addedInfo));
  }

  if (diagnosis.currentType === 'node') {
    const nodes = store.diagnosis.nodes;
    const selected = nodes.filter((obj, index) => {
      return data.indexOf(index) !== -1;
    });

    const {
      steps,
      prescription,
      currentStep,
    } = diagnosis;

    let newPrescription = prescription.filter((obj) => {
      return obj.parentIds.indexOf(steps[currentStep]) === -1;
    });

    newPrescription = newPrescription.slice(0, currentStep + 1).concat(selected, newPrescription.slice(currentStep + 1, newPrescription.length));

    const newSteps = newPrescription.map((obj) => {
      return obj.id;
    });

    let currentType;

    if (newPrescription[currentStep + 1].leaf) {
      currentType = 'leaf';
    } else {
      currentType = 'node';
    }

    const addedInfo = {
      steps: newSteps,
      prescription: newPrescription,
      currentType,
      currentStep: currentStep + 1,
    };

    dispatch(addPrescription(addedInfo));
  }

  if (diagnosis.currentType === 'leaf') {
    const {
      currentStep,
      prescription,
    } = diagnosis;

    const changed = [{
      ...diagnosis.prescription[diagnosis.currentStep],
      intensity: data,
    }];

    const newPrescription = prescription.slice(0, currentStep).concat(changed, prescription.slice(currentStep + 1, prescription.length));

    const currentType = 'upload';

    const addedInfo = {
      prescription: newPrescription,
      currentType,
    };

    dispatch(addIntensity(addedInfo));
  }

  if (diagnosis.currentType === 'upload') {
    const {
      currentStep,
      prescription,
    } = diagnosis;

    let currentType;
    let nextStep = currentStep;

    if (currentStep + 1 === prescription.length) {
      currentType = 'comment';
    } else {
      nextStep += 1;
      if (prescription[currentStep + 1].leaf) {
        currentType = 'leaf';
      } else {
        currentType = 'node';
      }
    }

    const addedInfo = {
      currentType,
      currentStep: nextStep,
    };

    dispatch(uploadPhoto(addedInfo));
  }

  if (diagnosis.currentType === 'comment') {
    const currentType = 'condition';

    const addedInfo = {
      currentType,
    };

    dispatch(addComment(addedInfo));
  }

  if (diagnosis.currentType === 'condition') {
    const currentType = 'question';
    const currentStep = 0;

    const addedInfo = {
      currentType,
      currentStep,
    };

    dispatch(addCondition(addedInfo));
  }

  if (diagnosis.currentType === 'question') {
    let currentType = 'save';
    const questions = store.diagnosis.questions;
    let {
      currentStep,
    } = diagnosis;

    if (diagnosis.currentStep < questions.length - 1) {
      currentStep += 1;
      currentType = 'question';
    } else {
      currentType = 'save';
    }

    const addedInfo = {
      currentStep,
      currentType,
    };

    dispatch(nextQuestion(addedInfo));
  }
};
