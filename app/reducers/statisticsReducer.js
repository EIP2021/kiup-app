import { SET_STATISTICS } from '../actions';

export const defaultState = {
  potassium: 0,
  phosphorus: 0,
  salt: 0,
  proteins: 0,
};

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case SET_STATISTICS:
      return action.statistics;
    default:
      return state;
  }
};
