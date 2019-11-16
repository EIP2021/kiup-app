export const PRODUCT_RESEARCH_REQUEST = 'SAGA/PRODUCT_RESEARCH_REQUEST';
export const PRODUCT_RESEARCH_LOAD_MORE_REQUEST =
  'SAGA/PRODUCT_RESEARCH_LOAD_MORE_REQUEST';

export const SET_MORE_PRODUCTS = 'SET_MORE_PRODUCTS';
export const SET_PRODUCTS_RESEARCH = 'SET_PRODUCTS_RESEARCH';
export const CLEAR_PRODUCTS_RESEARCH = 'CLEAR_PRODUCTS_RESEARCH';

export const clearProductsResearch = () => ({
  type: CLEAR_PRODUCTS_RESEARCH,
});

export const searchProduct = (categoryId = null, query = '') => ({
  type: PRODUCT_RESEARCH_REQUEST,
  categoryId,
  query,
});

export const setProductsResearch = (products, query, categoryId) => ({
  type: SET_PRODUCTS_RESEARCH,
  products,
  query,
  categoryId,
});

export const setMoreProducts = (page, products) => ({
  type: SET_MORE_PRODUCTS,
  page,
  products,
});

export const loadMoreProducts = () => ({
  type: PRODUCT_RESEARCH_LOAD_MORE_REQUEST,
});
