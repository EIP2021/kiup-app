import { take } from 'redux-saga/effects';

import { NAVIGATE } from '../actions';
import NavigationService from '../services/navigation';

export default function* watch() {
  while (true) {
    const { routeName, parameters } = yield take(NAVIGATE);
    console.log('HEHE');
    NavigationService.navigate(routeName, parameters);
  }
}
