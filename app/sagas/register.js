import { takeLatest, put, call } from 'redux-saga/effects';

import {
  fetchStart,
  fetchEnd,
  fetchError,
  authSuccess,
  setError,
  REGISTER_REQUEST,
} from '../actions';
import serverUrl from '../config/serverUrl';
import NavigationService from '../services/navigation';

export const registerRequest = async payload => {
  const response = await fetch(`${serverUrl}/register`, {
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

export function* registerHandler({ payload }) {
  try {
    NavigationService.navigate('RegisterLoading');
    yield put(fetchStart());
    const response = yield call(registerRequest, payload);
    yield put(fetchEnd());
    if (response.success) {
      yield put(setError(`${response.error}, veuillez réessayer.`));
      NavigationService.navigate('Register');
      return;
    }
    yield put(authSuccess(payload.email));
    NavigationService.navigate('App');
  } catch (error) {
    yield put(
      fetchError(
        'La création du compte a échouer',
        "Une erreur s'est produite lors de la création de votre compte",
        error.message,
        'Welcome'
      )
    );
  }
}

export default function* watch() {
  yield takeLatest(REGISTER_REQUEST, registerHandler);
}
