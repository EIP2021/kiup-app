import { all } from 'redux-saga/effects';
import consumeProduct from './consumeProduct';
import fetchError from './fetchError';
import login from './login';
import register from './register';
import reinitializePassword from './reinitializePassword';
import modifyPassword from './modifyPassword';
import scanProduct from './scanProduct';
import getStatistics from './getStatistics';

export default function* rootSaga() {
  yield all([
    consumeProduct(),
    fetchError(),
    login(),
    register(),
    modifyPassword(),
    reinitializePassword(),
    getStatistics(),
    scanProduct(),
  ]);
}
