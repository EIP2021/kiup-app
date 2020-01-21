import { FETCH_START, FETCH_END, FETCH_ERROR } from '../actions';

export default (state = {}, action = {}) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        [action.name]: {
          pending: true,
          error: '',
        },
      };
    case FETCH_END:
      return {
        ...state,
        [action.name]: {
          pending: false,
          error: '',
        },
      };
    case FETCH_ERROR:
      return {
        ...state,
        [action.name]: {
          pending: false,
          error: action.errorMessage,
        },
      };
    default:
      return state;
  }
};
