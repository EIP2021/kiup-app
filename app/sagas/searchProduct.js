import { throttle, put } from 'redux-saga/effects';
import {
  READ_DATA,
  PRODUCT_RESEARCH_REQUEST,
  clearData,
  updateData,
} from '../actions';
import { getSearchedProduct } from '../requests';

export function* searchProductHandler({ categoryId, query }) {
  yield put(clearData('searchProduct'));
  yield put(clearData('searchProductQuery'));
  if (categoryId || query) {
    yield put(
      updateData(
        'searchProductQuery',
        {
          categoryId,
          ...(query && { query }),
        },
        READ_DATA
      )
    );
  }
  yield put(getSearchedProduct());
}

export function* searchProduct() {
  yield throttle(1000, PRODUCT_RESEARCH_REQUEST, searchProductHandler);
}
