import { takeLatest, put, call } from 'redux-saga/effects';

import {
  fetchStart,
  fetchEnd,
  fetchError,
  authSuccess,
  setError,
  LOGIN_REQUEST,
} from '../actions';
import serverUrl from '../config/serverUrl';
import NavigationService from '../services/navigation';

export const loginRequest = async payload => {
  const response = await fetch(`${serverUrl}/login`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(payload),
  });

  if (response.status < 200 || response.status >= 300) {
    throw new Error(response.statusText);
  }
  return response.json();
};

export function* loginHandler({ payload }) {
  try {
    yield put(fetchStart());
    const response = yield call(loginRequest, payload);
    yield put(fetchEnd());
    if (response.success) {
      yield put(setError(`${response.error}, veuillez réessayer.`));
      return;
    }
    yield put(authSuccess(payload.email));
    NavigationService.navigate('App');
  } catch (error) {
    yield put(
      fetchError(
        'Authentification impossible',
        'Un problème est survenu lors votre authentication',
        error.message
      )
    );
  }
}

export default function* watch() {
  yield takeLatest(LOGIN_REQUEST, loginHandler);
}
