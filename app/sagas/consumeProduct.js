import { takeLatest, put, call, select } from 'redux-saga/effects';
import moment from 'moment';

import {
  fetchStart,
  fetchEnd,
  fetchError,
  setStatistics,
  setError,
  CONSUME_PRODUCT,
} from '../actions';
import { kiupURL } from '../config/apisURL';
import { calculAllNutrimentsQuantity } from '../helpers';
import NavigationService from '../services/navigation';

export const consumptionRequest = async (payload, token) => {
  const response = await fetch(`${kiupURL}/user/stats`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    method: 'POST',
    body: JSON.stringify(payload),
  });

  if (response.status < 200 || response.status >= 300) {
    throw new Error(response.statusText);
  }
  return response.json();
};

export function* consumeHandler({ quantity, nutriments }) {
  try {
    const token = yield select(state => state.auth.token);
    const payload = {
      date: moment().format('YYYY-MM-DD'),
      stats: calculAllNutrimentsQuantity(quantity, nutriments),
    };
    yield put(fetchStart());
    const response = yield call(consumptionRequest, payload, token);
    yield put(fetchEnd());
    if (response.error) {
      yield put(setError(`${response.message}, veuillez réessayer.`));
      return;
    }
    yield put(setStatistics(response.stats));
    NavigationService.navigate('Scanner');
  } catch (error) {
    yield put(
      fetchError(
        'Ajout impossible',
        "Un problème est survenu lors de l'ajout du consommable",
        error.message
      )
    );
  }
}

export default function* watch() {
  yield takeLatest(CONSUME_PRODUCT, consumeHandler);
}
