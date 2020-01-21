export const ADD_TOKEN = 'ADD_TOKEN';
export const DELETE_TOKEN = 'DELETE_TOKEN';

export const addToken = (name, token) => ({
  type: ADD_TOKEN,
  name,
  token,
});

export const deleteToken = name => ({
  type: DELETE_TOKEN,
  name,
});
