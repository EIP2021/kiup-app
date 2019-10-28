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
import NavigationService from '../services/navigation';

export const consumptionRequest = async (payload, token) => {
  const response = await fetch(`${kiupURL}/stats`, {
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

export function* consumeHandler({ quantity }) {
  try {
    const nutriments = yield select(state => state.scanner.nutriments);
    const token = yield select(state => state.auth.token);
    const payload = {
      date: moment().format('YYYY-MM-DD'),
      stats: {
        potassium: nutriments.potassium.amount
          ? Math.round((nutriments.potassium.amount / 100) * quantity * 100) /
            100
          : 0,
        phosphorus: nutriments.phosphorus.amount
          ? Math.round((nutriments.phosphorus.amount / 100) * quantity * 100) /
            100
          : 0,
        salt: nutriments.salt.amount
          ? Math.round((nutriments.salt.amount / 100) * quantity * 100) / 100
          : 0,
        proteins: nutriments.proteins.amount
          ? Math.round((nutriments.proteins.amount / 100) * quantity * 100) /
            100
          : 0,
      },
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
