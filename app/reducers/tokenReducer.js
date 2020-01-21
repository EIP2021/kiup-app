import { ADD_TOKEN, DELETE_TOKEN } from '../actions';

export default function tokenReducer(state = {}, action = {}) {
  switch (action.type) {
    case ADD_TOKEN:
      return {
        ...state,
        [action.name]: action.token,
      };
    case DELETE_TOKEN:
      return {
        ...state,
        [action.name]: undefined,
      };
    default:
      return state;
  }
}
