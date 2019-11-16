import {
  SET_PRODUCTS_RESEARCH,
  CLEAR_PRODUCTS_RESEARCH,
  SET_MORE_PRODUCTS,
} from '../actions';

export const defaultState = {
  page: 1,
  products: [],
  query: '',
  categoryId: null,
};

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case SET_PRODUCTS_RESEARCH:
      return {
        page: 1,
        products: action.products,
        query: action.query,
        categoryId: action.categoryId,
      };
    case CLEAR_PRODUCTS_RESEARCH:
      return defaultState;
    case SET_MORE_PRODUCTS:
      return {
        ...state,
        page: action.page,
        products: [...state.products, ...action.products],
      };
    default:
      return state;
  }
};
