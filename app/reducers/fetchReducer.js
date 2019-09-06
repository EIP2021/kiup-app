import { FETCH_START, FETCH_END, ERROR_DETAILS } from '../actions';

export const defaultState = {
  pending: false,
  error: {},
};

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case FETCH_START:
      return {
        pending: true,
        error: {},
      };
    case FETCH_END:
      return {
        pending: false,
      };
    case ERROR_DETAILS:
      return {
        pending: false,
        error: { title: action.title, error: action.error },
      };
    default:
      return state;
  }
};
