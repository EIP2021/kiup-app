import { AUTH_SUCCESS, AUTH_RESET } from '../actions';

export const defaultState = {
  email: '',
  token: '',
  isLogged: false,
};

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        email: action.email,
        token: action.token,
        isLogged: true,
      };
    case AUTH_RESET:
      return defaultState;
    default:
      return state;
  }
};
