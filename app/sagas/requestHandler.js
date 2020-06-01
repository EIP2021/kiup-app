import { takeEvery, all, put, call, select } from 'redux-saga/effects';
import {
  FETCH_REQUEST,
  fetchStart,
  fetchEnd,
  fetchError,
  updateData,
} from '../actions';
import { fetcher } from '../helpers';
import { getToken } from '../selectors';

export function* applyChanges(action) {
  yield put(action);
}

export function* selectData(request, name, type, toSelect) {
  const data = yield select(toSelect);
  if (!data) {
    return;
  }
  if (type === 'parameter') {
    request.parameters[name] = data;
  } else if (type === 'payload') {
    request.payload[name] = data;
  }
}

export function* handleRequest({
  name,
  subtype,
  request,
  tokenName,
  selectors,
  onSuccess,
  onFailure,
}) {
  try {
    const token = tokenName ? yield select(getToken, tokenName) : '';
    if (selectors.length !== 0) {
      yield all(
        selectors.map(({ dataName, type, toSelect }) =>
          call(selectData, request, dataName, type, toSelect)
        )
      );
    }
    yield put(fetchStart(name));
    const response = yield call(fetcher, {
      ...request,
      token,
    });
    yield put(fetchEnd(name));
    const actions = onSuccess(name, response, subtype);
    if (actions && actions.length !== 0) {
      yield all(actions.map(action => call(applyChanges, action)));
    } else {
      yield put(updateData(name, response, subtype));
    }
  } catch (err) {
    yield put(fetchError(name, err));
    if (err.status > 500) {
      // TO BE IMPLEMENTED
      return;
    }
    const actions = onFailure(name, err, subtype);
    if (actions && actions.length !== 0) {
      yield all(actions.map(action => call(applyChanges, action)));
    }
  }
}

export default function* watch() {
  yield takeEvery(FETCH_REQUEST, handleRequest);
}
