import { all } from 'redux-saga/effects';
import fetchError from './fetchError';
import login from './login';
import register from './register';
import reinitializePassword from './reinitializePassword';
import modifyPassword from './modifyPassword';

export default function* rootSaga() {
  yield all([fetchError(), login(), register(), modifyPassword(), reinitializePassword()]);
}
