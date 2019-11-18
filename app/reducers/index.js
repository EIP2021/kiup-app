import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { persistReducer } from 'redux-persist';
import autoMergeLevel1 from 'redux-persist/lib/stateReconciler/autoMergeLevel1';
import AsyncStorage from '@react-native-community/async-storage';

import authenticationReducer from './authenticationReducer';
import statisticsReducer from './statisticsReducer';
import errorReducer from './errorReducer';
import fetchReducer from './fetchReducer';

const authenticationPersistConfig = {
  key: 'auth',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel1,
};

const rootReducers = combineReducers({
  auth: persistReducer(authenticationPersistConfig, authenticationReducer),
  statistics: statisticsReducer,
  error: errorReducer,
  fetch: fetchReducer,
  form: formReducer,
});

export default rootReducers;
