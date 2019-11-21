import { takeLatest, put, call } from 'redux-saga/effects';
import { Alert } from 'react-native';

import {
  fetchStart,
  fetchEnd,
  fetchError,
  REINITIALIZE_PASSWORD_REQUEST,
} from '../actions';
import { kiupURL } from '../config/apisURL';
import NavigationService from '../services/navigation';

const reinitializePasswordRequest = async payload => {
  const response = await fetch(`${kiupURL}/user/reinitialize`, {
    header: {
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

export function* forgottenPasswordHandler({ payload }) {
  try {
    yield put(fetchStart());
    yield call(reinitializePasswordRequest, payload);
    yield put(fetchEnd());
    Alert.alert(
      'Email envoyé',
      'Un email vous a été envoyé afin de réinitialiser votre mot de passe.',
      [
        {
          text: 'OK',
          onPress: () => NavigationService.navigate('SignIn'),
        },
      ],
      { cancelable: false }
    );
  } catch (error) {
    yield put(
      fetchError(
        'Réinitialisation impossible',
        'Une erreur est survenue lors de la réinitialisation de votre mot de passe',
        error.message
      )
    );
  }
}

export default function* watch() {
  yield takeLatest(REINITIALIZE_PASSWORD_REQUEST, forgottenPasswordHandler);
}
