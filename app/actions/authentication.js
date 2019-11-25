export const LOGIN_REQUEST = 'SAGA/LOGIN_REQUEST';
export const LOGOUT_REQUEST = 'SAGA/LOGOUT_REQUEST';
export const REGISTER_REQUEST = 'SAGA/REGISTER_REQUEST';
export const REINITIALIZE_PASSWORD_REQUEST =
  'SAGA/REINITIALIZE_PASSWORD_REQUEST';
export const MODIFY_PASSWORD_REQUEST = ' SAGA/MODIFY_PASSWORD_REQUEST';

export const AUTH_RESET = 'AUTH_RESET';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';

export const login = payload => ({
  type: LOGIN_REQUEST,
  payload,
});

export const logout = () => ({
  type: LOGOUT_REQUEST,
});

export const register = payload => ({
  type: REGISTER_REQUEST,
  payload,
});

export const reinitializePassword = payload => ({
  type: REINITIALIZE_PASSWORD_REQUEST,
  payload,
});

export const modifyPassword = payload => ({
  type: MODIFY_PASSWORD_REQUEST,
  payload,
});

export const authSuccess = (email, token) => ({
  type: AUTH_SUCCESS,
  email,
  token,
});

export const authReset = () => ({
  type: AUTH_RESET,
});
