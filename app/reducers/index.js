import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { persistReducer } from 'redux-persist';
import autoMergeLevel1 from 'redux-persist/lib/stateReconciler/autoMergeLevel1';
import AsyncStorage from '@react-native-community/async-storage';

import errorReducer from './errorReducer';
import fetchReducer from './fetchReducer';
import tokenReducer from './tokenReducer';
import createRequestReducer, {
  objectReducer,
  paginatedListReducer,
} from './requestReducer';

const authenticationPersistConfig = {
  key: 'auth',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel1,
};

const tokenPersistConfig = {
  key: 'token',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel1,
};

const rootReducers = combineReducers({
  auth: persistReducer(
    authenticationPersistConfig,
    createRequestReducer(objectReducer, 'auth')
  ),
  statistics: createRequestReducer(objectReducer, 'stats'),
  error: errorReducer,
  fetch: fetchReducer,
  form: formReducer,
  searchProduct: createRequestReducer(paginatedListReducer, 'searchProduct'),
  searchProductQuery: createRequestReducer(objectReducer, 'searchProductQuery'),
  searchRecipe: createRequestReducer(objectReducer, 'searchRecipe'),
  searchRecipeQuery: createRequestReducer(objectReducer, 'searchRecipeQuery'),
  token: persistReducer(tokenPersistConfig, tokenReducer),
});

export default rootReducers;
