export const PRODUCT_RESEARCH_REQUEST = 'SAGA/PRODUCT_SEARCH_REQUEST';

export const searchProduct = (categoryId = null, query = '') => ({
  type: PRODUCT_RESEARCH_REQUEST,
  categoryId,
  query,
});
