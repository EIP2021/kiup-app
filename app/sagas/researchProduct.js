import { throttle, put, call, select, takeLeading } from 'redux-saga/effects';
import {
  PRODUCT_RESEARCH_REQUEST,
  PRODUCT_RESEARCH_LOAD_MORE_REQUEST,
  setProductsResearch,
  setMoreProducts,
  fetchEnd,
  fetchError,
  fetchStart,
} from '../actions';
import { kiupURL } from '../config/apisURL';

export const searchProductRequest = async (
  categoryId,
  query,
  token,
  page = 1,
  pageSize = 25
) => {
  const response = await fetch(
    `${kiupURL}/aliment/search?${query ? `query=${query}&` : ''}${
      categoryId ? `categoryId=${categoryId}&` : ''
    }page=${page}&pageSize=${pageSize}`,
    {
      headers: { Accept: 'application/json', Authorization: `Bearer ${token}` },
      method: 'GET',
    }
  );
  if (response.status < 200 || response.status >= 300) {
    throw new Error(response.statusText);
  }
  return response.json();
};

export function* searchProductHandler({ categoryId, query }) {
  try {
    const token = yield select(state => state.auth.token);
    yield put(fetchStart());
    const response = yield call(searchProductRequest, categoryId, query, token);
    yield put(fetchEnd());
    yield put(setProductsResearch(response.result, query, categoryId));
  } catch (error) {
    yield put(
      fetchError(
        'Un problème est survenu',
        'Un problème est survenu lors de votre recherche',
        error.message
      )
    );
  }
}

export function* loadMoreProductsHandler() {
  try {
    const token = yield select(state => state.auth.token);
    const { categoryId, query, page } = yield select(state => ({
      categoryId: state.researchProduct.categoryId,
      query: state.researchProduct.query,
      page: state.researchProduct.page + 1,
    }));
    yield put(fetchStart());
    const response = yield call(
      searchProductRequest,
      categoryId,
      query,
      token,
      page
    );
    yield put(fetchEnd());
    if (response.result.length !== 0) {
      yield put(setMoreProducts(page, response.result));
    }
  } catch (error) {
    yield put(
      fetchError(
        'Un problème est survenu',
        'Un problème est survenu lors de votre recherche',
        error.message
      )
    );
  }
}

export function* searchProducts() {
  yield throttle(1000, PRODUCT_RESEARCH_REQUEST, searchProductHandler);
}
export function* loadMoreProducts() {
  yield takeLeading(
    PRODUCT_RESEARCH_LOAD_MORE_REQUEST,
    loadMoreProductsHandler
  );
}
