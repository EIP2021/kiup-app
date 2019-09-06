import { SET_ERROR, CLEAR_ERROR } from '../actions';

export default (state = '', action = {}) => {
  switch (action.type) {
    case SET_ERROR:
      return action.error;
    case CLEAR_ERROR:
      return '';
    default:
      return state;
  }
};
