import { Alert } from 'react-native';
import { takeLatest, put } from 'redux-saga/effects';

import { FETCH_ERROR, errorDetails } from '../actions';
import NavigationService from '../services/navigation';

export function* fetchErrorHandler({
  title,
  description,
  error,
  redirectRoute = '',
}) {
  Alert.alert(
    title,
    `${description}, veuillez réessayer ultérieurement.`,
    [
      {
        text: 'OK',
        onPress: () => {
          if (redirectRoute) {
            NavigationService.navigate(redirectRoute);
          }
        },
      },
    ],
    {
      cancelable: false,
    }
  );
  yield put(errorDetails(title, error));
}

export default function* watch() {
  yield takeLatest(FETCH_ERROR, fetchErrorHandler);
}
