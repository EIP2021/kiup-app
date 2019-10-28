import { takeLatest, put, call, select } from 'redux-saga/effects';
import moment from 'moment';

import {
  fetchStart,
  fetchEnd,
  fetchError,
  setStatistics,
  setError,
  RETRIEVE_STATISTICS,
} from '../actions';
import { kiupURL } from '../config/apisURL';

export const getStatisticsRequest = async token => {
  const date = moment().format('YYYY-MM-DD', token);
  const response = await fetch(`${kiupURL}/stats?scope=day&date=${date}`, {
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
    method: 'GET',
  });

  if (response.status < 200 || response.status >= 300) {
    throw new Error(response.statusText);
  }
  return response.json();
};

export function* statisticsHandler() {
  try {
    const token = yield select(state => state.auth.token);
    yield put(fetchStart());
    const response = yield call(getStatisticsRequest, token);
    yield put(fetchEnd());
    if (response.error) {
      yield put(setError(`${response.message}, veuillez réessayer.`));
      return;
    }
    yield put(setStatistics(response.stats));
  } catch (error) {
    yield put(
      fetchError(
        'Récuperation impossible',
        'Un problème est survenu lors de récupération de vos statistiques',
        error.message
      )
    );
  }
}

export default function* watch() {
  yield takeLatest(RETRIEVE_STATISTICS, statisticsHandler);
}
