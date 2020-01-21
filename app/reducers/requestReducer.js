import {
  CREATE_DATA,
  READ_DATA,
  UPDATE_DATA,
  DELETE_DATA,
  CLEAR_DATA,
} from '../actions';

export const updateObjectInArray = (array, action) => {
  return array.map((item, index) => {
    if (index === action.index) {
      return { ...item, ...action.data };
    }
    return item;
  });
};

// TODO
// export const insertObjectInArray = (array, action) => {
//   return
// }

export const deleteObjectInArray = (array, action) => {
  array.splice(action.index);
  return { ...array };
};

export function objectReducer(state = {}, action = {}) {
  switch (action.type) {
    case CREATE_DATA:
    case READ_DATA:
      return action.data;
    case UPDATE_DATA:
      return { ...state.data, ...action.data };
    case DELETE_DATA:
    case CLEAR_DATA:
      return {};
    default:
      return state;
  }
}

export function listReducer(state = [], action = {}) {
  switch (action.type) {
    case CREATE_DATA:
      return [action.data, ...state];
    case READ_DATA:
      return action.data;
    case UPDATE_DATA:
      return updateObjectInArray(state, action);
    case DELETE_DATA:
      return deleteObjectInArray(state, action);
    case CLEAR_DATA:
      return action.itemToKeep ? state.data.slice(0, action.itemToKeep) : [];
    default:
      return state;
  }
}

export function paginatedListReducer(
  state = { page: 0, data: [] },
  action = {}
) {
  switch (action.type) {
    case CREATE_DATA:
      return { page: state.page || 1, data: [action.data, ...state.data] };
    case READ_DATA:
      return state.data.length === 0
        ? { page: 1, data: action.data }
        : { page: state.page + 1, data: [...state.data, ...action.data] };
    case UPDATE_DATA:
      return { ...state, data: updateObjectInArray(state.data, action) };
    case DELETE_DATA:
      return { ...state, data: deleteObjectInArray(state, action) };
    case CLEAR_DATA:
      return {
        page: 0,
        data: action.itemToKeep ? state.data.slice(0, action.itemToKeep) : [],
      };
    default:
      return state;
  }
}

export default function createRequestReducer(reduceFunction, reducerName) {
  return (state, action) => {
    const { name } = action;
    const isInitializationCall = state === undefined;
    if (name !== reducerName && !isInitializationCall) return state;
    return reduceFunction(state, action);
  };
}
