import { takeLeading, put, call } from 'redux-saga/effects';

import {
  fetchStart,
  fetchEnd,
  fetchError,
  scanSuccess,
  SCAN_REQUEST,
} from '../actions';
import { openFoodFactURL } from '../config/apisURL';
import NavigationService from '../services/navigation';

export const scanProductRequest = async barcode => {
  const response = await fetch(`${openFoodFactURL}/produit/${barcode}.json`, {
    header: {
      Accept: 'application/json',
    },
    method: 'GET',
  });
  if (response.status < 200 || response.status >= 300) {
    throw new Error(response.statusText);
  }
  return response.json();
};

export function* scanProductHandler({ barcode }) {
  try {
    yield put(fetchStart());
    const response = yield call(scanProductRequest, barcode);
    yield put(fetchEnd());
    if (!response.status) {
      throw new Error(response.status_verbose);
    }
    const { product } = response;
    yield put(
      scanSuccess({
        brands: product.brands,
        name: product.product_name,
        image: product.image_front_url,
        nutriments: product.nutriments,
      })
    );
    NavigationService.navigate('Product');
  } catch (error) {
    yield put(
      fetchError(
        'Un problème est survenu',
        'Impossible de recuperer les informations du produit scanner.',
        error.message
      )
    );
  }
}

export default function* watch() {
  yield takeLeading(SCAN_REQUEST, scanProductHandler);
}
