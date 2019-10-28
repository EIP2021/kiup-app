import { takeLatest, put, call } from 'redux-saga/effects';
import { Alert } from 'react-native';

import {
  fetchStart,
  fetchEnd,
  fetchError,
  MODIFY_PASSWORD_REQUEST,
} from '../actions';
import { kiupURL } from '../config/apisURL';
import NavigationService from '../services/navigation';

const modifyPasswordRequest = async payload => {
  const response = await fetch(`${kiupURL}/modify_password`, {
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
    yield call(modifyPasswordRequest, payload);
    yield put(fetchEnd());
    Alert.alert(
      'Mot de passe réinitialiser',
      'Votre mot de passe a été réinitialiser avec succès.',
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
        'Réinitialisation de votre mot de passe impossible',
        'Une erreur est survenue lors de la réinitialisation de votre mot de passe',
        error.message
      )
    );
  }
}

export default function* watch() {
  yield takeLatest(MODIFY_PASSWORD_REQUEST, forgottenPasswordHandler);
}
