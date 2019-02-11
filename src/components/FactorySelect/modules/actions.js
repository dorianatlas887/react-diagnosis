import {
  GET_FACTORIES,
} from './types';

// action
function getFactories(payload) {
  return {
    type: GET_FACTORIES,
    payload,
  };
}

// action
export const getFactoriesAction = () => (dispatch) => {
  const res = [
    {
      id: '1',
      name: 'Factory A',
    },
    {
      id: '2',
      name: 'Factory B',
    },
    {
      id: '3',
      name: 'Factory C',
    },
  ];

  dispatch(getFactories(res));
};
