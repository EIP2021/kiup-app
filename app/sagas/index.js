import { all } from 'redux-saga/effects';
import requestHandler from './requestHandler';
import navigateHandler from './navigate';
import { searchProduct } from './searchProduct';

export default function* rootSaga() {
  yield all([requestHandler(), navigateHandler(), searchProduct()]);
}
