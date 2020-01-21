export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_START = 'FETCH_START';
export const FETCH_END = 'FETCH_END';
export const FETCH_ERROR = 'FETCH_ERROR';

export const CREATE_DATA = 'CREATE_DATA';
export const READ_DATA = 'READ_DATA';
export const UPDATE_DATA = 'UPDATE_DATA';
export const DELETE_DATA = 'DELETE_DATA';
export const CLEAR_DATA = 'CLEAR_DATA';

export const fetchStart = name => ({
  type: FETCH_START,
  name,
});

export const fetchEnd = name => ({
  type: FETCH_END,
  name,
});

export const fetchError = (name, errorMessage) => ({
  type: FETCH_ERROR,
  name,
  errorMessage,
});

export const updateData = (name, data, subtype, ...rest) => ({
  type: `${subtype}`,
  name,
  data,
  ...rest,
});

export const clearData = (name, itemToKeep = 0) => ({
  type: CLEAR_DATA,
  name,
  itemToKeep,
});

export const fetchRequest = (
  name,
  subtype,
  request,
  tokenName = false,
  selectors = [],
  onSuccess = () => {},
  onFailure = () => {}
) => ({
  type: FETCH_REQUEST,
  name,
  subtype,
  request,
  tokenName,
  selectors,
  onSuccess,
  onFailure,
});

export const createRequest = (name, url, payload, tokenName = 'kiup') =>
  fetchRequest(name, CREATE_DATA, { method: 'POST', url, payload }, tokenName);

export const readRequest = (name, url, parameters, tokenName = 'kiup') =>
  fetchRequest(name, READ_DATA, { method: 'GET', url, parameters }, tokenName);

export const updateRequest = (
  name,
  url,
  payload,
  tokenName = 'kiup',
  index = -1
) =>
  fetchRequest(
    name,
    UPDATE_DATA,
    { method: 'PUT', url, payload },
    tokenName,
    [],
    (dataName, response, subtype) => [
      updateData(dataName, response, subtype, index),
    ]
  );

export const deleteRequest = (
  name,
  url,
  payload,
  tokenName = 'kiup',
  index = -1
) =>
  fetchRequest(
    name,
    DELETE_DATA,
    { method: 'DELETE', url },
    tokenName,
    [],
    (dataName, response, subtype) => [
      updateData(dataName, response, subtype, index),
    ]
  );
