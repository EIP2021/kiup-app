import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel1 from 'redux-persist/lib/stateReconciler/autoMergeLevel1';

import authenticationReducer from './authenticationReducer';
import scanProductReducer from './scanProductReducer';
import statisticsReducer from './statisticsReducer';
import errorReducer from './errorReducer';
import fetchReducer from './fetchReducer';

const authenticationPersistConfig = {
  key: 'auth',
  storage,
  stateReconciler: autoMergeLevel1,
};

const rootReducers = combineReducers({
  auth: persistReducer(authenticationPersistConfig, authenticationReducer),
  scanner: scanProductReducer,
  statistics: statisticsReducer,
  error: errorReducer,
  fetch: fetchReducer,
  form: formReducer,
});

export default rootReducers;
