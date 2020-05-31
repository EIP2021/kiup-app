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

const createPersistConfig = name => {
  return {
    key: name,
    storage: AsyncStorage,
    stateReconciler: autoMergeLevel1,
  };
};

const rootReducers = combineReducers({
  auth: persistReducer(
    createPersistConfig('auth'),
    createRequestReducer(objectReducer, 'auth')
  ),
  profileInformations: createRequestReducer(
    objectReducer,
    'profileInformations'
  ),
  statistics: createRequestReducer(objectReducer, 'stats'),
  alimentSearched: createRequestReducer(objectReducer, 'alimentSearched'),
  productScanned: createRequestReducer(objectReducer, 'productScanned'),
  error: errorReducer,
  fetch: fetchReducer,
  form: formReducer,
  searchProduct: createRequestReducer(paginatedListReducer, 'searchProduct'),
  searchProductQuery: createRequestReducer(objectReducer, 'searchProductQuery'),
  searchRecipe: createRequestReducer(objectReducer, 'searchRecipe'),
  searchRecipeQuery: createRequestReducer(objectReducer, 'searchRecipeQuery'),
  token: persistReducer(createPersistConfig('token'), tokenReducer),
  consumptionHistory: persistReducer(
    createPersistConfig('consumptionHistory'),
    createRequestReducer(paginatedListReducer, 'consumptionHistory')
  ),
  addRecipe: createRequestReducer(objectReducer, 'addRecipe'),
});

export default rootReducers;
